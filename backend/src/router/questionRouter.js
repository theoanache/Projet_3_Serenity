const express = require("express");

const questionRouter = express.Router();

const {
  getAsk,
  addAsk,
  deleteAsk,
  updateAsk,
} = require("../controllers/questionController");

questionRouter.get("/", getAsk);
questionRouter.post("/", addAsk);
questionRouter.put("/:id", updateAsk);
questionRouter.delete("/:id", deleteAsk);
module.exports = questionRouter;
