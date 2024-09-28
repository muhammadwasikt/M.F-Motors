import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const AdminSignIn = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] p-3">
    <form className="max-w-[370px] w-[100%] p-3 shadow-lg">
        <h1 className="pb-3 text-center">SIGN IN</h1>
        <div>
            <div className="mb-3 py-2 px-1 flex items-center gap-2 w-[100%] border-[1px] ">
            <CiMail className="text-2xl "/>
            <input className="outline-none w-[100%] " type="text" placeholder="Type email" required />
            </div>
            <div className="mb-3 py-2 px-1 flex items-center gap-2 w-[100%] border-[1px] ">
            <RiLockPasswordLine className="text-2xl "/>
            <input className="outline-none w-[100%] " type={password ? 'text':"password"} placeholder="Type password" maxLength="8" required />
            <input onClick={showPassword} type="checkbox" />
            </div>
            <button className="my-6 text-center py-2 px-4 rounded-lg text-white bg-[#FF6600] border-2 ">Go To Dashboard</button>
        </div>
    </form>
    </div>
  )
}

export default AdminSignIn
