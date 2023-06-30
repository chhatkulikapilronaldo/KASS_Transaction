import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Register, Login, Dashboard, TransferFund, PaymentDetail } from "./pages";
import { AccountTab, NavBar } from "./layouts";

function App() {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="accounttab" element={<AccountTab />} />
          <Route path="transferfund" element={<TransferFund/>}>
           <Route path="paymentdetail" element={<PaymentDetail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
