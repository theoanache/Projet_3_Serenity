const express = require("express");

const documentRouter = express.Router();

const {
  getDocuments,
  getDocumentById,
  getDocumentByPatient,
  updateCheckedDocument,
  addDocument,
  updateDocument,
  deleteDocument,
} = require("../controllers/documentController");

documentRouter.get("/", getDocuments);
documentRouter.get("/:id", getDocumentById);
documentRouter.get("/patient/:id", getDocumentByPatient);
documentRouter.put(
  "/patient/:patientId/document/:documentId",
  updateCheckedDocument
);
documentRouter.post("/", addDocument);
documentRouter.put("/:id", updateDocument);
documentRouter.delete("/:id", deleteDocument);

module.exports = documentRouter;
