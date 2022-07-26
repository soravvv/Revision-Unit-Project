import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authFailure, authSuccess } from "../Redux/action";

export const SignIn = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.data.auth);

  const handleSignIn = async function (data, username) {
    try {
      let api = `https://masai-api-mocker.herokuapp.com/auth/login`;

      let res = await fetch(api, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      let dataa = await res.json();
      getUser(username, dataa.token);
    } catch (err) {
      alert("Wrong Credentials !");
      console.log(err);
    }
  };

  const getUser = async function (username, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let res = await fetch(api, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await res.json();

    if (data.token) {
      const success = authSuccess();
      dispatch(success);
      alert("Sign In Successfull !");
      //   window.location.href = "/";
      navigate("/");
    }
  };

  return (
    <div className="signUpContainer">
      {auth === true ? (
        <div className="logout">
          <h2>Hello User,</h2>
          <br />
          <button
            onClick={() => {
              const falsee = authFailure();
              dispatch(falsee);
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <>
          <h1>
            <u>Sign In</u>
          </h1>
          <div>
            <p>Username</p>
            <input
              placeholder="Enter Your Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p>
              Not have an account with us? Do{" "}
              <span>
                <u>
                  <Link to="/signup" className="link">
                    Sign Up
                  </Link>
                </u>
              </span>
            </p>
          </div>
          <button
            onClick={() => {
              if (password.length !== 0 && username.length !== 0) {
                var payload = {
                  password,
                  username,
                };
                const userr = payload.username;
                payload = JSON.stringify(payload);
                handleSignIn(payload, userr);
              } else {
                alert("Fields cannot be empty :/");
              }
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};
