import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import logoSmall from "../assets/logo-serenity.png";
import logoLarge from "../assets/logo_large.svg";

function PatientSignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  useEffect(() => {
    if (
      formData.passwordConfirm &&
      formData.password !== formData.passwordConfirm
    ) {
      setError("Les mots de passes que vous avez saisis ne correspondent pas.");
    } else {
      setError("");
    }
  }, [formData]);
  const handleSubmit = (event) => {
    if (error === "") {
      axios
        .post(
          "http://localhost:8000/api/users/new",
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 201) {
            navigate("/");
          }
        })
        .catch((err) => setError(err.response.data.error));
    }
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
      <div className="absolute left-1/3 w-2/3 py-28 h-screen flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <img src={logoSmall} alt="Small logo" className="w-[250px] mb-5" />
          <h1 className="text-violet-three font-semibold">S’inscrire à</h1>
          <h1 className="text-violet-three font-semibold">SERENITY</h1>
        </div>
        <div className="flex flex-col w-80">
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
                  className={`appearance-none border ${
                    formData.passwordConfirm && !error && "border-green-500"
                  } ${
                    error && "border-red-500"
                  } rounded w-full py-2 px-3 mt-1 bg-gray-200 text-gray-800 font-normal leading-tight focus:outline-none focus:shadow-outline focus:border-violet-three ${
                    formData.passwordConfirm &&
                    !error &&
                    "focus:border-green-500"
                  } ${error && "focus:border-red-500"}`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />{" "}
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
            <label
              className="block text-violet-three text-sm font-semibold"
              htmlFor="password-confirm"
            >
              Confirmez votre mot de passe:
              <div className="relative">
                <input
                  className={`appearance-none border ${
                    formData.passwordConfirm && !error && "border-green-500"
                  } ${
                    error && "border-red-500"
                  } rounded w-full py-2 px-3 mt-1 bg-gray-200 text-gray-800 font-normal leading-tight focus:outline-none focus:shadow-outline focus:border-violet-three ${
                    formData.passwordConfirm &&
                    !error &&
                    "focus:border-green-500"
                  } ${error && "focus:border-red-500"}`}
                  type={showConfirmPassword ? "text" : "password"}
                  id="password-confirm"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3"
                >
                  {showConfirmPassword ? (
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
              value="Créer votre compte"
            />
          </form>
          <p className="text-violet-three">
            Vous avez déjà un compte ?{" "}
            <span className="link-animation">
              <Link to="/" className="font-semibold">
                S’identifier
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientSignUp;
