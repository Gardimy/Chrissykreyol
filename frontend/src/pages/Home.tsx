import background from "../assets/chrissy-background.png";


import logo from "../assets/logo-chrissy.png";



const Home=()=>{


return (

<section

className="
min-h-screen
bg-cover
bg-center
flex
items-center
justify-center
"

style={{

backgroundImage:
`url(${background})`

}}

>


<div className="
bg-black/50
p-10
rounded-xl
text-center
text-white
">


<img

src={logo}

className="
w-40
mx-auto
mb-6
"

/>



<h1 className="
text-5xl
font-bold
">

Chrissy Kreyol

</h1>


<p className="
mt-4
text-xl
">

La beauté naturelle commence avec nos produits capillaires.

</p>


</div>


</section>

)


}


export default Home;