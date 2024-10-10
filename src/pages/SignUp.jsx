import { useForm } from "react-hook-form"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { createUserWithEmailAndPassword, sendEmailVerification ,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import  { auth, provider } from "../../firebase.js";
import Swal from 'sweetalert2'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isPassword , setIsPassword] = useState(false)
  const [loader, setLoader] = useState(false)
  const onSubmit = (data) => {
    setLoader(true)
    const {email , pasword} = data
    const emailRegex = /@gmail.com/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (emailRegex.test(email) && passwordRegex.test(pasword)) {
      createUserWithEmailAndPassword(auth, email, pasword)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser)
          .then(() => {
            // Email verification sent!
            // ...
          }); 
        Swal.fire({
          title: "Congratulations your account is successfully create",
          text: "Please check your email to verify your account",
          footer: '<a href="https://mail.google.com/mail/u/0/" target="_blank">Go to gmail</a>'
        });
        setLoader(false)
        reset()
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        Swal.fire('This email is already in use.')
        setLoader(false)
        reset()
        // ..
      }); 
    }else if (!emailRegex.test(email)) {
      Swal.fire('Only accept gmail')
      setLoader(false)
      reset()
    }else if (!passwordRegex.test(pasword)) {
      Swal.fire('Type strong password')
      setLoader(false)
      reset()
    }
  }
  const continueWithGoogle = ()=>{
    reset()
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.href = '/home'
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  return (
    <div className="w-[100%] flex justify-center items-center h-[100vh] p-[30px]">
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] w-[100%] flex flex-col shadow-lg p-[30px]">
    <h1 className="text-center mb-5">SIGN UP</h1>
    <div className="w-[100%] mb-4">
    <div className="flex items-center w-[100%] border-[1px] rounded-[20px] p-2">
    <FaRegUser className="text-[30px]"/>
    <input className="py-1 px-3 outline-none w-[100%]" placeholder="Name" type="text" {...register("name", { required: true })} />
    </div>
    {errors.name && <span className="text-[10px] text-[red] mb-3 px-2">Pasword is required</span>}
    </div>
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
    <input className="py-1 px-3 outline-none w-[100%]" maxLength='8' placeholder="Password" type={isPassword ?  "text" : "password"} {...register("pasword", { required: true })} />
    <input type="checkbox" onClick={()=>setIsPassword(!isPassword)}/>
    </div>
    {errors.pasword && <span className="text-[10px] text-[red] mb-3 px-2">Password is required</span>}
    </div>
    <input className="bg-buttonColor p-2 shadow-md active:translate-y-[2px] active:shadow-none" type="submit" value={loader ?'Loading....':'Sign up'}/>
    <p className="text-center p-3 mb-[-3px]">-----Social sign Up-----</p>
    <button onClick={continueWithGoogle} className="bg-buttonColor flex items-center justify-center gap-x-1 p-2 shadow-md active:translate-y-[2px] active:shadow-none"><FcGoogle />Sign up with google</button>
    <p className="text-[12px] text-center pt-3 mb-[-10px]">Already have an account:<NavLink  to="/user/signin" className="text-[blue] no-underline"> Sign In</NavLink></p>
    </form>
    </div>
  )
}

export default SignUp

