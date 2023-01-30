import img1 from "./Assets/img_2.png";
import img2 from "./Assets/img_1.png";
import img3 from "./Assets/img_3.png";
import img4 from "./Assets/img_4.png";
import img5 from "./Assets/img_5.png";

const formalityAdmin = [
  {
    id: 1,
    img: img1,
    title: "Fiche administrative",
    time: "15 minutes",
    link: "fiche_administrative",
  },
  {
    id: 2,
    img: img2,
    title: "Votre retour mutuelle",
    time: "15 minutes",
    link: "retour_mutuelle",
  },
  {
    id: 3,
    img: img3,
    title: "Consentement éclairé",
    time: "15 minutes",
    link: "consentement_eclaire",
  },
  {
    id: 4,
    img: img4,
    title: "Avez-vous vu votre anesthésiste ?",
    time: "Prendre rendez-vous",
    link: "rendez_vous_anesthesiste",
  },
  {
    id: 5,
    img: img5,
    title: "Signature du devis",
    time: false,
    link: "signature_devis",
  },
];

export default formalityAdmin;
