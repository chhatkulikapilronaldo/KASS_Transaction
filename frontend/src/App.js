import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Register, Login, Dashboard, TransferFund } from "./pages";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='transferfund' element={<TransferFund/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
