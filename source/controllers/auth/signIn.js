const User = require("../../models/auth");
const bcrypt = require("bcrypt");
const {createToken} = require("../../utils")

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

  const token = createToken(newUser._id);

  return res.status(200).json({token, user});
};

module.exports = {
  signIn,
};