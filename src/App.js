import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Starting from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";


function App() {
  return (
    <div className="bg-neutral">

        
      <Navbar>
        <Routes>

          <Route path="/" element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/portfolio' element={<Portfolio></Portfolio>} />
          <Route path='/blog' element={<Blog></Blog>} />
          <Route path='/contact' element={<Contact></Contact>} />

        </Routes>
      </Navbar>
      
    </div>
  );
}

export default App;
