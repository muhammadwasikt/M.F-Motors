import { PiWarningOctagon } from "react-icons/pi";
import { signOut } from "firebase/auth";
import  { auth } from "../../firebase.js";
import Button from "../components/common/Button.jsx";


const LogOut = ({signout , setsignOut}) => {
    const userSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            window.location.href = '/home'
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <>
    {signout ? 
      <div className="absolute w-[100%] h-[100vh] flex justify-center items-center">
      <div className="max-w-[400px] w-[100%] flex flex-col gap-3 items-center shadow-2xl  px-2 py-4 bg-white mb-[-50%] ">
      <PiWarningOctagon className="text-[red] text-[50px]" />
      <p className="text-[18px] ">Are you sure you want to  log out?</p>
      <div  className="flex gap-3">
        <Button click={userSignOut} clas="px-3 py-1 mx-3 shadow-md bg-blue-400 active:translate-y-1 active:shadow-none rounded-lg" title='Yes' />
        <Button click={()=>setsignOut(false)} clas="px-3 py-1 mx-3 shadow-md bg-yellow-300 active:translate-y-1 active:shadow-none rounded-lg" title='No' />
      </div>
      </div>
    </div> : null }
  </>
  )
}

export default LogOut

