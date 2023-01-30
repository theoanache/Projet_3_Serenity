import { useState } from "react";
import PropTypes from "prop-types";
import Check from "./assets/dossier-operation-fait.png";
import NotCheck from "./assets/dossier-operation-a-lire.png";
import "./folder.css";

function Folder({ image }) {
  const [folder, setFolder] = useState(NotCheck);
  const [document, setDocument] = useState(true);

  const handleClick = () => {
    setFolder(Check);
    setDocument(!document);
  };

  return (
    <div className="">
      <img
        src={
          document ? folder : `http://localhost:8000/SurgeryRessource/${image}`
        }
        role="presentation"
        className={`w-36 cursor-pointer transform transition duration-500 ${
          document
            ? "z-0"
            : "relative hover:scale-[5] hover:-translate-y-40 hover:translate-x-20 hover:z-50"
        }`}
        alt="Ressource"
        onClick={handleClick}
      />
    </div>
  );
}

Folder.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Folder;
