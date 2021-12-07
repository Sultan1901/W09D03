import Recat, { useEffect, useState } from "react";
import Task from "./../Task";
import useNavigate from "react-router-dom"
import axios from "axios";
import  sign  from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
const Index = () => {
  const state = useSelector((state) => {
    return state;
  });
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const [local, setLocal] = useState("");
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
     useEffect(() => {
       const token = localStorage.getItem("token");

       setLocal(token);
     }, []);
  const log = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      const data = {
          user:result.data.result,
          token:result.data.token

      }   ;   console.log(data);

      dispatch(sign(data))
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div>
      Login
      <div className="con">
        <h1>Login</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="your email"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="your password"
        ></input>
        <button onClick={log}>Login</button>
      </div>
    </div>
  );
};

export default Index;
