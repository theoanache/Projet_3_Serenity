const documentModel = require("../models/document");

const documentController = {
  getDocuments: (req, res, next) => {
    const { mandatory } = req.query;
    documentModel
      .findAllDocuments(mandatory)
      .then((documents) => res.send(documents))
      .catch((err) => next(err));
  },

  getDocumentById: (req, res, next) => {
    const { id } = req.params;
    documentModel
      .findOneDocument(id)
      .then((result) => {
        if (result.length === 0) {
          res.status(404).send(`Id ${id} doesn't exists`);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },

  getDocumentByPatient: (req, res, next) => {
    const { id } = req.params;
    documentModel
      .findDocumentByPatient(id)
      .then((result) => {
        if (result.length === 0) {
          res.status(404).send(`Patient Id ${id} doesn't exists`);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },

  updateCheckedDocument: (req, res, next) => {
    const { patientId, documentId } = req.params;
    documentModel
      .checkedDocument(req.body, patientId, documentId)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.send("Document has been updated successfully");
        } else {
          res.status(400).send(" Error updating document");
        }
      })
      .catch((err) => next(err));
  },

  addDocument: (req, res, next) => {
    const documentData = req.body;
    documentModel
      .createOneDocument(documentData)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.send("Document has been added successfully");
        } else {
          res.status(400).send("Error adding document");
        }
      })
      .catch((err) => next(err));
  },

  updateDocument: (req, res, next) => {
    const { id } = req.params;
    const documentData = req.body;
    documentModel
      .updateDocument(documentData, id)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.send("Document has been updated successfully");
        } else {
          res.status(400).send(" Error updating document");
        }
      })
      .catch((err) => next(err));
  },

  deleteDocument: (_req, res, next) => {
    const { id } = _req.params;
    documentModel
      .deleteDocument(id)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.send("Document has been deleted successfully");
        } else {
          res.status(400).send(" Error deleting document");
        }
      })
      .catch((err) => next(err));
  },
};
module.exports = documentController;
