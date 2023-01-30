const express = require("express");

const surgeryRouter = express.Router();

const {
  getSurgery,
  getOneSurgery,
  addSurgery,
  updateSurgery,
  deleteSurgery,
  getRessourcesbySurgery,
  getDoctorsBySurgery,
  getPatientsBySurgery,
  addSurgeryBydoctorIdAndPatientId,
  getRessourcesbySurgerybyPatient,
  getSurgeryByPatient,
  getTimeDate,
  getSurgeryByDoctor,
} = require("../controllers/surgeryController");

const authorization = require("../../../../../checkpoint/checkpoint4/backend/src/helpers/authentication");

surgeryRouter.get("/", getSurgery);
surgeryRouter.get("/:id", getOneSurgery);
surgeryRouter.post("/", addSurgery);
surgeryRouter.post("/newPatient", addSurgeryBydoctorIdAndPatientId);
surgeryRouter.put("/:name", updateSurgery);
surgeryRouter.delete("/:id", deleteSurgery);
surgeryRouter.get("/:id/ressources", getRessourcesbySurgery);
surgeryRouter.get("/:id/doctors", getDoctorsBySurgery);
surgeryRouter.get("/:id/patients", getPatientsBySurgery);
surgeryRouter.get(
  "/ressources/:id",
  authorization,
  getRessourcesbySurgerybyPatient
);
surgeryRouter.get("/byPatient/:id", authorization, getSurgeryByPatient);
surgeryRouter.get("/search/timeDate", getTimeDate);
surgeryRouter.get("/doctorSurgeries/:id", getSurgeryByDoctor);

module.exports = surgeryRouter;
