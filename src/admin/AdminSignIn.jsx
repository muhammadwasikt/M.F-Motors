import { useForm } from "react-hook-form"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Swal from 'sweetalert2'
import {AdminDashboard} from "../utils/import";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";
import { useState } from "react";





const AdminSignIn = () => {
  const navigate =  useNavigate();
 const [isLoader , setIsLoader] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
   setIsLoader(true)
    const {email , pasword} = data
    if (email !== 'asharimran41@gmail.com' && pasword !== 'Wasi123@') {
      Swal.fire("Please type valid email and pasword");
      setIsLoader(false)
      reset()
    }if (email !== 'asharimran41@gmail.com') {
      Swal.fire("Please type valid email");
      setIsLoader(false)
      reset()
    }else if (pasword !== 'Wasi123@') {
      Swal.fire("Please type valid password");
      setIsLoader(false)
      reset()
    }else {
      signInWithEmailAndPassword(auth, email, pasword)
      .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       navigate('/admin/dashboard')
       setIsLoader(false)
       reset()
       // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoader(false)
        reset()
      });
    }
        console.log(data)
  }
  console.log(watch("example")) // watch input value by passing the name of it
  return (
    <div className="w-[100%] flex justify-center items-center h-[100vh] p-[30px]">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] w-[100%] flex flex-col shadow-lg p-[30px]">
    <h1 className="text-center mb-5">SIGN IN</h1>
    <div className="w-[100%] mb-4">
    <div className="flex items-center w-[100%] border-[1px] rounded-[20px] p-2">
    <MdOutlineEmail className="text-[30px]"/>
    <input className="py-1 px-3 outline-none w-[100%]" placeholder="Email" type="email" {...register("email", { required: true })} />
    </div>
    {errors.email && <span className="text-[10px] text-[red] mb-3 px-2">Email is required</span>}
    </div>
    <div className="w-[100%] mb-4">
    <div className="flex items-center w-[100%] border-[1px] rounded-[20px] p-2">
    <RiLockPasswordLine className="text-[30px]"/>
    <input className="py-1 px-3 outline-none w-[100%]" placeholder="Password" type="password" {...register("pasword", { required: true })} />
    </div>
    {errors.pasword && <span className="text-[10px] text-[red] mb-3 px-2">Pasword is required</span>}
    </div>
    <input className="bg-[yellow] p-2 shadow-md active:translate-y-[2px] active:shadow-none" type="submit" value={isLoader ? 'Loading...':'Sign in'}/>
    </form>
    </div>
  )
}

export default AdminSignIn
