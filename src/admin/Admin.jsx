import { onAuthStateChanged } from "firebase/auth";
import {AdminDashboard, AdminSignIn} from "../utils/import.js"
import { auth } from "../../firebase.js";
import { useNavigate } from "react-router";
import { useEffect } from "react";


const Admin = () => {
  const navigate = useNavigate()
  useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.email === 'asharimran41@gmail.com') {
        navigate('/admin/dashboard')        
      }else{
      navigate('/admin/signin')
      }
    } else {
      navigate('/admin/signin')
    }
  });
},[])
}

export default Admin
