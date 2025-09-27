import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate,Outlet } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About us/About";
import Contact from "./components/Contact/Contact";
import Recipes from "./components/Recipes/Recipes";
import Login from "./components/UsersDetails/Login/Login";
import Blogs from "./components/Blogs/Blogs";
import { UserProvider,UserContext } from "./context/Context";
import { useState, useEffect } from "react";

// const ProtectedRoute = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
//     setIsLoading(false);
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
       
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/recipes" element={<Recipes />} />
          {/* </Route> */}

      
          <Route path="/login" element={<Login />} />

     
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
