const bcrypt = require("bcrypt");
const userRoute = require("express").Router();
const User = require("../models/userSchema");

userRoute.get("/", (request, response) => {
  User.find({}).then((result) => {
    response.json(result);
  });
});
userRoute.post("/signup", async (request, response, next) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const newUser = new User({
    email: body.email,
    passwordHash,
  });
  try {
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
  } catch (e) {
    next(e);
  }
});
module.exports = userRoute;
