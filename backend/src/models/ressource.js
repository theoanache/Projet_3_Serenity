const db = require("../../config");

const findAllRessources = () => {
  return db
    .promise()
    .query("SELECT * FROM ressource")
    .then(([res]) => res);
};

const findOneRessource = (id) => {
  return db
    .promise()
    .query("SELECT * FROM ressource WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

const createOneRessource = (payload) => {
  return db
    .promise()
    .query("INSERT INTO ressource SET id=?", [payload])
    .then(([res]) => res);
};

const updateRessource = (payload, id) => {
  return db
    .promise()
    .query("UPDATE ressource SET ? WHERE id=?", [payload, Number(id)])
    .then(([res]) => res);
};

const deleteRessource = (id) => {
  return db
    .promise()
    .query("DELETE FROM ressource WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

module.exports = {
  findAllRessources,
  findOneRessource,
  createOneRessource,
  updateRessource,
  deleteRessource,
};
