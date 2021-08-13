import React from "react";
import logo from "../../Assets/logo.jpg";
import Usernameicon from "../../Assets/login.png";
import "./Logincss.css";
import Pass from "../../Assets/padlock.png";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  function LoginInto() {
    history.push({
      pathname: "/",
    });
    document.cookie = "username=" + document.getElementById("username").value;
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
            <div className="Lbody">
              <div className="Lflex">
                <div className="L1">
                  <img src={Usernameicon} alt="uname" />
                </div>
                <div className="L2">
                  <input type="text" id="username" placeholder="username" />
                </div>
              </div>
              <div className="Lflex">
                <div className="L1">
                  <img src={Pass} alt="uname" />
                </div>
                <div className="L2">
                  <input type="password" placeholder="password" />
                </div>
              </div>
            </div>

            <div className="LButton">
              <button onClick={LoginInto}>sign in </button>
            </div>
            <div className="footerL">
              <a href="/#"> Forgot password </a>
              or
              <a href="/register"> sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
