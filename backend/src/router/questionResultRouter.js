const express = require("express");

const questionResultRouter = express.Router();

const {
  getResults,
  addResult,
} = require("../controllers/questionResultController");

questionResultRouter.get("/:id", getResults);
questionResultRouter.post("/", addResult);

module.exports = questionResultRouter;
