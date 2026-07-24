import {
Link
} from "react-router-dom";


import logo from "../assets/logo-chrissy.png";

const Navbar =()=>{


return (

<nav className="
bg-white
shadow-md
px-8
py-4
flex
justify-between
items-center
">


<img
src={logo}
className="
w-24
"
/>



<div className="
flex
gap-6
font-semibold
">


<Link to="/">
Accueil
</Link>


<Link to="/biography">
Biographie
</Link>


<Link to="/agent">
Devenir Agent
</Link>


<Link to="/board">
Board Direction
</Link>


</div>


</nav>

)

}


export default Navbar;