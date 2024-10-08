import { Outlet } from "react-router"
import {Header , Footer} from './utils/import.js'

const AppLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayOut
