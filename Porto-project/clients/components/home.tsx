import fotoSaya from '../assets/Jas putih bg remove.png'



export default function Home (){
return (

<div className=" text-black font-jakarta m-30 justify-center">

         <div className=" grid grid-cols-1 gap-1 ">

<h1 className="mt-10">
         Available for freelance work
</h1>


<div className="grid grid-cols-2 gap-1  items-center justify-center">
         <h2 className="text-6xl font-bold w-160">Hi, I'm Rivaldo Jollien Ramdarto</h2>

<img src={fotoSaya} alt="Foto Saya" className="w-84 h-84 ml-70 object-cover rounded-full" />
  
</div>


<p className="text-2xl font-semibold w-120">


         Frontend Developer
</p>


 <p className="w-120">By day, I'm just a regular dev  by night (okay, also by day), I'm swinging between frontend code and UI/UX design, web slinging ideas into web apps that actually work and look awesome.</p>
  

  
  



</div>


</div>



);



}