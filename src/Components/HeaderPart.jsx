import React from "react";
import { FaCartPlus, FaUserCircle, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const HeaderPart = () => {
  const cartLength = useSelector((state) => state.data.cart);

  return (
    <div className="headerContainer">
      <div className="freeeship">
        <p>
          <u>Free INDIAN shipping over ₹500 & free returns*</u>
        </p>
      </div>
      <div className="logo">
        <div>
          <Link to="/">
            <img
              src="https://cdn.shopify.com/s/files/1/0535/9153/9896/files/shwood-logo.svg?v=1622571750"
              alt="Image Load Error"
            />
          </Link>
        </div>
        <div className="hover">
          <p>
            {" "}
            <Link className="link" to="/mensunglasses">
              MEN
            </Link>
          </p>

          <p>
            {" "}
            <Link className="link" to="/womensunglasses">
              WOMEN
            </Link>
          </p>
          <p>
            <Link className="link" to="/collections">
              COLLECTIONS
            </Link>
          </p>
          <p>
            <Link className="link" to="/process">
              PROCESS
            </Link>
          </p>
          <p>
            <Link className="link" to="/signup">
              {" "}
              SIGN UP{" "}
            </Link>
          </p>
        </div>
        <div>
          <p>
            <FaSearch size="1.8rem" />
          </p>
          <p>
            <Link to="/signin" className="link">
              <FaUserCircle size="1.8rem" />
            </Link>
          </p>
          <p>
            {/* <Link onClick={() => {}} to="/cart" className="link"> */}
            <FaCartPlus
              onClick={() => {
                window.location.href = "/cart";
              }}
              size="1.8rem"
            />
            {/* </Link> */}
          </p>
          <p
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              fontSize: "larger",
            }}
          >
            ( {cartLength.length} )
          </p>
        </div>
      </div>
    </div>
  );
};
