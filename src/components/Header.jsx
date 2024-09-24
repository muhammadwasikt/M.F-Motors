import { NavLink } from 'react-router-dom';
import logo from '/assest/images/logo.png'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const click = ()=>{
    setIsResponsive(!isResponsive)
  }
  return (
    <div className='flex justify-between items-center p-4 bg-[#FF6600]'>
      <img src={logo} alt="" className='w-12' />
      <div className="navLinks">
        <ul className={isResponsive ? 'absolute z-10 left-0 gap-3 flex flex-col bg-[#FF6600] px-[30px] pb-[20px] pt-[50px] w-[60%]' :'flex items-center gap-4 md:inline-flex max-sm:hidden'}>
            <NavLink to='/' className='hover:text-[blue]'>Home</NavLink>
            <NavLink to='/' className='hover:text-[blue]'>Products</NavLink>
            <NavLink to='/' className='hover:text-[blue]'>Category</NavLink>
            <NavLink to='/' className='hover:text-[blue]'><button className={isResponsive ? null :'p-2 px-3 rounded-3xl bg-[#8FD14F] active:translate-y-[1px]'}>Sign Up</button></NavLink>
            <NavLink to='/' className='hover:text-[blue]'><button className={isResponsive ? null :'p-2 px-3 rounded-3xl bg-[#8FD14F] active:translate-y-[1px]'}>Sign In</button></NavLink>
            <NavLink to='/' className='hover:text-[blue]'><button className={isResponsive ? null :'p-2 px-3 rounded-3xl bg-[#8FD14F] active:translate-y-[1px]'}>Sign Out</button></NavLink>
        </ul>
            <button className='hidden max-sm:inline-flex text-4xl' onClick={click}><HiBars3BottomRight className={isResponsive ? 'hidden':'inline-flex'}/><IoMdClose className={isResponsive ? 'inline-flex':'hidden'}/></button>
      </div>
    </div>
  )
}

export default Header
