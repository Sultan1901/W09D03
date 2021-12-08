import React, { useState, useEffect } from "react";
import { gettask, addtask, deltask } from "./../../reducers/tasks";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Task = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [task, setTask] = useState([]);
  const [local, setLocal] = useState("");

  useEffect(() => {
    taskshow();
  }, []);
  const navigate = useNavigate()
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setLocal(savedToken);
    taskshow();
  }, []);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      signin: state.Signin,
      tasks: state.Tasks,
    };
  });
  const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/gettask`, {
      headers: {
        Authorization: `Bearer ${local}`,
      },
    });
    setTask(result.data);
  };
  const del = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/delTask/${id}`);
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };
  const update = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/updateTask/${id}`);
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };
  const [newtask, setNewtask] = useState("");
  const addtask = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/createtask`,
        {
          name: newtask,
        },
        {
          headers: {
            Authorization: `Bearer ${local}`,
          },
        }
      );
      taskshow(local);
    } catch (error) {
      console.log(error);
    }
  };

 const logoutBTN = ()=>{
   localStorage.clear()
   navigate('/')
 }
 const updateTask = async (id) => {
   await axios.put(
     `${BASE_URL}/updateTask/${id}`,
     {
       task: task,
     },
     {
       headers: {
         Authorization: `Bearer ${local}`,
       },
     }
   );
   taskshow(local);
 };
  return (
    <div>
      <h1>Tasks</h1>
      <input
        onChange={(e) => {
          setNewtask(e.target.value);
          console.log(e);
        }}
        placeholder="add task"
      />{" "}
      <button onClick={addtask}>add</button>
      {task.map((e) => (
        <ul>
          <li>
            {e.name}
            <button
              onClick={() => {
                del(e._id);
              }}
            >
              delete
            </button>
            <input
              onChange={(e) => {
                setTask(e.target.value);
                console.log(e);
              }}
              placeholder="update"
            />
            <button onClick={updateTask(e._id)}>update</button>
          </li>{" "}
        </ul>
      ))}
      <button onClick={logoutBTN}>signout</button>
    </div>
  );
};

export default Task;
