const db = require("../../config");

const findAllSurgery = () => {
  return db
    .promise()
    .query("SELECT * FROM surgery")
    .then(([res]) => res);
};

const findOneSurgery = (id) => {
  return db
    .promise()
    .query("SELECT * FROM surgery WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};

const findSurgeryByPatient = (id) => {
  return db
    .promise()
    .query(
      "SELECT surgery.name, relation_surgery.date , relation_surgery.time FROM relation_surgery INNER JOIN surgery ON surgery.id = relation_surgery.surgery_id INNER JOIN patient ON patient.id = relation_surgery.patient_id WHERE patient.id = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const createOneSurgery = (payload) => {
  return db
    .promise()
    .query("INSERT INTO surgery SET ?", [payload])
    .then(([res]) => res);
};

const createSurgeryByPatientIdAndDoctorId = (payload) => {
  return db
    .promise()
    .query("INSERT INTO relation_surgery SET ?", [payload])
    .then(([res]) => res);
};

const updateSurgery = (payload, name) => {
  return db
    .promise()
    .query("UPDATE surgery SET ? WHERE name=?", [payload, name])
    .then(([res]) => res);
};

const deleteSurgery = (id) => {
  return db
    .promise()
    .query("DELETE from surgery WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

const findSurgeryByDoctor = (id) => {
  return db
    .promise()
    .query(
      "SELECT DISTINCT surgery.*, doctor.id FROM surgery INNER JOIN relation_surgery ON surgery.id = relation_surgery.surgery_id INNER JOIN doctor ON doctor.id = relation_surgery.doctor_id WHERE doctor.id = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const findRessourceBySurgery = (id) => {
  return db
    .promise()
    .query(
      "SELECT ressource.* FROM ressource LEFT JOIN surgery_ressource ON ressource.id=surgery_ressource.ressource_id LEFT JOIN surgery ON surgery.id=surgery_ressource.surgery_id WHERE surgery_id=?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const findRessourceBySurgeryByPatient = (id) => {
  return db
    .promise()
    .query(
      "SELECT ressource.* FROM ressource LEFT JOIN ressource_surgery_patient ON ressource.id=ressource_surgery_patient.ressource_id LEFT JOIN surgery ON surgery.id=ressource_surgery_patient.surgery_id LEFT JOIN patient ON patient.id=ressource_surgery_patient.patient_id WHERE patient_id=?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const findDoctorBySurgery = (id) => {
  return db
    .promise()
    .query(
      "SELECT doctor.* FROM doctor LEFT JOIN relation_surgery ON doctor.id=relation_surgery.doctor_id LEFT JOIN surgery ON surgery.id=relation_surgery.surgery_id  WHERE surgery_id=?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const findPatientBySurgery = (id) => {
  return db
    .promise()
    .query(
      "SELECT DISTINCT patient.* FROM patient LEFT JOIN ressource_surgery_patient AS rsp ON patient.id=rsp.patient_id LEFT JOIN surgery ON surgery.id=rsp.surgery_id  WHERE surgery_id=?",
      [Number(id)]
    )
    .then(([res]) => res);
};
const getTimeAndDate = () => {
  return db
    .promise()
    .query(
      "SELECT r.*, p.firstname AS patientFirstname, p.sex, p.lastname AS patientLastname, d.lastname, s.name AS surgeryName FROM relation_surgery AS r INNER JOIN patient as p ON r.patient_id = p.id INNER JOIN surgery AS s ON r.surgery_id = s.id INNER JOIN doctor AS d ON r.doctor_id = d.id ORDER BY r.date, r.time;"
    )
    .then(([res]) => res);
};

module.exports = {
  findAllSurgery,
  findOneSurgery,
  createOneSurgery,
  updateSurgery,
  deleteSurgery,
  findRessourceBySurgery,
  findDoctorBySurgery,
  findPatientBySurgery,
  createSurgeryByPatientIdAndDoctorId,
  findRessourceBySurgeryByPatient,
  findSurgeryByPatient,
  getTimeAndDate,
  findSurgeryByDoctor,
};
