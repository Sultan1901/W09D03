import './App.css';
import Login from "./component/Login"
import Task from "./component/Task";





import { useDispatch, useSelector } from "react-redux";


function App() {
  return (
    <div className="App">
     React
     <Login/>
     <Task/>
    </div>
  );
}

export default App;
