import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
import { renderIntoDocument } from "react-dom/test-utils";
import user_icon from './../../assets/user.js.png';
import email_icon from './../../assets/email.js.png';
import password_icon from './../../assets/password.js.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    console.log("============== username ------ ", userName);
  }, [userName]);

  useEffect(() => {
    console.log("======== UserEmail ------", userEmail);
  }, [userEmail]);
  useEffect(() => {
    console.log("============ userPassword -------", userPassword);
  }, [userPassword]);

  function handleSignUp() {
    console.log(
      "===========ewpjoerwepri[]=",
      userName,
      userEmail,
      userPassword
    );

    const data = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type
        // Add any other headers if needed
      },
      body: JSON.stringify(data), // Convert the data to JSON string
    };

    fetch("http://localhost:8080/signup", requestOptions)
      .then((response) => {
        if (response.ok) {
          // If the response status is OK (2xx), handle the successful response
          return response.json(); // Parse the response as JSON
        } else {
          // If the response status is not OK, handle the error
          throw new Error("POST request failed");
        }
      })
      .then((data) => {
        // Handle the data from the successful response
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }

  function handleLogin() {
    console.log("===========ewpjoerwepri[]=", userEmail, userPassword);
    const data = {
      userEmail: userEmail,
      userPassword: userPassword,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type
        // Add any other headers if needed
      },
      body: JSON.stringify(data), // Convert the data to JSON string
    };

    fetch("http://localhost:8080/Login", requestOptions)
      .then((response) => {
        if (response.ok) {
          // If the response status is OK (2xx), handle the successful response
          return response.json(); // Parse the response as JSON
        } else {
          // If the response status is not OK, handle the error
          throw new Error("POST request failed");
        }
      })
      .then((data) => {
        // Handle the data from the successful response
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forget-password">
          Forget password? <span>Click here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={handleSignUp}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={handleLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
