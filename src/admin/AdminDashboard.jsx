import { LiaBarsSolid } from "react-icons/lia"
import logo from '/assest/images/logo.png'
import { TfiSearch } from "react-icons/tfi"
import { useEffect, useState } from "react"
import AddPost from "./AddPost"
import Button from "../components/common/Button"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase"

const AdminDashboard = () => {
  const [isAddPost , setIsAddPost] = useState(false)
  const  [user, setUser] = useState(false)

  const newPost = ()=>{
    setIsAddPost(true)
  }
  const navigate = useNavigate()
  useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.email === 'asharimran41@gmail.com') {
        setUser(true)      
      }else{
      navigate('/admin/signin')
      }
    } else {
      navigate('/admin/signin')
    }
  });
},[])
return(
  <>
  {
    user && 
    <div>
    <nav className="w-[100%] bg-mainColor flex justify-between items-center p-2 px-3 gap-x-5 max-sm:gap-x-1">
    <img src={logo} alt="" className='w-[70px] p-1' />
    <div className="p-2 px-3 bg-inputColor rounded-full w-[100%] flex items-center">
      <input type="text" placeholder="Type here you search....." className="outline-none w-[100%]"/>
      <TfiSearch className="text-2xl text-gray-400"/>
    </div>
    <div className="flex justify-end gap-4">
    <LiaBarsSolid className="text-[50px] shadow-md p-[11px] rounded-full bg-inputColor "/>
    </div>
    </nav>
    <div>
    <AddPost  setIsAddPost={setIsAddPost} isAddPost={isAddPost} />
    <Button title='Add New Post' click={newPost} clas='p-2 px-4 m-3 bg-inputColor rounded-lg shadow-md active:shadow-none active:translate-y-1'/>
    </div>
  </div> 
  }
  </>
)
}

export default AdminDashboard
