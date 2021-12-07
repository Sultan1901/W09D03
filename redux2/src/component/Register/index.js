import React from "react";
import axios from "axios";
import './style.css'
import  {useState}  from "react";
import {useNavigate , Link} from 'react-router-dom'



const Register = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [logemail, setLogemail] = useState("");
  const [logpassword, setLogpassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    const result = await axios.post(`${BASE_URL}/addusr`, {
      email: logemail,
      password: logpassword,
      username:username
     
    });
   navigate("/Login");};

  return (
    <div>
      <div className="con">
        <h1>Register</h1>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        ></input>
        <input
          onChange={(e) => {
            setLogemail(e.target.value);
          }}
          type="email"
          placeholder="email"
        ></input>
        <input
          onChange={(e) => {
            setLogpassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        ></input>
        <button onClick={register}>register</button>
      </div>
    </div>
  );
};

export default Register;
