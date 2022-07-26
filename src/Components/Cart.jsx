import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartFailure, cartRequest, cartSuccess } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const data = useSelector((state) => state.data.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.data.cartLoad);
  const error = useSelector((state) => state.data.cartError);

  var totalAmount = 0;
  data.map((e) => {
    totalAmount = totalAmount + Number(e.price);
  });

  useEffect(() => {
    const req = cartRequest();
    dispatch(req);
    fetch("http://localhost:2500/cart")
      .then((j) => j.json())
      .then((d) => {
        const success = cartSuccess(d);
        dispatch(success);
      })
      .catch((err) => {
        const errr = cartFailure();
        dispatch(errr);
      });
  }, []);

  const cartItemDelete = (id) => {
    axios.delete(`http://localhost:2500/cart/${id}`).then(() => {
      fetch("http://localhost:2500/cart")
        .then((j) => j.json())
        .then((d) => {
          const success = cartSuccess(d);
          dispatch(success);
        });
    });
  };

  return (
    <div className="cartContainer">
      {loading && <h1>...Loading</h1>}
      {error && <h1>...Error</h1>}
      <h2>Total Amount : {totalAmount > 0 ? totalAmount : 0}</h2>
      <button
        disabled={totalAmount === 0}
        className="proceed"
        onClick={() => {
          navigate("/payment");
        }}
      >
        Proceed To Pay
      </button>
      <div className="boxes">
        <div className="box">
          {data.map((data) => (
            <div key={data._id}>
              <img src={data.image} alt="" />
              <p className="goggles">
                {data.name}{" "}
                <button
                  onClick={() => {
                    cartItemDelete(data._id);
                  }}
                >
                  Remove
                </button>{" "}
                <span>{data.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
