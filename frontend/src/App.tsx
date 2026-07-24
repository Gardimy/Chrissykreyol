import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Biography from "./pages/Biography";
import AgentRegister from "./pages/AgentRegister";
import BoardRegister from "./pages/BoardRegister";




function App(){


return (

<BrowserRouter>


<Navbar/>


<Routes>


<Route
path="/"
element={<Home/>}
/>


<Route
path="/biography"
element={<Biography/>}
/>



<Route
path="/agent"
element={<AgentRegister/>}
/>



<Route
path="/board"
element={<BoardRegister/>}
/>


</Routes>


</BrowserRouter>


)

}



export default App;