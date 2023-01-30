const ressourceModel = require("../models/ressource");

const ressourceController = {
  getRessources: (_, res, next) => {
    ressourceModel
      .findAllRessources()
      .then((ressources) => res.send(ressources))
      .catch((err) => next(err));
  },
  getOneRessource: (req, res, next) => {
    const { id } = req.params;
    ressourceModel
      .findOneRessource(id)
      .then((ressource) => {
        if (ressource.length === 0) {
          res.status(404).send(` Id ${id} doesn't exists`);
        } else {
          res.send(ressource[0]);
        }
      })
      .catch((err) => next(err));
  },
  addRessource: (req, res, next) => {
    const ressourceData = req.body;
    ressourceModel
      .createOneRessource(ressourceData)
      .then((ressource) => {
        if (ressource.affectedRows !== 0) {
          res.send(" Ressource has been created");
        } else {
          res.status(400).send(" Error adding ressource");
        }
      })
      .catch((err) => next(err));
  },

  updateRessource: (req, res, next) => {
    const { id } = req.params;
    const ressourceData = req.body;
    ressourceModel
      .updateRessource(ressourceData, id)
      .then((ressource) => {
        if (ressource.affectedRows !== 0) {
          res.send("Ressource has been updated");
        } else {
          res.status(400).send(" Error updating Ressource");
        }
      })
      .catch((err) => next(err));
  },

  deleteRessource: (req, res, next) => {
    const { id } = req.params;
    ressourceModel
      .deleteRessource(id)
      .then((ressource) => {
        if (ressource.affectedRows !== 0) {
          res.send(`The ressource with id ${id} has been deleted`);
        } else {
          res.status(400).send("ressource not found");
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = ressourceController;
