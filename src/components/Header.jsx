import { NavLink } from 'react-router-dom';
import logo from '/assest/images/logo.png'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from 'react';
import Button from './common/Button';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import LogOut from '../pages/LogOut';
import { FaRegUserCircle } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';


const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const  [userLogin, setUserLogin] = useState(false);
  const [isLogOut , setIsLogOut] = useState(false)

  const click = ()=>{
    setIsResponsive(!isResponsive)
  }
  const handleLogOut = ()=>{
    setIsLogOut(true)
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserLogin(true)
        // ...
      } else {
        setUserLogin(false)
      }
    });
  },[])
  return (
    <div className='flex justify-between items-center p-3 bg-mainColor sticky top-0 z-10'>
      
      <div className='md:w-[30%] sm:w-[100%] max-sm:w-[70%]'>
        <img src={logo} alt="" className='w-12' />
      </div>
      <div className='lg:w-[100%] md:w-[60%] sm:w-[100%] max-sm:w-[150%] flex items-center py-2 px-3 rounded-full bg-slate-50'>
        <input type="text" placeholder='Type here you search....' className='w-[100%] outline-none'/>
        <CiSearch className='text-2xl'/>
      </div>
      <div className="navLinks w-[100%] pt-3">
        <ul className={isResponsive ? 'animate__animated animate__slideInLeft absolute z-10 left-0 gap-3 top-[78px] flex flex-col bg-[#FF6600] px-[30px] py-[20px] w-[60%]' :'w-[100%] flex items-center justify-between lg:gap-4 md:gap-[10px] sm:gap-2 md:inline-flex sm:hidden max-sm:hidden'}>
            <NavLink to='/home' className='no-underline text-secondaryColor hover:text-hoverColor '>Home</NavLink>
            <NavLink to='/products' className='no-underline text-secondaryColor hover:text-hoverColor '>Products</NavLink>
            <NavLink to='/category' className='no-underline text-secondaryColor hover:text-hoverColor '>Category</NavLink>
            {!userLogin ? <><NavLink to='/signin' className='no-underline text-secondaryColor hover:text-hoverColor '><Button clas='p-1 bg-primaryColor text-white rounded-full px-2' isResponsive={isResponsive} title='Sign In' /> </NavLink>
            <NavLink to='/signup' className='no-underline text-secondaryColor hover:text-hoverColor '><Button clas='p-1 bg-primaryColor text-white rounded-full px-2' isResponsive={isResponsive} title='Sign Up' /> </NavLink> </> : isResponsive ? <Button isResponsive={isResponsive} title='Sign Out' /> :
            <FaRegUserCircle className='text-3xl text-secondaryColor' isResponsive={isResponsive} title='Sign Out' onClick={handleLogOut}/>}
        </ul>
            <div className='hidden justify-end w-[100%] md:hidden sm:inline-flex max-sm:inline-flex text-4xl' onClick={click}><HiBars3BottomRight className={isResponsive ? 'hidden':'inline-flex'}/><IoMdClose className={isResponsive ? 'inline-flex':'hidden'}/></div>
      </div>
            <LogOut signout={isLogOut} setsignOut={setIsLogOut} />
    </div>
  )
}

export default Header
