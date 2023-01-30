import {
  CiCircleList,
  CiFolderOn,
  CiLogin,
  CiMedicalCross,
  CiStethoscope,
  CiUser,
  CiViewTable,
  CiWavePulse1,
} from "react-icons/ci";

const Navbar = {
  patient: [
    {
      id: 1,
      title: "Mon opération",
      icon: <CiWavePulse1 size="1.8em" />,
      link: "/comprendre_mon_operation",
    },
    {
      id: 2,
      title: "Mon administratif",
      icon: <CiFolderOn size="1.8em" />,
      link: "/formalites_administrative",
    },
    {
      id: 3,
      title: "Mon arrivée",
      icon: <CiMedicalCross size="1.8em" />,
      link: "/preparer_mon_arrivee",
    },
    {
      id: 4,
      title: "Ma sortie",
      icon: <CiLogin size="1.8em" />,
      link: "/anticipe_ma_sortie",
    },
    {
      id: 5,
      title: "Ma check-list",
      icon: <CiCircleList size="1.8em" />,
      link: "/checklist",
    },
  ],

  doctor: [
    {
      id: 1,
      title: "Interventions",
      icon: <CiWavePulse1 size="1.8em" />,
      link: "doctor/interventions",
    },
    {
      id: 2,
      title: "Nouveau patient",
      icon: <CiUser size="1.8em" />,
      link: "doctor/nouveau_patient",
    },
    {
      id: 3,
      title: "Mes patients",
      icon: <CiViewTable size="1.8em" />,
      link: "doctor/patients",
    },

    {
      id: 4,
      title: "Mes chirurgies",
      icon: <CiStethoscope size="1.8em" />,
      link: "doctor/chirurgies",
    },
  ],
};

export default Navbar;
