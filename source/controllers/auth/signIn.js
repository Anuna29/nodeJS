const User = require("../../models/auth");
const bcrypt = require("bcrypt");

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email });

  if(!user){
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({
    _id: user._id,
    email: user.email,
    username: user.username,
  });
};

module.exports = {
  signIn,
};