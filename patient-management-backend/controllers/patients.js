const bcrypt = require("bcrypt");
const patientRoute = require("express").Router();
const Patient = require("../models/patientSchema");

patientRoute.get("/", (request, response) => {
  Patient.find({}).then((result) => {
    response.json(result);
  });
});

patientRoute.post("/", async (request, response, next) => {
  const body = request.body;
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
module.exports = patientRoute;
