//Operation:
// C --> create (POST method)
// R --> read (GET method)
// U --> update (PUT method)
// D --> delete (DELETE method)

// Commands:
// npm init -y
// npm install express
// npm install nodemon --save-dev

//TO RUN THE SERVER:
// nodemon index.js [index.js is the name of the file]

const express = require("express");
const { v4: uuidv4 } = require('uuid');
const { items } = require("./data");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (request,response) => {
  response.send("GET request received!");
})

app.get("/items", (request,response) => {
  response.status(200).json(items);
})

app.get("/items/:id", (request,response) => {
  const { id } = request.params;

  const item = items.find((item) => String(item.id) === id);

  if (!item){
    response.status(404).json({
      error: "Item not found!"
    });
  }
  response.status(200).json(item);
});


// app.post("/", (request,response) => {
//   response.send("POST request received!");
// });

app.post("/items", (request, response) => {
  const {name, description, category} = request.body;

  if (!name ||!description ||!category){
    response.status(400).json({
      error: "Missing required fields!"
    });
  }

  const newItem = {
    id: uuidv4(),
    name,
    description,
    category,
  };

  items.push(newItem);

  response.status(201).json(items);
});

// app.put("/", (request,response) => {
//   response.send("PUT request received!");
// });
app.put("/items/:id", (request, response) => {
  const { id } = request.params;
  const {name, description, category} = request.body;

  const item = items.find((item) => String(item.id) === id);

  if (!item) {
    response.status(404).json({
      error: "Item not found!"
    });
  }

  if (!name && !description && !category){
    response.status(400).json({
      error: "Missing required fields!"
    });
  }

  item.name = name || item.name;
  item.description = description || item.description;
  item.category = category || item.category;

  response.status(200).json(item);
})

// app.delete("/", (request,response) => {
//   response.send("DELETE request received!");
// });
app.delete("/items/:id", (request,response) => {
  const { id } = request.params;

  const item = items.find((item) => String(item.id) === id);

  index = items.indexOf(item);
  items.splice(index, 1);

  if (!item) {
    response.status(404).json({
      error: "Item not found!"
    });
  }

  const filteredItems = items.filter((item) => String(item.id) !== id);
  response.status(200).json(filteredItems);
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});