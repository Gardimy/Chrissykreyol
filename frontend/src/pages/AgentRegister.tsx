import {
    useState
} from "react";


import background from "../assets/chrissy-background.png";

import logo from "../assets/logo-chrissy.png";


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



    const [agent,setAgent] =
    useState<AgentResponse | null>(null);



    const [loading,setLoading] =
    useState(false);





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


        try {


            setLoading(true);



            const response =
            await createAgent(formData);



            setAgent(response);



        } catch(error){


            console.error(error);


            alert(
                "Erreur lors de l'inscription"
            );


        }
        finally{

            setLoading(false);

        }


    };





    return (


<section

className="
min-h-screen
bg-cover
bg-center
py-12
"

style={{

backgroundImage:
`url(${background})`

}}

>


<div

className="
max-w-3xl
mx-auto
bg-white/95
rounded-2xl
shadow-2xl
p-8
"


>



<img

src={logo}

className="
w-32
mx-auto
mb-6
"

/>




{
!agent ? (


<>


<h1

className="
text-3xl
font-bold
text-center
text-gray-800
mb-8
"

>

Devenir Agent Chrissy Kreyol

</h1>




<form

onSubmit={handleSubmit}

className="
space-y-5
"


>


<input

className="
w-full
border
rounded-lg
p-3
"

name="nom"

placeholder="Nom"

value={formData.nom}

onChange={handleChange}

/>




<input

className="
w-full
border
rounded-lg
p-3
"

name="prenom"

placeholder="Prenom"

value={formData.prenom}

onChange={handleChange}

/>





<select

className="
w-full
border
rounded-lg
p-3
"

name="sexe"

value={formData.sexe}

onChange={handleChange}

>


<option value="">

Choisir sexe

</option>


<option value="Homme">

Homme

</option>


<option value="Femme">

Femme

</option>


</select>





<select

className="
w-full
border
rounded-lg
p-3
"

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

className="
w-full
border
rounded-lg
p-3
"

name="nifCin"

placeholder="NIF / CIN"

value={formData.nifCin}

onChange={handleChange}

/>





<input

className="
w-full
border
rounded-lg
p-3
"

type="email"

name="email"

placeholder="Email"

value={formData.email}

onChange={handleChange}

/>





<input

className="
w-full
border
rounded-lg
p-3
"

name="telephone"

placeholder="Téléphone"

value={formData.telephone}

onChange={handleChange}

/>






<button

type="submit"

disabled={loading}

className="
w-full
bg-black
text-white
py-3
rounded-lg
font-bold
hover:bg-gray-800
transition
"


>


{

loading ?

"Envoi en cours..." :

"Envoyer ma demande"

}



</button>




</form>



</>



)

:(



<div

className="
text-center
"

>


<h2

className="
text-3xl
font-bold
text-green-600
mb-5
"

>

🎉 Félicitations {agent.nom} {agent.prenom}

</h2>

<p

className="
text-gray-700
mb-6
"

>

Votre inscription comme agent Chrissy Kreyol
a été enregistrée avec succès.

</p>

<div

className="
bg-gray-100
rounded-xl
p-6
space-y-4
"


>

<div>

<p className="font-semibold">

Votre Agent ID

</p>


<p

className="
text-2xl
font-bold
text-blue-600
"

>

{agent.agentId}

</p>


</div>

<div>

<p className="font-semibold">

Votre Code Promotionnel

</p>


<p

className="
text-2xl
font-bold
text-purple-600
"

>

{agent.promoCode}

</p>


</div>



</div>

<button

onClick={()=>setAgent(null)}

className="
mt-6
bg-black
text-white
px-6
py-3
rounded-lg
"

>

Nouvelle inscription

</button>

</div>

)

}

</div>


</section>


    );

};

export default AgentRegister;