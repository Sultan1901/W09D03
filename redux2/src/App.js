import './App.css';
import Login from "./component/Login"
import Task from "./component/Task";
import { Routes, Route } from "react-router-dom";





import { useDispatch, useSelector } from "react-redux";


function App() {
  return (
    <div className="App">
      React
      
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/tasks" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
