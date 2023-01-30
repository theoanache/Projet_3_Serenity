const express = require("express");

const chatRouter = express.Router();

const {
  getConversations,
  getMessages,
  addNewMessage,
} = require("../controllers/chatController");
const authorization = require("../helpers/authentication");

chatRouter.get("/", authorization, getConversations);
chatRouter.get("/messages/:chatId", authorization, getMessages);
chatRouter.post("/messages/new", authorization, addNewMessage);

module.exports = chatRouter;
