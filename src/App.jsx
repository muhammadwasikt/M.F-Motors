import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./pages/Products"
import Home from "./pages/Home"
import Category from "./pages/Category"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import LogOut from "./pages/LogOut"
import AdminSignIn from "./admin/AdminSignIn"
import AdminDashboard from "./admin/AdminDashboard"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<LogOut />} />
        <Route path="/adminfolder" element={<AdminSignIn />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
