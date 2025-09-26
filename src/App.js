
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Home from './components/Home/Home';
import About from './components/About us/About';
import Contact from './components/Contact/Contact';
import Recipes from './components/Recipes/Recipes';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contacts' element={<Contact/>} />
          <Route path='/Blogs' element={<Blogs/>} />
          <Route path='/recipes' element={<Recipes/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
