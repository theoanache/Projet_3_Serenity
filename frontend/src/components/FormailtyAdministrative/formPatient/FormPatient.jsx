import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../components_reutilisable/Btn";
import dataOptionProfession from "./data/dataOptionProfession";
import dataOptionFamille from "./data/dataOptionFamille";
import dataCivility from "./data/dataCivilité";
import dataSexe from "./data/dataSexe";
import dataEtat from "./data/dataEtatCivil";
import dataAdress from "./data/dataAdresseContact";
import upload from "../../asset/img.png";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../contexts/AuthContext";

function FormPatient() {
  const formRef = useRef();
  useEffect(() => {
    if (formRef.current) {
      window.scrollTo({
        left: 0,
        top: formRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);
  const { userEmail, onePatient, getOnePatient, role } = useAuth();
  const [patient, setPatient] = useState({
    birth_date: onePatient.birth_date || null,
    birth_place: onePatient.birth_place || null,
    children: onePatient.children || null,
    city: onePatient.city || null,
    country: onePatient.country || null,
    email: onePatient.email || null,
    family_status: onePatient.family_status || null,
    firstname: onePatient.firstname || null,
    genre: onePatient.genre || null,
    lastname: onePatient.lastname || null,
    maiden_name: onePatient.maiden_name || null,
    mobile: onePatient.mobile || null,
    postal_code: onePatient.postal_code || null,
    profession: onePatient.profession || null,
    sex: onePatient.sex || null,
    situation_pro: onePatient.situation_pro || null,
    social_number: onePatient.social_number || null,
    street: onePatient.street || null,
    tel_fixe: onePatient.tel_fixe || null,
  });
  const [file, setFile] = useState({ fileName: null, file: null });
  const handleChange = (event) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };
  const handleFile = (event) => {
    setFile({
      fileName: event.target.files[0].name,
      file: event.target.files[0],
    });
  };
  const uploadFile = () => {
    const formData = new FormData();
    formData.append("image", file.file);
    formData.append("fileName", file.fileName);

    axios
      .put("http://localhost:8000/api/patients/imageUpload", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((err) => console.error(err));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (file.file !== null) {
      uploadFile();
    }
    axios
      .put(`http://localhost:8000/api/patients/${userEmail}`, {
        sex: patient.sex || onePatient.sex,
        genre: patient.genre || onePatient.genre,
        lastname: patient.lastname || onePatient.lastname,
        firstname: patient.firstname || onePatient.firstname,
        maiden_name: patient.maiden_name || onePatient.maiden_name,
        birth_date: patient.birth_date || onePatient.birth_date,
        family_status: patient.family_status || onePatient.family_status,
        profession: patient.profession || onePatient.profession,
        situation_pro: patient.situation_pro || onePatient.situation_pro,
        street: patient.street || onePatient.street,
        postal_code: patient.postal_code || onePatient.postal_code,
        city: patient.city || onePatient.city,
        tel_fixe: patient.tel_fixe || onePatient.tel_fixe,
        mobile: patient.mobile || onePatient.mobile,
        email: patient.email || onePatient.email,
        children: patient.children || onePatient.children,
        country: patient.country || onePatient.country,
        birth_place: patient.birth_place || onePatient.birth_place,
        social_number: patient.social_number || onePatient.social_number,
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message, {
            position: "top-center",
            theme: "colored",
            style: { fontSize: "1.1em", textAlign: "center" },
          });
        }
      })
      .catch((err) =>
        toast.error(err.response.data.message, {
          position: "top-center",
          theme: "colored",
          style: { fontSize: "1.1em", textAlign: "center" },
        })
      );
    getOnePatient();
  };
  return (
    <div ref={formRef} className="flex justify-center mb-8 mt-12">
      <hr className=" bg-[#C9C9C9] h-0.5 " />
      <div
        className={`rounded-2xl w-[95%] ${
          role === 1
            ? "bg-background-dark text-white"
            : "bg-background-lighty text-font-dark3"
        }`}
      >
        <div className="flex">
          <div className="w-8/12">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-rubik font-bold">
                La fiche administrative
              </h1>
              <Button
                label="Télécharger la version papier"
                type="button"
                color="bg-btn-blue text-white"
                handleClick=""
              />
            </div>
            <div className="pt-10">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h3 className="font-rubik font-black mb-2 text-lg">
                  État civil
                </h3>
                <div className="flex justify-between font-rubik text-lg">
                  <div>
                    <label htmlFor="sex">Sexe</label>
                    <div className="flex gap-4 ">
                      {dataSexe.map((sexe) => (
                        <div key={sexe.id} className="flex">
                          <input
                            type={sexe.type}
                            name={sexe.name}
                            id={sexe.value}
                            value={sexe.value}
                            className={sexe.className}
                            onChange={handleChange}
                            checked={
                              onePatient[sexe.name] === sexe.value ||
                              patient[sexe.name] === sexe.value
                            }
                          />
                          <label
                            htmlFor={sexe.value}
                            className={sexe.className}
                          >
                            {sexe.value}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <label htmlFor="genre">Genre</label>
                    <div className="flex justify-between">
                      {dataCivility.map((civility) => (
                        <div key={civility.id} className="flex">
                          <input
                            type={civility.type}
                            id={civility.value}
                            name={civility.name}
                            value={civility.value}
                            className={civility.className}
                            onChange={handleChange}
                            checked={
                              onePatient[civility.name] === civility.value ||
                              patient[civility.name] === civility.value
                            }
                          />
                          <label
                            htmlFor={civility.value}
                            className={civility.className}
                          >
                            {civility.value}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-wrap text-lg font-rubik">
                  <div className="w-[48%] flex flex-col mt-3">
                    <label htmlFor="image">Photo d'identité</label>
                    <input
                      type="file"
                      className="border-2 border-input-border rounded-md h-10 pl-3 bg-white p-1 text-black"
                      placeholder="Saisissez votre nom"
                      name="image"
                      id="image"
                      onChange={handleFile}
                      accept="image/*"
                    />
                  </div>
                  {dataEtat.map((etat) => (
                    <div key={etat.id} className={etat.classNameDiv}>
                      <label htmlFor={etat.name}>{etat.label}</label>
                      <input
                        type={etat.type}
                        className={etat.className}
                        placeholder={etat.placeholder}
                        name={etat.name}
                        id={etat.name}
                        defaultValue={onePatient[etat.name] || ""}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                  <div className="w-[48%] flex flex-col mt-3">
                    <label htmlFor="SituationProfessionelle" className="">
                      Situation professionnelle
                    </label>
                    <select
                      className="border-2 border-input-border bg-white rounded-md h-10 pl-3 valid:outline-none text-black"
                      name="situation_pro"
                      onChange={handleChange}
                    >
                      <option value="0" className="font-rubik">
                        Votre situation professionnelle
                      </option>
                      {dataOptionProfession.map((profession) => (
                        <option
                          key={profession.id}
                          value={profession.value}
                          name={profession.name}
                          className=""
                          selected={
                            onePatient[profession.name] === profession.value
                          }
                        >
                          {profession.value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-[48%] flex flex-col mt-3">
                    <label htmlFor="famille">Situation familiale</label>
                    <select
                      className="border-2 border-input-border bg-white rounded-md h-10 pl-5 focus:outline-none text-black"
                      onChange={handleChange}
                      name="family_status"
                    >
                      <option value="0" className="">
                        Votre situation familiale
                      </option>
                      {dataOptionFamille.map((famille) => (
                        <option
                          key={famille.id}
                          value={famille.value}
                          name={famille.name}
                          className={famille.classname}
                          selected={onePatient[famille.name] === famille.value}
                        >
                          {famille.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className=" bg-[#C9C9C9] h-0.5 mt-5 mb-5" />
                <h3 className="font-rubik font-black text-lg">
                  Adresse et contact
                </h3>
                <div className="flex justify-between flex-wrap text-lg  font-rubik">
                  {dataAdress.map((adresse) => (
                    <div key={adresse.id} className={adresse.classNameDiv}>
                      <label htmlFor={adresse.name}>{adresse.label}</label>
                      <input
                        type={adresse.type}
                        className={adresse.className}
                        placeholder={adresse.placeholder}
                        name={adresse.name}
                        defaultValue={onePatient[adresse.name]}
                        id={adresse.name}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
                <hr className=" bg-[#C9C9C9] h-0.5 mt-5" />
                <div className="flex justify-center items-center mt-5 mb-5">
                  <Button
                    label="Valider"
                    type="submit"
                    handleClick=""
                    color="bg-btn-blue text-white"
                  />
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
          <div className="w-4/12 flex flex-col items-center h-[20%] mt-36">
            <img src={upload} alt="" className="pl-5 pr-5" />
            <p className="w-[80%] text-center">
              Glisser ici votre fiche administrative remplie et signée
            </p>
            <p className="mt-5">OU</p>
            <form method="post" encType="multipart/form-data">
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  name="ficheAdmin"
                  className="bg-white text-xs  p-3 rounded-md mt-5 text-black"
                  accept=".pdf"
                />
                <Button
                  label="Envoyer"
                  type="submit"
                  handleClick=""
                  color="bg-btn-blue text-white mt-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPatient;
