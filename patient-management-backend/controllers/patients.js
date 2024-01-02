const bcrypt = require("bcrypt");
const patientRoute = require("express").Router();
const jwt = require("jsonwebtoken");
const Patient = require("../models/patientSchema");
const User = require("../models/userSchema");

patientRoute.get("/", (request, response) => {
  Patient.find({}).then((result) => {
    response.json(result);
  });
});

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

patientRoute.post("/", async (request, response, next) => {
  const body = request.body;
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "invalid token" });
  }
  const user = await User.findById(decodedToken.id);
  const newPatient = new Patient({
    ...request.body,
    /*
    full_name: body.full_name,
    email: body.email,
    contact: body.contact,
    DOB: body.DOB,
    gender: body.gender,
    image: body.image,
      */
  });
  try {
    const savedPatient = await newPatient.save();
    response.status(201).json(savedPatient);
  } catch (e) {
    next(e);
  }
});

patientRoute.delete("/:id", async (request, response, next) => {
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
   if (!decodedToken.id) {
     return response.status(401).json({ error: "invalid token" });
  }
  const user = await User.findById(decodedToken.id);
  try {
    await Patient.findByIdAndDelete(request.params.id);
    response.status(204).end();
  } catch (error) {
    next(error);
  }
});
module.exports = patientRoute;
