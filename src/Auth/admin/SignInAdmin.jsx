import { useForm ,auth ,useState , useNavigate ,MdOutlineEmail , RiLockPasswordLine , signInWithEmailAndPassword } from '../../utils/import'




const SignInAdmin = () => {
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
  const password = import.meta.env.VITE_ADMIN_PASSWORD
  const navigate =  useNavigate();
 const [isLoader , setIsLoader] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
   setIsLoader(true)
    const {email , pasword} = data
    if (email !== adminEmail && pasword !== password) {
      alert("Please type valid email and pasword");
      setIsLoader(false)
      reset()
    }if (email !== adminEmail) {
      alert("This email is not registerd");
      setIsLoader(false)
      reset()
    }else if (pasword !== password) {
      alert("Please type correct password");
      setIsLoader(false)
      reset()
    }else {
      signInWithEmailAndPassword(auth, email, pasword)
      .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       navigate('/auth/admin/dashboard')
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
  }
  return (
    <div className="w-[100%] flex justify-center items-center h-[100vh] p-[30px]">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] w-[100%] flex flex-col shadow-2xl p-[30px]">
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
    <input className="bg-mainColor p-2 shadow-md active:translate-y-[2px] text-inputColor active:shadow-none" type="submit" value={isLoader ? 'Loading...':'Sign in'}/>
    </form>
    </div>
  )
}

export default SignInAdmin

