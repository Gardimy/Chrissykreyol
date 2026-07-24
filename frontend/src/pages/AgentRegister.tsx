import {
 useState,
} from "react";


import {
 createAgent,
} from "../services/agent.service";


function AgentRegister(){


const [form,setForm]=useState({

nom:"",
prenom:"",
sexe:"",
statut:"",
nifCin:"",
email:"",
telephone:"",

});



const [result,setResult]=useState<any>(null);





const handleChange=(e:any)=>{


setForm({

...form,

[e.target.name]:
e.target.value

});


}





const submit=async(e:any)=>{


e.preventDefault();


const data =
await createAgent(form);


setResult(data);


};




return (

<div>


<h1>
Inscription Agent Chrissy Kreyol
</h1>



<form onSubmit={submit}>


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
name="email"
placeholder="Email"
onChange={handleChange}
/>


<input
name="telephone"
placeholder="Téléphone"
onChange={handleChange}
/>


<input
name="nifCin"
placeholder="NIF/CIN"
onChange={handleChange}
/>



<select
name="sexe"
onChange={handleChange}
>

<option>
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
name="statut"
onChange={handleChange}
>

<option>
Choisir statut
</option>

<option value="CELIBATAIRE">
Célibataire
</option>


<option value="MARIE">
Marié(e)
</option>


<option value="DIVORCE">
Divorcé(e)
</option>


<option value="VEUF">
Veuf(ve)
</option>


</select>



<button>
Envoyer
</button>


</form>





{
result &&

<div>

<h2>
Inscription réussie
</h2>


<p>
Agent ID :
{result.agentId}
</p>


<p>
Code Promo :
{result.promoCode}
</p>


</div>

}



</div>

);


}


export default AgentRegister;
