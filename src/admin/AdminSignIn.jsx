import { useForm } from "react-hook-form"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Swal from 'sweetalert2'

const AdminSignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email , pasword} = data
    if (email !== 'asharimran41@gmail.com' && pasword !== 'Ashar123@') {
      Swal.fire("Please type valid email and pasword");
    }if (email !== 'asharimran41@gmail.com') {
      Swal.fire("Please type valid email");
    }else if (pasword !== 'Ashar123@') {
      Swal.fire("Please type valid password");
    }else {
      window.location.href = '/admin/dashboard'
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
    <input className="bg-[yellow] p-2 shadow-md active:translate-y-[2px] active:shadow-none" type="submit" value='Sign in'/>
    </form>
    </div>
  )
}

export default AdminSignIn
