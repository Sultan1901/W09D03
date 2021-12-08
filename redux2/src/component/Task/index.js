import React, { useState, useEffect } from "react";
import { gettask, addtask, deltask } from "./../../reducers/tasks";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../reducers/login";

const Ts = () => {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    gettasks();
  }, []);
  const [task, setTask] = useState();
  const gettasks = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/gettask`, {
        headers: {
          Authorization: `Bearer ${state.Login.token}`,
        },
      });
      
      
      dispatch(gettask(result.data));
    } catch (error) {}
    const addTSK = async () => {
      try {
        const result = await axios.post(`http://localhost:5000/createtask`, {
          task,
        },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
        );
        dispatch(addtask(result.data));
      } catch (error) {}
    };
  };
  return <div>Tasks</div>;
};

export default Ts;
