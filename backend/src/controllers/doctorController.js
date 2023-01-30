const doctorModel = require("../models/doctor");

const doctorController = {
  getDoctors: (req, res, next) => {
    const { specialization } = req.query;
    doctorModel
      .findAllDoctors(specialization)
      .then((doctors) => res.send(doctors))
      .catch((err) => next(err));
  },

  getDoctorById: (req, res, next) => {
    const { id } = req.params;
    doctorModel
      .findOneDoctor(id)
      .then((result) => {
        if (result.length === 0) {
          res.status(404).send(` Id ${id} doesn't exists`);
        } else {
          res.send(result[0]);
        }
      })
      .catch((err) => next(err));
  },
  getDoctorByEmail: (req, res, next) => {
    const email = req.userEmail;
    doctorModel
      .findOneDoctorByEmail(email)
      .then((result) => {
        if (result.length === 0) {
          res.status(404).send(`Doctor doesn't exists`);
        } else {
          res.send(result[0]);
        }
      })
      .catch((err) => next(err));
  },

  getOneDoctor: (req, res, next) => {
    const email = req.userEmail;
    doctorModel
      .findDoctorByEmail(email)
      .then((result) => res.send(result))
      .catch((err) => next(err));
  },

  addDoctor: (req, res, next) => {
    const doctorData = req.body;
    doctorModel
      .createOneDoctor({ ...doctorData, role_id: 1 })
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.send(" Doctor has been created");
        } else {
          res.status(400).send(" Error adding doctor");
        }
      })
      .catch((err) => next(err));
  },

  updateDoctor: (req, res, next) => {
    const { id } = req.params;
    const doctorData = req.body;
    doctorModel
      .updateDoctor(doctorData, id)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.send("Doctor has been updated");
        } else {
          res.status(400).send(" Error updating doctor");
        }
      })
      .catch((err) => next(err));
  },

  deleteDoctor: (req, res, next) => {
    const { id } = req.params;
    doctorModel
      .deleteDoctor(id)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.send(`The user with id ${id} has been deleted`);
        } else {
          res.status(400).send("User not found");
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = doctorController;
