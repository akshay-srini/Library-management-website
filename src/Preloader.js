import React from 'react'
import { useEffect } from "react";
import { preLoaderAnim } from "./animations";
import preloader from "./images/preloader-white.gif";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span><img src={preloader}></img></span>
      </div>
    </div>
  );
};
export default PreLoader;