import React, { useEffect } from "react";
import sticker from "../assets/images/neplaiChori.png";
export const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {}, 5000);
  }, []);
  return (
    <div className="splash__wrapper">
      <div className="splash-text">
        <h1>Welcome To</h1>
        <h2>
          <span>Global Smart Plus</span>
        </h2>
        <div className="splash-image">
          <img src={sticker} alt="sticker" />
        </div>
      </div>
    </div>
  );
};
