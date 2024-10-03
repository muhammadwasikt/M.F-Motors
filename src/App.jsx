import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./pages/Products"
import Home from "./pages/Home"
import Category from "./pages/Category"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import AdminSignIn from "./admin/AdminSignIn"
import AdminDashboard from "./admin/AdminDashboard"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"
import { useEffect, useState } from "react"
import LogOut from "./pages/LogOut"

const App = () => {
const [user , setUser] = useState(false)
const [loader , setLoader] =  useState(false)
useEffect(()=>{
  setLoader(true)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (user.emailVerified === true) {
        setUser(true)
        setLoader(false)
      }
      // ...
    } else {
      setUser(false)
      setLoader(false)
    }
  });
},[])
      return (
        <>
          {loader ? <div className="loader mx-auto my-[250px]"></div> : <>
          {user ? <> 
           <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category" element={<Category />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sigout" element={<LogOut />} />
            <Route path="/adminfolder" element={<AdminSignIn />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
           <Footer /> </> : <SignIn />}</>}

        </>
      )
    }


export default App
