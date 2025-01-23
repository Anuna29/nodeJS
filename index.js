const express = require("express");

const app = express();

const PORT = 8000;

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
// nodemon index.js [index.js is the name of the file¬¬¬¬¬]

app.get("/", (request,response) => {
  response.send("GET request received!");
})

app.post("/", (request,response) => {
  response.send("POST request received!");
});

app.put("/", (request,response) => {
  response.send("PUT request received!");
});

app.delete("/", (request,response) => {
  response.send("DELETE request received!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});