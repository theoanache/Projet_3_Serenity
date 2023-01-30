import React from "react";
import PropTypes from "prop-types";

function ContactChat({ socket, contacts, setActive }) {
  const joinChat = (chat, userId) => {
    socket.emit("join_room", chat);
    setActive({ to_user_id: userId, chat_id: chat });
  };
  return (
    <div className="w-full h-[18%] bg-background-lighty rounded-t-2xl flex gap-6 justify-center items-center p-3">
      {contacts &&
        contacts.map((el) => (
          <div className="flex flex-col justify-center items-center">
            <div
              className="w-[50px] h-[50px] bg-gray-300 rounded-full text-2xl text-gray-500 flex justify-center items-center cursor-pointer"
              role="presentation"
              onClick={() => joinChat(el.chat, el.id)}
            >
              <img src={el.image} alt="avatar" />
            </div>
            <div className="text-sm text-gray-700 flex text-center ">
              {`${el.firstname} ${el.lastname}`}
            </div>
          </div>
        ))}
    </div>
  );
}

ContactChat.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      chat: PropTypes.number.isRequired,
    })
  ).isRequired,
  setActive: PropTypes.func.isRequired,
  socket: PropTypes.objectOf.isRequired,
};

export default ContactChat;
