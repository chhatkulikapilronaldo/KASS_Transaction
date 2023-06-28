import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Register, Login, Dashboard, ConfirmPIN } from "./pages";
import { NavBar } from "./layouts";
import { Deposit, TransferFund, PaymentDetail } from "./pages";
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
        <Route path="/paymentdetail" element={<PaymentDetail />} />
        <Route path="/confirmpin" element={<ConfirmPIN />} />
      </Routes>
    </div>
  );
}

export default App;
