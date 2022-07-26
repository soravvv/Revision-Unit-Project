import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  var auth = useSelector((state) => state.data.auth);

  const handleSignUp = async function (data) {
    let api = `https://masai-api-mocker.herokuapp.com/auth/register`;

    let res = await fetch(api, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let dataa = await res.json();
    console.log("data", dataa);

    if (dataa.message == "Registration Success") {
      //    window.location.href = "signIn.html";
      alert("Sign Up Successfull");
      navigate("/signin");
    } else if (dataa.message != "Registration Success") {
      alert("Registration failed, user already exists");
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
            <u>Sign Up</u>
          </h1>
          <div>
            <p>Name</p>
            <input
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              placeholder="Enter Your Email I'D"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Password</p>
            <input type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p>Username</p>
            <input
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Mobile</p>
            <input
              placeholder="Enter Your Mobile Number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <p>Description</p>
            <input
              placeholder="Enter Some Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <p>
              Already have an account? Do{" "}
              <span>
                <u>
                  <Link to="/signin" className="link">
                    Sign In
                  </Link>
                </u>
              </span>
            </p>
          </div>
          <button
            onClick={() => {
              if (
                name.length !== 0 &&
                email.length !== 0 &&
                password.length !== 0 &&
                username.length !== 0 &&
                mobile.length !== 0 &&
                description.length !== 0
              ) {
                var payload = {
                  name,
                  email,
                  password,
                  username,
                  mobile,
                  description,
                };
                payload = JSON.stringify(payload);
                handleSignUp(payload);
                console.log(payload);
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
