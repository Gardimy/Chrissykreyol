import {
    useState
} from "react";


import {
    createAgent
} from "../services/agent.service";


import type {
    AgentResponse
} from "../types/agent";



const AgentRegister = () => {


    const [formData,setFormData] = useState({

        nom:"",
        prenom:"",
        sexe:"",
        statut:"",
        nifCin:"",
        email:"",
        telephone:""

    });



    const [
        agent,
        setAgent
    ] = useState<AgentResponse | null>(null);



    const [
        loading,
        setLoading
    ] = useState(false);



    const handleChange = (
        e:React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement
        >
    )=>{


        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value

        });


    };




    const handleSubmit = async(
        e:React.FormEvent
    )=>{


        e.preventDefault();


        try{


            setLoading(true);



            const response =
            await createAgent(formData);



            setAgent(response);



            setFormData({

                nom:"",
                prenom:"",
                sexe:"",
                statut:"",
                nifCin:"",
                email:"",
                telephone:""

            });



        }catch(error){


            console.error(
                error
            );


            alert(
                "Erreur lors de l'inscription"
            );


        }finally{


            setLoading(false);


        }


    };




    return (

        <div>


            <h1>
                Rejoindre Chrissy Kreyol
            </h1>



            {
                !agent && (

                <form
                    onSubmit={handleSubmit}
                >


                    <input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={handleChange}
                    />


                    <input
                    type="text"
                    name="prenom"
                    placeholder="Prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    />



                    <select
                    name="sexe"
                    value={formData.sexe}
                    onChange={handleChange}
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




                    <select
                    name="statut"
                    value={formData.statut}
                    onChange={handleChange}
                    >

                        <option value="">
                            Statut matrimonial
                        </option>


                        <option value="Célibataire">
                            Célibataire
                        </option>


                        <option value="Marié(e)">
                            Marié(e)
                        </option>


                        <option value="Divorcé(e)">
                            Divorcé(e)
                        </option>


                        <option value="Veuf(ve)">
                            Veuf(ve)
                        </option>


                    </select>




                    <input
                    type="text"
                    name="nifCin"
                    placeholder="NIF ou CIN"
                    value={formData.nifCin}
                    onChange={handleChange}
                    />




                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    />




                    <input
                    type="text"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    />




                    <button
                    type="submit"
                    disabled={loading}
                    >

                    {
                        loading
                        ?
                        "Envoi..."
                        :
                        "Envoyer demande"
                    }

                    </button>



                </form>

                )
            }





            {
                agent && (

                <div>


                    <h2>
                        Félicitations {agent.nom} {agent.prenom}
                    </h2>



                    <p>
                        Votre inscription est validée.
                    </p>



                    <h3>
                        Agent ID:
                    </h3>

                    <strong>
                        {agent.agentId}
                    </strong>




                    <h3>
                        Code Promo:
                    </h3>


                    <strong>
                        {agent.promoCode}
                    </strong>



                </div>

                )
            }



        </div>

    );

};



export default AgentRegister;