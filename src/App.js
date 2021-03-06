import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Starting from "./Pages/Home";
import About from "./Pages/Portfolio/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Toaster } from 'react-hot-toast';
import { PuffLoader } from "react-spinners";
import useLoading from "./Hooks/useLoading";
import Background from './Assets/tech-background.png'
import Particle from "./Style/Particle";
import Projects from "./Pages/Portfolio/Projects/Projects";
import SingleProjectInfo from "./Pages/Portfolio/Projects/SingleProjectInfo";


function App() {

  const [loading] = useLoading()

  return (
    <div
      style={{
        background: `url(${Background})`,
        backgroundSize: 'cover'
      }}
   /* className="bg-neutral" */>

      {
        loading ?
          <>
            <Particle />
            <div className="grid items-center justify-center h-screen">
              <PuffLoader color='#ffffff' loading={loading} size={250} />
            </div>
          </>
          :
          <>
            <Navbar>
              {/* <Particle /> */}
              <Routes>

                <Route path="/" element={<Home></Home>} />

                <Route path='/portfolio' element={<Portfolio></Portfolio>}>

                <Route path='about' element={<About></About>} />
                <Route path='projects' element={<Projects></Projects>} />
                <Route path='projects/:Id' element={<SingleProjectInfo></SingleProjectInfo>} />

                </Route>

                <Route path='/blog' element={<Blog></Blog>} />
                <Route path='/contact' element={<Contact></Contact>} />

              </Routes>
            </Navbar>
            <ToastContainer />
            <Toaster />
          </>
      }
    </div>
  );
}

export default App;
