import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartSuccess } from "../Redux/action";

export const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pushCart = (payload) => {
    axios.post("http://localhost:2500/cart", payload).then((d) => {
      dispatch(cartSuccess(d.data));
    });
  };

  return (
    <div className="landingPageContainer">
      <div className="banner">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1992/1575/files/Hero-Summer-Wood-Frames_1944x.jpg?v=1658268683"
            alt=""
          />
          <h1 className="centered">
            RE-ENGINEERED <br />
            NEW WOOD <br /> FRAMES
            <br />{" "}
            <button
              onClick={() => {
                navigate("/mensunglasses");
              }}
            >
              Men's
            </button>{" "}
            <button
              onClick={() => {
                navigate("/womensunglasses");
              }}
            >
              Women's
            </button>
          </h1>
        </div>
      </div>
      <div className="name">
        <h1>Shop Best Sellers</h1>
        <hr />
      </div>
      <div className="boxes">
        <div className="box">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1992/1575/products/CanbyWalnutGrey_F_S_x800.jpg?v=1651241452"
              alt=""
            />
            <p className="goggles">
              Canby Wood{" "}
              <button
                onClick={() => {
                  const payload = {
                    id: "62d9a64a5dff91807ab1302c",
                    image:
                      "https://cdn.shopify.com/s/files/1/1992/1575/products/CanbyWalnutGrey_A_S_x800.jpg?v=1651241452",
                    name: "Canby Wood",
                    price: "1499",
                  };
                  pushCart(payload);
                  alert("Added into the Cart");
                }}
              >
                Add To Cart
              </button>{" "}
              <span>₹1499</span>
            </p>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1992/1575/products/WACHELG4_ee83b01e-fe67-4733-a47f-3c4d034e2821_x800.jpg?v=1633068321"
              alt=""
            />
            <p className="goggles">
              Canby Acetate{" "}
              <button
                onClick={() => {
                  const payload = {
                    id: "62d9a68f5dff91807ab13030",
                    image:
                      "https://cdn.shopify.com/s/files/1/1992/1575/products/WACHELG4_ee83b01e-fe67-4733-a47f-3c4d034e2821_x800.jpg?v=1633068321",
                    name: "Canby Acetate",
                    price: "1499",
                  };
                  pushCart(payload);
                  alert("Added into the Cart");
                }}
              >
                Add To Cart
              </button>{" "}
              <span>₹1499</span>
            </p>
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/1992/1575/products/KennedyTangerineG15_WAK2T2F_Front_S_x800.jpg?v=1633068139"
              alt=""
            />
            <p className="goggles">
              Kennedy Acetate{" "}
              <button
                onClick={() => {
                  const payload = {
                    id: "62d9a6675dff91807ab1302e",
                    image:
                      "https://cdn.shopify.com/s/files/1/1992/1575/products/KennedyTangerineG15_WAK2T2F_Angle_S_x800.jpg?v=1633068139",
                    name: "Kennedy Acetate",
                    price: "1499",
                  };
                  pushCart(payload);
                  alert("Added into the Cart");
                }}
              >
                Add To Cart
              </button>{" "}
              <span>₹1499</span>
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#211f1f" }} className="banner">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/1992/1575/files/Homepage-Callout-Image-Working_1512x.jpg?v=1627502039"
            alt=""
          />
          <h1 className="center">Experiment Everyday</h1>
          <p className="dcenter">
            Boundaries are pushed and failures are celebrated. The drive to
            experiment is what fuels our passion and transforms our work into a
            labor of love. <br />
            <button
              onClick={() => {
                navigate("/process");
              }}
            >
              Explore Our Process
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
