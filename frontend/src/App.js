import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Register, Login } from "./pages";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       
      </Routes>
      
    </div>
  );
}

export default App;
