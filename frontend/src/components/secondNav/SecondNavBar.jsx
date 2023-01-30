import React from "react";
import SecondNavBarItem from "@components/secondNav/SecondNavBarItem";
import { useAuth } from "../../contexts/AuthContext";

function SecondNavBar() {
  const { valueChecklist } = useAuth();
  const dataSecondNavBar = [
    {
      id: 1,
      title: "Comprendre mon opération",
      color: "ring-yellow-one",
      data: 80,
      path: "/comprendre_mon_operation",
      color1: "#e5d180",
      color2: "#D9B520",
    },
    {
      id: 2,
      title: "Se débarrasser des formalités administrative",
      color: "ring-blue-one",
      data: 70,
      color1: "#a1e7ea",
      color2: "#079FA5",
      path: "/formalites_administrative",
    },
    {
      id: 3,
      title: "Préparer mon arrivée en toute sérénité",
      color: "ring-pink-one",
      path: "/preparer_mon_arrivee",
      data: 60,
      color1: "#f3a7c2",
      color2: "#F8749F",
    },
    {
      id: 4,
      title: "Anticiper ma sortie",
      color: "ring-green-one",
      path: "/anticipe_ma_sortie",
      data: 11,
      color1: "#80e891",
      color2: "#44D660",
    },
    {
      id: 5,
      title: "Ma check list avant mon départ pour la clinique",
      color: "ring-violet-one",
      path: "/checklist",
      data: valueChecklist,
      color1: "#9789ee",
      color2: "#7265E3",
    },
  ];

  return (
    <div className="flex justify-center">
      <ul className="flex justify-between w-[90%]">
        {dataSecondNavBar.map((item) => (
          <li className="decoration-none">
            <SecondNavBarItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecondNavBar;
