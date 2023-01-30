import img1 from "./assets/douche.png";
import img2 from "./assets/essentiel.png";
import img3 from "./assets/jeune.jpg";

const dataPreparationArrivee = [
  {
    id: 1,
    label: "Étape 1",
    title: "Votre dossier administratif",
    img: img2,
    title1:
      "A votre arrivée, l’hôpital constitue un dossier administratif complet qui vous permettra de ne pas avancer les frais de consultation.",
    soustitre: "Pour une consultation, il faudra apporter :",
    liste: {
      a: "Votre carte vitale ou l’attestation en cours de validité",
      z: "Votre carte de mutuelle ou d’une attestation en cours de validité",
      e: "Une pièce d’identité (carte d’identité, passeport, permis de conduire),",
      r: "Votre déclaration de médecin traitant",
    },
  },
  {
    id: 2,
    label: "Étape 2",
    title: "La douche au savon Ph neutre",
    img: img1,
    title1:
      "Afin de préparer un patient avant une intervention chirurgicale, on effectuera un lavage de l'ensemble du corps et des cheveux moins de 2h avant l'opération, à l'aide de 60 ml de Bétadine rouge (un demi flacon). ",
    soustitre: "Cette opération sera réalisée en 4 temps :",
    liste: {
      a: "Frotter jusqu'à décoloration de la mousse la tête et les cheveux avec 10 ml de Bétadine. Ne pas rincer immédiatement.",
      z: "Répéter l'opération au niveau du tronc et des membres supérieurs en insistant sur les aisselles. Attendez pour rincer.",
      e: "Recommencez avec les membres inférieurs et les organes génitaux en insistant bien sur les plis et les replis. Rincez.",
      r: "Rincez abondamment l'ensemble du corps.",
      t: "Recommencez les opérations de lavage dans l'ordre puis séchez vous avec une serviette propre et passez des vêtements propres.",
    },
  },
  {
    id: 3,
    label: "Étape 3",
    title: "Le jeune pré-opératoire",
    img: img3,
    title1: "Le jeune pré-opératoire est un repas léger et équilibré.",
    soustitre: "Le jeune pré-opératoire est un repas léger et équilibré.",
    liste: {
      a: "Il est recommandé de ne pas manger ni boire 6h avant l'intervention.",
      z: "Il est conseillé de ne pas fumer 6h avant l'intervention.",
      e: "Il est recommandé de ne pas prendre de médicaments 6h avant l'intervention.",
      r: "Il est recommandé de ne pas prendre de médicaments 6h avant l'intervention.",
      t: "Il est recommandé de ne pas prendre de médicaments 6h avant l'intervention.",
    },
  },
  {
    id: 4,
    label: "Étape 3",
    title: "Le jeune pré-opératoire",
    img: img3,
    title1: "Le jeune pré-opératoire est un repas léger et équilibré.",
    soustitre: "Le jeune pré-opératoire est un repas léger et équilibré.",
    liste: {
      a: "Il est recommandé de ne pas manger ni boire 6h avant l'intervention.",
      z: "Il est conseillé de ne pas fumer 6h avant l'intervention.",
      e: "Il est recommandé de ne pas prendre de médicaments 6h avant l'intervention.",
      r: "Il est recommandé de ne pas prendre de médicaments 6h avant l'intervention.",
      t: "Il est recommandé de ne pas prendre de médicaments 6h avant l'intervention.",
    },
  },
];

export default dataPreparationArrivee;
