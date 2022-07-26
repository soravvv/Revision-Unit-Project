import React from "react";
import {
  FaStar,
  FaTruckMoving,
  FaGift,
  FaSearchLocation,
} from "react-icons/fa";

export const FooterPart = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div>
          <FaStar size="1.5rem" />
          <FaStar size="1.5rem" />
          <FaStar size="1.5rem" />
          <FaStar size="1.5rem" />
          <FaStar size="1.5rem" />
          <p>Reviews</p>
        </div>
        <div>
          <FaTruckMoving size="1.7rem" />
          <p>Free Shipping</p>
        </div>
        <div>
          <FaGift size="1.7rem" />
          <p>Free Returns</p>
        </div>
        <div>
          <FaSearchLocation size="1.7rem" />
          <p>Retailers Near You</p>
        </div>
      </div>
      <hr />
      <div className="belowPart">
        <div>
          <h3>Stay In Touch</h3>
          <br />
          <p style={{ width: "55%" }}>
            Sign up for our newsletter to receive 10% off your first purchase
          </p>
          <br />
          <input
            style={{
              backgroundColor: "transparent",
              color: "white",
              width: "70%",
              height: "3rem",
              border: "1px solid white",
              textAlign: "center",
              letterSpacing: "1px",
            }}
            type="text"
            placeholder="Your Email"
          />
        </div>
        <div>
          <h4>ABOUT</h4> <br />
          <p>Our Story </p>
          <p>Our Process </p>
          <p>Time Well Spent</p>
        </div>
        <div>
          <h4>SUPPORT</h4> <br />
          <p>My Account</p>
          <p>Track My Order</p>
          <p>Returns</p>
          <p>Warranty</p>
          <p>FAQ/Help</p>
          <p>Wholesale</p>
          <p>Affiliate Program</p>
        </div>
        <div>
          <h4>CONNECT</h4> <br />
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
        <div>
          <h4>CONTACT</h4> <br />
          <p>Customer Service:</p>
          <br />
          <p>
            (503) 864-6928 <br /> 9-3 PST, Mon-Fri
          </p>
          <br />
          <p>
            2136 SE 7th Ave, <br /> Portland OR 97214
          </p>
          <br />
          <p>info@shwoodshop.com</p>
        </div>
      </div>
      <hr />
      <br />
      <div className="end">
        <p>© 2022 SHWOOD EYEWEAR</p>
        <br />
        <p>
          TERMS | PRIVACY POLICY | ACCESSIBILITY | DO NOT SELL MY PERSONAL
          INFORMATION
        </p>
      </div>
    </div>
  );
};
