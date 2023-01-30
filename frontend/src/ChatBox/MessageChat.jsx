import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import InputChat from "./InputChat";

function MessageChat({
  socket,
  typingStatus,
  chatMessage,
  active,
  loginData,
  setTypingStatus,
}) {
  const lastMessageRef = useRef();
  const scrollingTop = () => {
    const elmnt = lastMessageRef;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };
  useEffect(() => {
    scrollingTop();
  }, [chatMessage]);
  const [messages, setMessages] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/chats/messages/${active.chat_id}`, {
        withCredentials: true,
      })
      .then((result) => {
        setMessages(result.data);
      });
  }, [active, socket]);
  return (
    <div className="h-[84%] w-full flex flex-col justify-end">
      <div className="w-full max-h-[100%] px-5 overflow-y-scroll">
        {messages &&
          messages.map((message) =>
            loginData.data.id === message.id ? (
              <div
                className="w-full flex flex-col pt-2 items-end"
                key={message.id}
              >
                <p className="text-end text-base text-white bg-violet-one rounded-xl py-1 px-2 max-w-[70%]">
                  {message.msg_text}
                </p>
                <p className="mt-1 text-gray-500 text-sm">
                  {message.firstname} {`${message.lastname.slice(0, 1)}.`}
                  {` à ${message.created_at.slice(11, 16)}`}
                </p>
              </div>
            ) : (
              <div className="w-60">
                <div className="flex justify-between items-end h-7 px-2">
                  <p className="text-sm m-O"> </p>
                </div>
                <p className="bg-background-lighty py-1 px-2 rounded-xl text-base max-w-[70%]">
                  {message.msg_text}
                </p>
                <p className="mt-1 text-gray-500 text-sm">
                  {message.firstname} {`${message.lastname.slice(0, 1)}.`}
                  {` à ${message.created_at.slice(11, 16)}`}
                </p>
              </div>
            )
          )}
        {chatMessage
          .filter((message) => message.chat_id === active.chat_id)
          .map((message) =>
            loginData.data.id === message.from_user_id ? (
              <div
                className="w-full flex flex-col pt-2 items-end"
                key={message.id}
              >
                <p className="text-end text-base text-white bg-violet-one rounded-xl py-1 px-2 max-w-[70%]">
                  {message.msg_text}
                </p>
                <p className="mt-1 text-gray-500 text-sm">
                  {message.firstname} {`${message.lastname.slice(0, 1)}.`}
                  {` à ${message.created_at.slice(11, 16)}`}
                </p>
              </div>
            ) : (
              <div className="w-60">
                <div className="flex justify-between items-end h-7 px-2">
                  <p className="text-sm m-O"> </p>
                </div>

                <p className="bg-background-lighty py-1 px-2 rounded-xl text-base max-w-[70%]">
                  {message.msg_text}
                </p>
                <p className="mt-1 text-gray-500 text-sm">
                  {message.firstname} {`${message.lastname.slice(0, 1)}.`}
                  {` à ${message.created_at.slice(11, 16)}`}
                </p>
              </div>
            )
          )}
        <div ref={lastMessageRef} className="py-1" />
      </div>
      {typingStatus && (
        <p className="text-sm text-violet-one pl-3">
          <div className="w-[50px] h-[30px] bg-gray-200 m-3 drop-shadow-sm rounded-full flex justify-center items-center gap-1 px-2 relative before:absolute before:-bottom-0.5 before:-left-0 before:rounded-full before:bg-gray-200 before:border before:border-gray-200 before:w-[13px] before:h-[13px] after:absolute after:-bottom-2 after:-left-1.5 after:rounded-full after:bg-gray-200 after:w-[8px] after:h-[8px]">
            <div className="w-[7px] h-[7px] rounded-full bg-violet-one animate-bounce" />
            <div className="w-[7px] h-[7px] rounded-full bg-violet-one animate-bounce animation-delay-200" />
            <div className="w-[7px] h-[7px] rounded-full bg-violet-one animate-bounce animation-delay-400" />
          </div>
        </p>
      )}
      <InputChat
        socket={socket}
        active={active}
        setTypingStatus={setTypingStatus}
      />
    </div>
  );
}

MessageChat.propTypes = {
  loginData: PropTypes.objectOf.isRequired,
  socket: PropTypes.objectOf.isRequired,
  typingStatus: PropTypes.shape.isRequired,
  chatMessage: PropTypes.arrayOf.isRequired,
  active: PropTypes.number.isRequired,
  setTypingStatus: PropTypes.func.isRequired,
};

export default MessageChat;
