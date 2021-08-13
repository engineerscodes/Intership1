import React from "react";
import logo from "../../Assets/logo.jpg";
import Usernameicon from "../../Assets/login.png";
import Email from "../../Assets/email.png";
import Pass from "../../Assets/padlock.png";
import { useHistory } from "react-router-dom";

const Reg = () => {
  const history = useHistory();
  function validatePassword() {
    let pass = document.getElementById("pass").value;
    if (pass.length < 8) {
      document.getElementById("error").innerHTML =
        "password length not sufficent";
    } else {
      document.getElementById("error").innerHTML = "";
      history.push({
        pathname: "/login",
      });
    }
  }
  return (
    <>
      <div className="Login_p">
        <div className="logC">
          <div className="loginL">
            <div className="headerLog">
              <img src={logo} alt="logo" />
            </div>
            <div className="Ltext_center">EDU4OL</div>
            <div className="Lbody" style={{ paddingTop: "0px" }}>
              <div className="Lflex">
                <div className="L1">
                  <img src={Usernameicon} alt="uname" />
                </div>
                <div className="L2">
                  <input
                    id="username"
                    type="text"
                    placeholder="username"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="Lflex">
                <div className="L1">
                  <img src={Email} alt="uname" />
                </div>
                <div className="L2">
                  <input
                    id="email"
                    type="email"
                    placeholder="email"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="Lflex">
                <div className="L1">
                  <img src={Pass} alt="uname" />
                </div>
                <div className="L2">
                  <input id="pass" type="password" placeholder="password" />
                </div>
              </div>
            </div>

            <div className="LButton">
              <button onClick={validatePassword}>sign up </button>
            </div>
            <div className="footerL">
              <a href="/#"> Forgot password </a>
              or
              <a href="/login"> sign in</a>
            </div>
            <div style={{ textAlign: "center" }}>
              <p id="error"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reg;
