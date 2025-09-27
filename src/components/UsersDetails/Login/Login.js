import "./Login.css"
import { useState, useContext} from "react";
import { UserContext } from "../../../context/Context";


    const loginData = [{"username":"sai", "password":"sai"}]


const Login = () => {
    const [user, setUsers] = useState({ username: "", password: "" });
    const {setIsAuthenticated} = useContext(UserContext);
   

const handleChange = (e) => {
  const { name, value } = e.target;

  setUsers((prev) => ({
    ...prev,
    [name]: value,
  }));

};


const handleSubmit = (e) => {
    e.preventDefault();
    if(user?.username === loginData[0].username && user.password === loginData[0].password){
        setIsAuthenticated(true)
        localStorage.setItem("token","true")
        console.log("credential matched")

    }
  }


    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>  
            <div className="user-cont">
                <label htmlFor="user">User Name</label>
                <input type="text" id="user" name="username" placeholder="Enter Username" className="user-input"  onChange={handleChange}/>
            </div>
            <div className="user-cont">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Password"  className="user-input" onChange={handleChange}/>
            </div>
            <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Login;