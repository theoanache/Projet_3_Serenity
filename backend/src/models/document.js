const db = require("../../config");

const findAllDocuments = (mandatory) => {
  let sql = "SELECT * FROM document";

  if (mandatory) {
    sql += " where mandatory = ?";
  }
  return db
    .promise()
    .query(sql, [Number(mandatory)])
    .then(([res]) => res);
};

const findOneDocument = (id) => {
  return db
    .promise()
    .query("SELECT * FROM document WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

const findDocumentByPatient = (id) => {
  return db
    .promise()
    .query(
      "SELECT * FROM document LEFT JOIN patient_document ON document.id=patient_document.document_id LEFT JOIN patient ON patient.id=patient_document.patient_id WHERE patient_id=?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const checkedDocument = (payload, patientId, documentId) => {
  return db
    .promise()
    .query(
      "UPDATE patient_document SET ? WHERE patient_id=? AND document_id=?",
      [payload, Number(patientId), Number(documentId)]
    )
    .then(([res]) => res);
};

const createOneDocument = (payload) => {
  return db
    .promise()
    .query("INSERT INTO document SET ?", [payload])
    .then(([res]) => res);
};

const updateDocument = (payload, id) => {
  return db
    .promise()
    .query("UPDATE document SET ? WHERE id=?", [payload, Number(id)])
    .then(([res]) => res);
};

const deleteDocument = (id) => {
  return db
    .promise()
    .query("DELETE FROM document WHERE id=?", [Number(id)])
    .then(([res]) => res);
};

module.exports = {
  findAllDocuments,
  findOneDocument,
  findDocumentByPatient,
  checkedDocument,
  createOneDocument,
  updateDocument,
  deleteDocument,
};
