const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const {authorization}  = req.headers;

  if (!authorization){
    return res.status(401).json({ error: "No Token Provided" });
  }

  const token = authorization.replace("Bearer","")

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded

    req.userId = id;
    next();
    }catch(error){
      return res.status(401).json({ error:"Invalid Token"});
   };
};

module.exports = authMiddleware
