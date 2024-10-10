import { Outlet } from "react-router"
import {Header , Footer} from './utils/import'


const App = () => {
      return (
        <>
           <Header />
           <Outlet />
           <Footer />
        </>
      )
    }


export default App
