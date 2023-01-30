const questionResultModel = require("../models/questionResult");

const questionResultController = {
  getResults: (req, res, next) => {
    const { id } = req.params;
    questionResultModel
      .findAllResults(id)
      .then(([results]) => res.send(results))
      .catch((err) => next(err));
  },
  addResult: (req, res, next) => {
    const resultData = req.body;
    questionResultModel
      .createOneResult(resultData)
      .then((result) => res.status(201).send(result))
      .catch((err) => next(err));
  },
};

module.exports = questionResultController;
