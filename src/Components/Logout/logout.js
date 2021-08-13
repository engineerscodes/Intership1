import React from "react";

import './Logout.css'

import { useHistory } from "react-router-dom";
const Logout =()=>{
   const history = useHistory();
  function logoutuser(){
      document.cookie = "username=nil,;max-age=0";
      console.log("cookies destoryed");
       history.push({
         pathname: "/",
       });
  }


  return (
    <>
      <div className="neo">
        <div id="paycard">
          <div id="card-title">
            <p>PROFILE</p>
          </div>
          <div id="PaymentBody">
            <div id="payCards">
              <div>
                <span id="card-header2">{"premium user".toUpperCase()}</span>
                <div id="userinput">
                  <div id="namecard">
                    <span>User Name</span>
                  </div>
                  <div id="nameinput">
                    <input
                      type="text"
                      placeholder={document.cookie.split("=")[1]}
                      disabled
                    />
                  </div>
                </div>
                <div className="profileinfo">
                  <div className="Pspan">
                    <span>Name</span>
                  </div>
                  <div className="Pinput">
                    <input
                      type="text"
                      placeholder={document.cookie.split("=")[1]}
                      disabled
                    />
                  </div>
                </div>
                <div className="profileinfo">
                  <div className="Pspan">
                    <span>Email</span>
                  </div>
                  <div className="Pinput">
                    <input
                      type="email"
                      placeholder="mknaveen837@gmail.com"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div id="PayButton">
                <div>
                  <button className="glow-on-hover" onClick={()=>logoutuser()}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Logout;