import React, { useEffect, useState } from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { PropTypes } from "prop-types";
import { useAuth } from "../contexts/AuthContext";
import send from "./assets/send.svg";

function InputChat({ socket, active, setTypingStatus }) {
  const [inputMessage, setInputMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { loginData } = useAuth();
  const handleEmojiShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = (emojiObject) => {
    let message = inputMessage;
    message += emojiObject.emoji;
    setInputMessage(message);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage !== "") {
      socket.emit("sendMessage", {
        chat_id: active.chat_id,
        from_user_id: loginData.data.id,
        firstname: loginData.data.firstname,
        lastname: loginData.data.lastname,
        msg_text: inputMessage,
        created_at: new Date().toLocaleString("fr-FR"),
        to_user_id: active.to_user_id,
      });
    }
    setInputMessage("");
    setShowEmojiPicker(false);
  };
  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };
  let timeOut;
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      clearTimeout(timeOut);
      handleSendMessage(e);
      socket.emit("typing", { typing: false });
    } else {
      socket.emit("typing", { typing: true });
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        socket.emit("typing", { typing: false });
      }, 4000);
    }
  };
  useEffect(() => {
    socket.on("isTyping", (data) => setTypingStatus(data));
  }, [socket]);
  return (
    <div className="w-[100%] h-[9%] p-2 flex justify-center items-center bg-background-lighty rounded-2xl">
      <div className="flex items-center h-7 w-[90%] gap-3">
        <div className="">
          <div className="relative text-violet-one cursor-pointer">
            <div className="text-3xl">
              <BsFillEmojiSmileFill onClick={handleEmojiShow} />
            </div>
            <div className="absolute -top-[360px]">
              {showEmojiPicker && (
                <EmojiPicker
                  width={250}
                  height={350}
                  onEmojiClick={handleEmojiClick}
                />
              )}
            </div>
          </div>
        </div>
        <form className="w-[100%] h-8 rounded-3xl flex items-center bg-white gap-5">
          <input
            type="text"
            placeholder="Votre message"
            className="w-[100%] h-[60%] bg-transparent placeholder:italic text-font-dark2 border-none pl-3 text-base selection:bg-amber-600 focus:outline-none "
            value={inputMessage || ""}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button
            type="button"
            className=" bg-white rounded-3xl flex justify-center items-center text-font-dark2 h-full"
            onClick={handleSendMessage}
          >
            <img src={send} alt="" className="w-[120%] h-[120%]" />
          </button>
        </form>
      </div>
    </div>
  );
}

InputChat.propTypes = {
  socket: PropTypes.arrayOf.isRequired,
  setTypingStatus: PropTypes.objectOf.isRequired,
  active: PropTypes.objectOf.isRequired,
};

export default InputChat;
