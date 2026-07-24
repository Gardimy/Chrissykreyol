import axios from "axios";
import type { AgentResponse } from "../types/agent";


const API_URL =
"http://localhost:3000/agents";


export interface CreateAgentData {

  nom:string;

  prenom:string;

  sexe:string;

  statut:string;

  nifCin:string;

  email:string;

  telephone:string;

}



export const createAgent = async(
  data:CreateAgentData
):Promise<AgentResponse>=>{


 const response = await axios.post(
    API_URL,
    data
 );


 return response.data;


};



export const getAgents = async()
:Promise<AgentResponse[]>=>{


 const response = await axios.get(
    API_URL
 );


 return response.data;


};
