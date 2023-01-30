const questionModel = require("../models/question");

const questionController = {
  getAsk: (_, res, next) => {
    questionModel
      .findAllAsk()
      .then((quizz) => res.send(quizz))
      .catch((err) => next(err));
  },
  addAsk: (req, res, next) => {
    const askData = req.body;
    questionModel
      .createOneAsk(askData)
      .then((question) => {
        if (question.affectedRows !== 0) {
          res.send("question has been created");
        } else {
          res.status(400).send("question not created");
        }
      })
      .catch((err) => next(err));
  },
  updateAsk: (req, res, next) => {
    const { id } = req.params;
    const askData = req.body;
    questionModel
      .updateOneAsk(askData, id)
      .then((question) => {
        if (question.affectedRows !== 0) {
          res.send("question has been updated");
        } else {
          res.status(400).send("question not updating");
        }
      })
      .catch((err) => next(err));
  },
  deleteAsk: (req, res, next) => {
    const { id } = req.params;
    questionModel
      .deleteOneAsk(id)
      .then((question) => {
        if (question.affectedRows !== 0) {
          res.send(`question with id ${id} has been deleted`);
        } else {
          res.status(400).send("question not found");
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = questionController;
