const db = require("../../config");

const findAllResults = (id) => {
  return db
    .promise()
    .query(
      "SELECT ROUND(AVG(valeur)) as average FROM patient RIGHT JOIN question_result ON patient.id=question_result.patient_id WHERE patient_id = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const createOneResult = (payload) => {
  return db
    .promise()
    .query("INSERT INTO question_result SET ?", [payload])
    .then((res) => res);
};

module.exports = { findAllResults, createOneResult };
