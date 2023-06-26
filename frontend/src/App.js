import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Register, Login, Dashboard } from "./pages";
import { NavBar } from "./layouts";
import { Deposit, TransferFund } from "./pages";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path='dashboard' element={<Dashboard/>}/> */}
        </Route>
        <Route path="/transferFund" element={<TransferFund />} />
      </Routes>
    </div>
  );
}

export default App;
