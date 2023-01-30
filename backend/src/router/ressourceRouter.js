const express = require("express");

const ressourceRouter = express.Router();

const {
  getRessources,
  getOneRessource,
  addRessource,
  updateRessource,
  deleteRessource,
} = require("../controllers/ressourceController");

ressourceRouter.get("/", getRessources);
ressourceRouter.get("/:id", getOneRessource);
ressourceRouter.post("/", addRessource);
ressourceRouter.put("/:id", updateRessource);
ressourceRouter.delete("/:id", deleteRessource);

module.exports = ressourceRouter;
