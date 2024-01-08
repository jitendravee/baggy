import React,{useState} from 'react'
import { TiThMenu } from "react-icons/ti";
import logo from '../assets/images/logot.png'
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
// import { IoSearch } from "react-icons/io5";
const Nav = () => {
  const [Menu,setMenu] = useState('');

  const toogleMenu = () => {
    setMenu(!Menu)
}
  return (
    <div className=''>
      
<div className='flex flex-row bg-[#8ecae6] justify-between items-center p-4 rounded-md'>
   <span className='flex flex-row items-center  gap-4 text-lg'><img rel='icon' src={logo} className='h-12'/> Baggy Shopping </span>
   {/* <IoSearch className='relative left-96'/> */}

   <input type='text' placeholder='Search' className='bg-[#ffb703] border-double border-2 border-[#023047]  text-md px-4 md:px-12 py-2 rounded-lg'/>
   <ul className='hidden md:flex flex-row text-lg gap-12'>
    <Link to='/signin'><li>SignIn</li></Link>
    <Link to='/signup'><li>SignUp</li></Link>
    <li className='flex flex-row items-center gap-2'><IoMdCart />Orders</li>
   </ul>
 
<div className='sm:hidden '>

<TiThMenu onClick={toogleMenu} />{
  Menu && (
    <>
    <ul className='flex flex-col bg-[#8ecae6] text-md mt-3 text-semibold gap-8 text-lg'>
    
      <li>SignIn</li>
      <li>SignUp</li>
      <li>ContactUs</li>
    </ul>
    </>
  )
}
</div>
</div>

    </div>
  )
}

export default Nav