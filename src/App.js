import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Starting from "./Components/Starting";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="bg-neutral">

      <Navbar>
        <Routes>

          <Route path="/" element={<Starting></Starting>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/portfolio' element={<Portfolio></Portfolio>} />
          <Route path='/contact' element={<Contact></Contact>} />

        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
