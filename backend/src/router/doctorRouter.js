const express = require("express");

const doctorRouter = express.Router();

const {
  getDoctors,
  getDoctorById,
  getDoctorByEmail,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");
const authorization = require("../../../../../checkpoint/checkpoint4/backend/src/helpers/authentication");

doctorRouter.get("/", getDoctors);
doctorRouter.get("/email", authorization, getDoctorByEmail);
doctorRouter.get("/:id", getDoctorById);
doctorRouter.post("/", addDoctor);
doctorRouter.put("/:id", updateDoctor);
doctorRouter.delete("/:id", deleteDoctor);

module.exports = doctorRouter;
