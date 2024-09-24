import { NavLink } from 'react-router-dom';
import logo from '/assest/images/logo.png'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import Button from './common/Button';

const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const click = ()=>{
    setIsResponsive(!isResponsive)
  }
  return (
    <div className='flex justify-between items-center p-4 bg-[#FF6600] sticky top-0 z-10'>
      <img src={logo} alt="" className='w-12' />
      <div className="navLinks">
        <ul className={isResponsive ? 'animate__animated animate__slideInLeft absolute z-10 left-0 gap-3 top-[78px] flex flex-col bg-[#FF6600] px-[30px] py-[20px] w-[60%]' :'flex items-center gap-4 md:inline-flex max-sm:hidden'}>
            <NavLink to='/' className='no-underline text-black '>Home</NavLink>
            <NavLink to='/' className='no-underline text-black '>Products</NavLink>
            <NavLink to='/' className='no-underline text-black '>Category</NavLink>
            <NavLink to='/' className='no-underline text-black '><Button isResponsive={isResponsive} title='Sign In' /> </NavLink>
            <NavLink to='/' className='no-underline text-black '><Button isResponsive={isResponsive} title='Sign Up' /> </NavLink>
            <NavLink to='/' className='no-underline text-black '><Button isResponsive={isResponsive} title='Sign Out' /> </NavLink>
        </ul>
            <div className='hidden max-sm:inline-flex text-4xl' onClick={click}><HiBars3BottomRight className={isResponsive ? 'hidden':'inline-flex'}/><IoMdClose className={isResponsive ? 'inline-flex':'hidden'}/></div>
      </div>
    </div>
  )
}

export default Header
