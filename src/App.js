import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";




function App() {
  return (
    
     <Router>

     <div className="App">
     <Navbar/>
     <Routes>
          <Route  path='/' element={<Home />}></Route> 
          <Route  path='/about' element={<About />}></Route>
          <Route  path='/contact' element={<Contact />}></Route>

     </Routes>
    </div>
     </Router>
    
  
  );
}

export default App;
