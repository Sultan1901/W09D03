import recat, { useEffect, useState,useNavigate } from "react";
import Task from "./../Task";
import axios from "axios";
import  signIn  from "./../../rducers/login";
import { useDispatch, useSelector } from "react-redux";
const Lo = () => {
  const state = useSelector((state) => {
    return state;
  });
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const [local, setLocal] = useState("");
//   const navigate = useNavigate();
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const log = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email: logEmail,
        password: logPassword,
      });
      const data = {
          user:result.data.result,
          token:result.data.token
      }
      dispatch(signIn(data))
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
            setLogEmail(e.target.value);
          }}
          type="email"
          placeholder="your email"
        ></input>
        <input
          onChange={(e) => {
            setLogEmail(e.target.value);
          }}
          type="password"
          placeholder="your password"
        ></input>
        <button onClick={signIn}>Login</button>
      </div>
    </div>
  );
};

export default Lo;
