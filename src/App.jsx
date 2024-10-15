import { Route, Routes } from "react-router"
import {routesLink}  from "./utils/import.js"



const App = () => {
      return (
        <>
        <Routes>
          {routesLink.map((items , index)=>{
            return(
              <Route key={index} path={items.path} element={items.element} />
            )
          })}
        </Routes>
        </>
      )
    }


export default App
