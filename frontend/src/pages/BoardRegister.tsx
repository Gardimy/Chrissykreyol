import { useState } from "react";
import axios from "axios";


const BoardRegister = () => {

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    sexe: "",
    email: "",
    telephone: "",
    profession: "",
    motivation: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    try {

      const response = await axios.post(
        "http://localhost:3000/board",
        formData
      );


      alert(
        "Demande envoyée avec succès"
      );

      console.log(response.data);


    } catch(error){

      console.error(error);

      alert(
        "Erreur lors de l'inscription"
      );

    }

  };


  return (

    <div>

      <h1>
        Demande pour rejoindre Board Direction
      </h1>


      <form onSubmit={handleSubmit}>


        <input
          name="nom"
          placeholder="Nom"
          onChange={handleChange}
        />


        <input
          name="prenom"
          placeholder="Prenom"
          onChange={handleChange}
        />


        <input
          name="sexe"
          placeholder="Sexe"
          onChange={handleChange}
        />


        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />


        <input
          name="telephone"
          placeholder="Telephone"
          onChange={handleChange}
        />


        <input
          name="profession"
          placeholder="Profession"
          onChange={handleChange}
        />


        <textarea
          name="motivation"
          placeholder="Motivation"
          onChange={handleChange}
        />


        <button type="submit">
          Envoyer demande
        </button>


      </form>


    </div>

  );

};


export default BoardRegister;