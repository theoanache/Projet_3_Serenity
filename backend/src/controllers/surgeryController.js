const surgeryModel = require("../models/surgery");

const surgeryController = {
  getSurgery: (_, res, next) => {
    surgeryModel
      .findAllSurgery()
      .then((surgery) => res.send(surgery))
      .catch((err) => next(err));
  },

  getOneSurgery: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .findOneSurgery(id)
      .then((surgery) => {
        if (surgery.length === 0) {
          res.status(404).send(` Id ${id} doesn't exists`);
        } else {
          res.send(surgery[0]);
        }
      })
      .catch((err) => next(err));
  },

  getSurgeryByPatient: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .findSurgeryByPatient(id)
      .then((surgery) => {
        if (surgery.length === 0) {
          res.status(404).send(` Id ${id} doesn't exists`);
        } else {
          res.send(surgery[0]);
        }
      })
      .catch((err) => next(err));
  },

  addSurgery: (req, res) => {
    const surgeryData = req.body;
    surgeryModel
      .createOneSurgery(surgeryData)
      .then((surgery) => {
        if (surgery.affectedRows !== 0) {
          res
            .status(201)
            .send({ message: "Votre chirurgie a été ajoutée! 😀" });
        } else {
          res.status(401).send({ message: "Error add surgery 😞" });
        }
      })
      .catch(() => {
        res.status(500).send({ message: "Il manque des données! 😞" });
      });
  },

  addSurgeryBydoctorIdAndPatientId: (req, res) => {
    const data = req.body;
    surgeryModel
      .createSurgeryByPatientIdAndDoctorId(data)
      .then((surgery) => {
        if (surgery.affectedRows !== 0) {
          res.status(201).send({
            message: "Patient ajouté! 👍🏻",
          });
        } else {
          res.status(401).send({ message: "Error adding patient 😞" });
        }
      })
      .catch(() => {
        res.status(500).send({ message: "Il manque des données! 😞 " });
      });
  },

  updateSurgery: (req, res, next) => {
    const { name } = req.params;
    const surgeryData = req.body;
    surgeryModel
      .updateSurgery(surgeryData, name)
      .then((surgery) => {
        if (surgery.affectedRows !== 0) {
          res.send({ message: "Votre chirurgie a été mise à jour" });
        } else {
          res.status(400).send({ message: " Error updating Surgery" });
        }
      })
      .catch((err) => next(err));
  },

  deleteSurgery: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .deleteSurgery(id)
      .then((surgery) => {
        if (surgery.affectedRows !== 0) {
          res.send(`The surgery with id ${id} has been deleted`);
        } else {
          res.status(400).send("surgery not found");
        }
      })
      .catch((err) => next(err));
  },

  getRessourcesbySurgery: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .findRessourceBySurgery(id)
      .then((ressource) => res.send(ressource))
      .catch((err) => next(err));
  },

  getRessourcesbySurgerybyPatient: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .findRessourceBySurgeryByPatient(id)
      .then((ressource) => res.send(ressource))
      .catch((err) => next(err));
  },

  getDoctorsBySurgery: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .findDoctorBySurgery(id)
      .then((doctor) => res.send(doctor[0]))
      .catch((err) => next(err));
  },

  getPatientsBySurgery: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .findPatientBySurgery(id)
      .then((patient) => res.send(patient))
      .catch((err) => next(err));
  },

  getTimeDate: (_, res, next) => {
    surgeryModel
      .getTimeAndDate()
      .then((time) => res.send(time))
      .catch((err) => next(err));
  },

  getSurgeryByDoctor: (req, res, next) => {
    const { id } = req.params;
    surgeryModel
      .findSurgeryByDoctor(id)
      .then((surgery) => res.send(surgery))
      .catch((err) => next(err));
  },
};

module.exports = surgeryController;
