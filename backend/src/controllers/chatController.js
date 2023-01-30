const chatModel = require("../models/chat");

const chatController = {
  getConversations: (req, res, next) => {
    const id = req.userId;
    chatModel
      .getAllChatsByUser(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => next(err));
  },
  getMessages: (req, res, next) => {
    const { chatId } = req.params;
    chatModel
      .getAllMsgsByChat(chatId)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => next(err));
  },
  addNewMessage: (req, res, next) => {
    const chatData = req.body;
    chatModel
      .addNewMessage(chatData)
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => next(err));
  },
};

module.exports = chatController;
