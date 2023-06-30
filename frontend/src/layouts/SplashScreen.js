import React from 'react';
import sticker from "../assets/images/neplaiChori.png"
export const SplashScreen = () => {
  return (
    <div className='splash__wrapper'>
      <div className="splash-text">
        <h1>Welcome To</h1>
        <h2>Global Smart Plus</h2>
        <div className="splash-image">
            <img src={sticker} alt="sticker" />
        </div>
      </div>
    </div>
  )
}


