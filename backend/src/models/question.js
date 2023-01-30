const db = require("../../config");

const findAllAsk = () => {
  return db
    .promise()
    .query("SELECT * FROM question")
    .then(([res]) => res);
};

const createOneAsk = (payload) => {
  return db
    .promise()
    .query("INSERT INTO question SET ?", [payload])
    .then((res) => res);
};

const updateOneAsk = (payload, id) => {
  return db
    .promise()
    .query("UPDATE question SET ? WHERE id = ?", [payload, Number(id)])
    .then((res) => res);
};

const deleteOneAsk = (id) => {
  return db
    .promise()
    .query("DELETE FROM question WHERE id = ?", [Number(id)])
    .then((res) => res);
};

module.exports = { findAllAsk, createOneAsk, deleteOneAsk, updateOneAsk };
