import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";
// import { Tasks } from "../Tasks";
// import { login } from "../reducers/signin";
import  {sign} from "../../reducers/login";
const BASE_URL = process.env.REACT_APP_BASE_URL;
 const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [local, setLocal] = useState("");
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      signin: state.Signin,
      tasks: state.Tasks,
    };
  });
  const dispatch = useDispatch();
  console.log(state);
  //   useEffect(() => {
  // // const token = localStorage.getItem("token");
  // // setLocal(token)
  //   }, [])
  const logInB = async () => {
    const result = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    const data = {
      user: result.data.result,
      token: result.data.token,
    };
    dispatch(sign(data));
    // headers ={
    //     Authorization:``
    // }
    // localStorage.setItem("token", result.data.token);
    navigate("/tasks");
  };
  return (
    <div>
      {!state.token ? (
        <div className="mainDiv">
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            placeholder="enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            name="email"
            placeholder="enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button className="btnMain" onClick={logInB}>
            Login
          </button>
          <br />
        </div>
      ) : (
        <h3>
          <Link to="/tasks">your Tasks</Link>
        </h3>
      )}
    </div>
  );
};
export default Login