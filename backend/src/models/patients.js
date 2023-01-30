const db = require("../../config");

const findAllPatients = () => {
  return db
    .promise()
    .query("SELECT * FROM patient")
    .then(([res]) => res);
};

const findPatientById = (id) => {
  return db
    .promise()
    .query("SELECT * FROM patient WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};

const findPatientByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM patient WHERE email = ?", [email])
    .then(([res]) => res);
};

const findPatientByDoctor = (id) => {
  return db
    .promise()
    .query(
      "select patient.*, surgery.name from relation_surgery join surgery on surgery.id = relation_surgery.surgery_id join patient on patient.id = relation_surgery.patient_id join doctor on doctor.id = relation_surgery.doctor_id where doctor.id = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const createPatient = (payload) => {
  return db
    .promise()
    .query("INSERT INTO patient SET ?", [payload])
    .then(([res]) => res);
};

const findPatientBy = (query, findBy) => {
  return db
    .promise()
    .query(`SELECT * FROM patient WHERE ${findBy} LIKE ?`, [`%${query}%`])
    .then(([res]) => res);
};

const updatePatient = (payload, email) => {
  return db
    .promise()
    .query("UPDATE patient SET ? WHERE email = ?", [payload, email])
    .then(([res]) => res);
};
const updateImage = (url, email) => {
  return db
    .promise()
    .query("UPDATE patient SET image = ? WHERE email = ?", [url, email])
    .then(([res]) => res);
};

module.exports = {
  findAllPatients,
  findPatientBy,
  findPatientById,
  findPatientByEmail,
  findPatientByDoctor,
  createPatient,
  updatePatient,
  updateImage,
};
