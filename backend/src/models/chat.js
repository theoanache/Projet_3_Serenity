const db = require("../../config");

const getAllChatsByUser = (userId) => {
  return db
    .promise()
    .query(
      "select distinct u2.id, u2.firstname as firstname, u2.lastname as lastname, u2.image as image, chat_conversation.id as chat from chat_msg join chat_conversation on chat_conversation.id = chat_msg.chat_id join user as u1 on u1.id = chat_msg.from_user_id OR u1.id = chat_msg.to_user_id join user as u2 on u2.id = chat_msg.from_user_id OR u2.id = chat_msg.to_user_id where u1.id = ? AND u2.id != u1.id",
      [Number(userId)]
    )
    .then(([res]) => res);
};

const getAllMsgsByChat = (chatId) => {
  return db
    .promise()
    .query(
      "select user.id, user.firstname, user.lastname, msg_text, created_at from chat_msg join chat_conversation on chat_conversation.id = chat_msg.chat_id join user on user.id = chat_msg.from_user_id where chat_conversation.id = ?",
      [Number(chatId)]
    )
    .then(([res]) => res);
};

const addNewMessage = (payload) => {
  return db
    .promise()
    .query("insert into chat_msg set ?", [payload])
    .then(([res]) => res);
};

module.exports = {
  getAllChatsByUser,
  getAllMsgsByChat,
  addNewMessage,
};
