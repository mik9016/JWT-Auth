const router = require("express").Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//VALIDATION

router.post("/register", async (req, res) => {
  //Validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the user is already in db

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //hash the password

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(500).send(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  //Validate data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the email is already in db

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is wrong!");

  //password is correct
    const validPass = await bcrypt.compare(req.body.password,user.password);
  if(!validPass) return res.status(400).send(" password is wrong!");


  //create and assign a Token
    const SECRET = process.env.TOKEN_SECRET;
    const token = jwt.sign({_id: user._id},SECRET);
    res.header('auth-token', token).send(token);
    // res.send('Logged In!')
});

module.exports = router;
