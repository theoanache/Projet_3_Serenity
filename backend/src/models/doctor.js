const db = require("../../config");

const findAllDoctors = (specialization) => {
  let sql = "select * from doctor";
  const sqlValues = [];

  if (specialization) {
    sql += " where specialization = ?";
    sqlValues.push(specialization);
  }
  return db
    .promise()
    .query(sql, sqlValues)
    .then(([res]) => res);
};

const findOneDoctor = (id) => {
  return db
    .promise()
    .query("SELECT * FROM doctor WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

const findOneDoctorByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM doctor WHERE email = ?", [email])
    .then(([res]) => res);
};

const createOneDoctor = (payload) => {
  return db
    .promise()
    .query("INSERT INTO doctor SET ?", [payload])
    .then(([res]) => res);
};

const updateDoctor = (payload, id) => {
  return db
    .promise()
    .query("UPDATE doctor SET ? WHERE id=?", [payload, Number(id)])
    .then(([res]) => res);
};

const deleteDoctor = (id) => {
  return db
    .promise()
    .query("DELETE from doctor WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

module.exports = {
  findAllDoctors,
  findOneDoctor,
  findOneDoctorByEmail,
  createOneDoctor,
  updateDoctor,
  deleteDoctor,
};
