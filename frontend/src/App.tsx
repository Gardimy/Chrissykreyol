import {
 BrowserRouter,
 Routes,
 Route,
} from "react-router-dom";


import Biography from "./pages/Biography";

import AgentRegister from "./pages/AgentRegister";

import BoardRegister from "./pages/BoardRegister";



function App(){


return (

<BrowserRouter>

<Routes>


<Route
path="/"
element={<Biography/>}
/>



<Route
path="/agent-register"
element={<AgentRegister/>}
/>



<Route
path="/board-register"
element={<BoardRegister/>}
/>



</Routes>

</BrowserRouter>


);


}


export default App;
