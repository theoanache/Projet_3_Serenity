import React, { useEffect, useState } from "react";
import axios from "axios";
import socketIO from "socket.io-client";
import { PropTypes } from "prop-types";
import MessageChat from "./MessageChat";
import ContactChat from "./ContactChat";

const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL);

function ContainerChat({ loginData }) {
  const [chatMessage, setChatMessage] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const [active, setActive] = useState();
  const addNewMsg = (message) => {
    axios
      .post(
        "http://localhost:8000/api/chats/messages/new",
        {
          chat_id: message.chat_id,
          from_user_id: message.from_user_id,
          msg_text: message.msg_text,
          created_at: message.created_at,
          to_user_id: message.to_user_id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 201) {
          console.warn("Message sent!");
        }
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    socket.on("newMessage", (message) => {
      setChatMessage((list) => [...list, message]);
      addNewMsg(message);
    });
  }, [socket]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/chats", { withCredentials: true })
      .then((res) => {
        setContacts(res.data);
        setActive({ to_user_id: res.data[0].id, chat_id: res.data[0].chat });
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="w-[28%] h-[70%] bg-white fixed right-5 bottom-28 rounded-2xl flex flex-col items-center ring-2 ring-gray-300 shadow-[0_40px_60px_-15px_rgba(0,0,0,0.7)] z-50">
      {contacts && (
        <ContactChat
          socket={socket}
          contacts={contacts}
          setActive={setActive}
        />
      )}
      {active !== undefined && (
        <MessageChat
          socket={socket}
          typingStatus={typingStatus}
          setTypingStatus={setTypingStatus}
          chatMessage={chatMessage}
          active={active}
          loginData={loginData}
        />
      )}
    </div>
  );
}

ContainerChat.propTypes = {
  loginData: PropTypes.objectOf.isRequired,
};

export default ContainerChat;
