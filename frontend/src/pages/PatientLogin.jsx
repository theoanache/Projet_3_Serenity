import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import logoSmall from "../assets/logo-serenity.png";
import logoLarge from "../assets/logo_large.svg";

function PatientLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginData, role, login, getOneDoctor, getOnePatient } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.data && role) {
      if (role === 1) {
        getOneDoctor();
        navigate("/doctor/nouveau_patient");
      } else if (role === 2) {
        getOnePatient();
        navigate("/comprendre_mon_operation");
      }
    }
  }, [role, loginData.data]);
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:8000/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          login(res.data);
        }
      })
      .catch((err) => setError(err.response.data.error));
    event.preventDefault();
  };

  return (
    <div className="font-montserrat">
      <div className="absolute -left-2/3 h-screen w-screen bg-violet-three rounded-[40px]">
        <img
          src={logoLarge}
          alt="Large logo"
          className="absolute left-2/3 w-1/3"
        />
      </div>
      <div className="absolute left-1/3 w-2/3 py-32 h-screen flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <img src={logoSmall} alt="Small logo" className="w-[250px] mb-5" />
          <h1 className="text-violet-three font-semibold">Connectez vous</h1>
          <h2 className="text-violet-three font-semibold">
            à votre espace personnel
          </h2>
        </div>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <label
              className="block text-violet-three text-sm font-semibold"
              htmlFor="Email"
            >
              Adresse email:
              <input
                className="appearance-none border rounded w-full py-2 px-3 mt-1 bg-gray-200 text-gray-800 font-normal leading-tight focus:outline-none focus:shadow-outline focus:border-violet-three"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              &nbsp;
            </label>
            <label
              className="block text-violet-three text-sm font-semibold"
              htmlFor="password"
            >
              Mot de passe:
              <div className="relative">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 mt-1 bg-gray-200 text-gray-800 font-normal leading-tight focus:outline-none focus:shadow-outline focus:border-violet-three"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </div>
              &nbsp;
            </label>
            <p className="block text-rose-600/75 text-sm italic">{error}</p>
            <input
              className="bg-violet-three hover:bg-violet-two transition-all text-white font-semibold w-full py-2 px-3 my-2 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="S'identifier"
            />
          </form>
          <p className="text-violet-three">
            Vous n’avez pas de compte ?{" "}
            <span className="link-animation">
              <Link to="/signup" className="font-semibold">
                Inscrivez-vous
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
