// Loader.js
import React from "react";

function Loader() {
  return (
    <div className="loader-container w-100 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <img src="./animation.gif" alt="Loading..." />
    </div>
  );
}

export default Loader;
