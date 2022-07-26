import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSuccess } from "../Redux/action";

export const Payment = () => {
  const data = useSelector((state) => state.data.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [payment, setPayment] = useState("");

  const deleteAll = (id) => {
    axios.delete(`http://localhost:2500/cart/${id}`).then(() => {
      fetch("http://localhost:2500/cart")
        .then((j) => j.json())
        .then((d) => {
          const success = cartSuccess(d);
          dispatch(success);
        });
    });
  };

  var totalAmount = 0;

  useEffect(() => {
    data.map((e) => {
      totalAmount = totalAmount + Number(e.price);
    });
    setPayment(totalAmount);
  }, []);

  // key: "rzp_test_8dCuouSZ6Jq3zn",
  // key_secret: "0e5udXKCRVbmKGCTY2pzvgCV",

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Failed to make payment");
      return;
    }

    const options = {
      key: "rzp_test_8dCuouSZ6Jq3zn",
      currency: "INR",
      amount: 100 * amount,
      name: "SORAV_PROJECTS",
      description: "For Testing Purpose",
      image:
        "https://cdn.shopify.com/s/files/1/0535/9153/9896/files/shwood-logo.svg?v=1622571750",
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        alert("Payment Successfull!");
        navigate("/thanks");
      },
      prefill: {
        name: "SORAV_PROJECTS",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="paymentContainer">
      <h1>Razorpay Payment Integration</h1>
      <button
        className="place"
        onClick={() => {
          const newAmount = Number(payment);
          displayRazorpay(newAmount);
          data.map((data) => {
            deleteAll(data._id);
          });
        }}
      >
        Pay ₹{payment}
      </button>
    </div>
  );
};
