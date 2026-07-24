import { useState } from "react";
import api from "../services/api";


interface BoardForm {
  nom: string;
  prenom: string;
  sexe: string;
  email: string;
  telephone: string;
  profession: string;
  motivation: string;
}


export default function BoardRegister() {


  const [form, setForm] = useState<BoardForm>({
    nom: "",
    prenom: "",
    sexe: "",
    email: "",
    telephone: "",
    profession: "",
    motivation: "",
  });


  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);



  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {


      await api.post(
        "/board",
        form
      );


      setMessage(
        "✅ Votre demande a été envoyée avec succès."
      );


      setForm({
        nom:"",
        prenom:"",
        sexe:"",
        email:"",
        telephone:"",
        profession:"",
        motivation:"",
      });



    } catch(error){

      setMessage(
        "❌ Une erreur est survenue. Veuillez réessayer."
      );

    }


    setLoading(false);

  };





  return (

    <div
      className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      px-4
      "
      style={{
        backgroundImage:
        "url('/images/background.jpg')"
      }}
    >


      <div
        className="
        bg-white
        shadow-2xl
        rounded-2xl
        p-8
        w-full
        max-w-xl
        "
      >


        <div className="text-center mb-6">


          <img
            src="/images/logo.png"
            alt="Chrissy Kreyol"
            className="
            mx-auto
            h-20
            mb-4
            "
          />


          <h1
          className="
          text-3xl
          font-bold
          text-gray-800
          "
          >
            Demande Board Direction
          </h1>


          <p className="text-gray-500 mt-2">
            Rejoignez l'équipe dirigeante Chrissy Kreyol
          </p>


        </div>





        <form
        onSubmit={handleSubmit}
        className="space-y-4"
        >



          <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          p-3
          focus:ring-2
          focus:ring-purple-500
          "
          />



          <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={form.prenom}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
          />





          <select
          name="sexe"
          value={form.sexe}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
          >

            <option value="">
              Sexe
            </option>

            <option value="Homme">
              Homme
            </option>

            <option value="Femme">
              Femme
            </option>

          </select>





          <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
          />




          <input
          type="text"
          name="telephone"
          placeholder="Téléphone"
          value={form.telephone}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
          />




          <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={form.profession}
          onChange={handleChange}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
          />




          <textarea
          name="motivation"
          placeholder="Votre motivation"
          value={form.motivation}
          onChange={handleChange}
          rows={4}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
          />





          <button
          disabled={loading}
          className="
          w-full
          bg-purple-700
          hover:bg-purple-800
          text-white
          font-bold
          py-3
          rounded-lg
          transition
          "
          >

            {
              loading
              ?
              "Envoi..."
              :
              "Envoyer la demande"
            }


          </button>




        </form>





        {
          message && (

            <div
            className="
            mt-5
            text-center
            bg-gray-100
            p-3
            rounded-lg
            "
            >

              {message}

            </div>

          )
        }




      </div>


    </div>

  );

}
