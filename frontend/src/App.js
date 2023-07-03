import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Register,
  Login,
  Dashboard,
  TransferFund,
  PaymentDetail,
  SplashScreen,
} from "./pages";
import { AccountTab, NavBar } from "./layouts";
import { ConfirmPIN } from "./pages/ConfirmPin";
import { useState, useEffect } from "react";
function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const isSplashShown = localStorage.getItem("isSplashShown");

    // Check if the splash screen has been shown before
    if (isSplashShown) {
      setShowSplash(false);
    } else {
      // If the splash screen hasn't been shown, set the flag in local storage
      localStorage.setItem("isSplashShown", true);
      // Simulate a delay to display the splash screen for a specific time
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000); // Change 3000 to the desired duration in milliseconds
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div className="container">
      {/* <NavBar /> */}
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="splashScreen" element={<SplashScreen />} /> */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="accounttab" element={<AccountTab />} />
            <Route path="transferfund" element={<TransferFund />}></Route>
            <Route path="paymentDetail" element={<PaymentDetail />} />
            <Route path="confirmPin" element={<ConfirmPIN />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
