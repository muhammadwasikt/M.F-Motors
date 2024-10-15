import { useState, logo, NavLink, CiSearch, HiBars3BottomRight, IoMdClose, TbBrandProducthunt, FaHome, BiSolidCategory, PiSignIn, AiOutlineTrademark, } from "../utils/import";



const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const click = () => {
    setIsResponsive(!isResponsive)
  }
  return (
    <div className='flex justify-between items-center p-3 bg-mainColor sticky top-0 z-10'>

      <div className='md:w-[30%] sm:w-[100%] max-sm:w-[70%]'>
        <img src={logo} alt="" className='w-12 object-fill' />
      </div>
      <div className='lg:w-[100%] md:w-[100%] sm:w-[100%] max-sm:w-[150%] flex items-center py-2 px-3 rounded-full bg-slate-50'>
        <input type="text" placeholder='Type here you search....' className='w-[100%] outline-none' />
        <CiSearch className='text-2xl' />
      </div>
      <div className="w-[100%]">
        <ul className={isResponsive ? 'animate__animated animate__slideInLeft absolute z-10 left-0 gap-3 top-[73px] flex flex-col bg-mainColor px-[30px] py-[20px] w-[60%]' : 'w-[100%]  lg:gap-7 md:gap-7 sm:gap-2 md:inline-flex justify-end sm:hidden max-sm:hidden pr-2'}>
          <NavLink to='/home' className='no-underline text-inputColor hover:text-hoverColor '>{isResponsive ? <div className="flex items-center gap-x-2"><FaHome className="text-[24px]" title="Home" /><span>Home</span> </div> : <FaHome className="text-[24px]" title="Home" />}</NavLink>
          <NavLink to='/products' className='no-underline text-inputColor hover:text-hoverColor '>{isResponsive ? <div className="flex items-center gap-x-2"> <TbBrandProducthunt className="text-[24px]" title="Products" /><span>Products</span></div> : <TbBrandProducthunt className="text-[24px]" title="Products" />}</NavLink>
          <NavLink to='/category' className='no-underline text-inputColor hover:text-hoverColor '>{isResponsive ? <div className="flex items-center gap-x-2"> <BiSolidCategory className="text-[24px]" title="Category" /><span>Category</span></div> : <BiSolidCategory className="text-[24px]" title="Category" />}</NavLink>
          <NavLink to='/user/signin' className='no-underline text-inputColor hover:text-hoverColor '>{isResponsive ? <div className="flex items-center gap-x-2"><PiSignIn className="text-[24px]"/><span>Sign In</span></div> : <PiSignIn className="text-[24px]" title='Sign In' />} </NavLink>
            <NavLink to='/user/signup' className='no-underline text-inputColor hover:text-hoverColor '>{isResponsive ? <div className="flex items-center gap-x-2"><AiOutlineTrademark className="text-[24px]"/><span>Sign Up</span> </div> : <AiOutlineTrademark className="text-[24px]" title='Sign Up' />} </NavLink>
        </ul>
        <div className='hidden justify-end w-[100%] md:hidden sm:inline-flex max-sm:inline-flex text-4xl' onClick={click}><HiBars3BottomRight className={isResponsive ? 'hidden' : 'inline-flex'} /><IoMdClose className={isResponsive ? 'inline-flex' : 'hidden'} /></div>
      </div>
    </div>
  )
}

export default Header
