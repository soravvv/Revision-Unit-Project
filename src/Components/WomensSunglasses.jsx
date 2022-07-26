import axios from "axios";
import React, { useEffect } from "react";
import { cartSuccess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getTodoFailed, getTodoRequest, getTodoSuccess } from "../Redux/action";

export const WomensSunglasses = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    const request = getTodoRequest();
    dispatch(request);
    axios
      .get("http://localhost:2500/womenssunglasses")
      .then((d) => {
        const success = getTodoSuccess(d.data);
        dispatch(success);
      })
      .catch((err) => {
        const error = getTodoFailed();
        dispatch(error);
      });
  }, []);

  const pushCart = (payload) => {
    axios.post("http://localhost:2500/cart", payload).then((d) => {
      dispatch(cartSuccess(d.data));
    });
  };

  return (
    <>
      {loading && (
        <h1 style={{ textAlign: "center", padding: "10rem" }}>...Loading</h1>
      )}
      {error && (
        <h1 style={{ textAlign: "center", padding: "10rem" }}>...Error</h1>
      )}
      <div className="banner">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1992/1575/collections/702d24259e3886ae6e511220fd938f2e_1512x.jpg?v=1658272432"
            alt=""
          />
          <h1 className="center">Women's Sunglasses</h1>
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          {data.map((data) => (
            <div key={data._id}>
              <img src={data.image} alt="" />
              <p className="goggles">
                {data.name}{" "}
                <button
                  onClick={() => {
                    const payload = {
                      id: data._id,
                      image: data.image,
                      name: data.name,
                      price: data.price,
                    };
                    pushCart(payload);
                    console.log(payload);
                    alert("Added into the Cart");
                  }}
                >
                  Add To Cart
                </button>{" "}
                <span>₹{data.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
