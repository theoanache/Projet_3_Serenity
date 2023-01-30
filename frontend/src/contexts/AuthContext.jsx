import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import propTypes from "prop-types";

const authContext = createContext({});

export function AuthProvider({ children }) {
  const { Provider } = authContext;
  const [onePatient, setOnePatient] = useState({});
  const [oneDoctor, setOneDoctor] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [documents, setDocuments] = useState([]);
  const [role, setRole] = useState();
  const roleCheck = () => {
    const url = "http://localhost:8000/api/users/roleCheck";
    axios.get(url, { withCredentials: true }).then((response) => {
      setRole(response.data[0].id);
    });
  };
  const authCheck = () => {
    axios
      .get("http://localhost:8000/api/users/authCheck", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          setUserEmail(res.data);
        }
      })
      .catch((err) => {
        window.localStorage.removeItem("user");
        console.error(err);
      });
  };
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ data: null });

  const getOnePatient = () => {
    const url = "http://localhost:8000/api/patients/email";
    axios.get(url, { withCredentials: true }).then((response) => {
      setOnePatient(response.data[0]);
    });
  };

  const getOneDoctor = () => {
    const url = "http://localhost:8000/api/doctors/email";
    axios.get(url, { withCredentials: true }).then((response) => {
      setOneDoctor(response.data);
    });
  };

  const login = (data) => {
    setLoginData({ data });
    roleCheck();
    authCheck();
    getOnePatient();
    getOneDoctor();
  };

  const logout = () => {
    setLoginData({});
    setOneDoctor({});
    setOnePatient({});
    window.localStorage.removeItem("user");
    setRole();
    navigate("/");
  };

  useEffect(() => {
    authCheck();
    roleCheck();
    const data = window.localStorage.getItem("user");

    if (data) {
      setLoginData({ data: JSON.parse(data) });
    }
  }, []);

  useEffect(() => {
    if (loginData.data) {
      window.localStorage.setItem("user", JSON.stringify(loginData.data));
    }
  }, [loginData]);

  const getDocuments = () => {
    if (onePatient.id) {
      axios
        .get(`http://localhost:8000/api/documents/patient/${onePatient.id}`, {
          withCredentials: true,
        })
        .then((document) => {
          setDocuments(document.data);
        });
    }
  };

  const pourcentage = () => {
    const total = documents.length;
    const checked = documents.filter(
      (document) => document.checked === 1
    ).length;
    const value = (checked / total) * 100;
    return Math.round(value);
  };
  useEffect(() => {
    if (onePatient) {
      getDocuments();
      pourcentage();
    }
  }, [onePatient]);

  return (
    <Provider
      value={{
        loginData,
        login,
        logout,
        authCheck,
        role,
        roleCheck,
        userEmail,
        onePatient,
        setOnePatient,
        getOneDoctor,
        getOnePatient,
        oneDoctor,
        valueChecklist: pourcentage(),
      }}
    >
      {children}
    </Provider>
  );
}

AuthProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useAuth = () => useContext(authContext);
