import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import svg from "./assets/chat.svg";
import ContainerChat from "./ContainerChat";

function ChatBox() {
  const [showChat, setShowChat] = useState(false);
  const { loginData } = useAuth();
  const handleShowPopup = () => {
    setShowChat(!showChat);
  };
  return (
    <div>
      <div className="fixed bottom-5 right-5 bg-violet-two h-16 w-16 rounded-full flex justify-center items-center z-50">
        <img
          src={svg}
          alt="chat"
          className="w-full h-full cursor-pointer"
          onClick={handleShowPopup}
          role="presentation"
        />
      </div>
      {showChat && <ContainerChat loginData={loginData} />}
    </div>
  );
}

export default ChatBox;
