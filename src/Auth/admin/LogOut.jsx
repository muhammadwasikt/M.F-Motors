import { auth ,PiWarningOctagon , signOut , Button, toast} from '../../utils/import'




const LogOut = ({signout , setsignOut}) => {
    const userSignOut = ()=>{
      toast('Successfully Log Out')
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          setsignOut(false)
    }
  return (
    <>
    {signout ? 
      <div className="absolute w-[100%] h-[70vh] flex justify-center items-center">
      <div className="max-w-[370px] w-[100%] flex flex-col gap-3 items-center shadow-2xl rounded-lg  px-2 py-8 bg-white ">
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

