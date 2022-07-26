import React from "react";
import { useNavigate } from "react-router-dom";

export const Collections = () => {
  const navigate = useNavigate();
  return (
    <div className="collectionContainer">
      <h1>
        <u>COLLECTIONS</u>
      </h1>
      <button
        onClick={() => {
          navigate("/mensunglasses");
        }}
      >
        Men's
      </button>{" "}
      <br />
      <button
        onClick={() => {
          navigate("/womensunglasses");
        }}
      >
        Women's
      </button>
    </div>
  );
};
