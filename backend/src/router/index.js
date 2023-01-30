const express = require("express");
const doctorRouter = require("./doctorRouter");
const patientRouter = require("./patientRouter");
const surgeryRouter = require("./surgeryRouter");
const questionRouter = require("./questionRouter");
const questionResultRouter = require("./questionResultRouter");
const ressourceRouter = require("./ressourceRouter");
const documentRouter = require("./documentRouter");
const userRouter = require("./userRouter");
const chatRouter = require("./chatRouter");

const router = express.Router();

router.use("/patients", patientRouter);
router.use("/surgeries", surgeryRouter);
router.use("/question", questionRouter);
router.use("/question_result", questionResultRouter);
router.use("/doctors", doctorRouter);
router.use("/ressources", ressourceRouter);
router.use("/documents", documentRouter);
router.use("/users", userRouter);
router.use("/chats", chatRouter);

module.exports = router;
