import { createRoot } from 'react-dom/client';
import './index.css'
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";




createRoot(document.getElementById("root")).render(
   <BrowserRouter>
   <App />
   </BrowserRouter>

);
