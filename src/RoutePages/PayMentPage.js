import React, { Component } from "react";

import '../Components/TopCSS/Payment.css'

class PayMents extends Component {
  
  render() {
    const { state } = this.props.location;
    return (
      <>
        <div className="neo">
          <div id="paycard">
            <div id="card-title">
              <p>PURCHASE</p>
            </div>
            <div id="PaymentBody">
              <span id="paycard-header">Saved cards:</span>
              <div id="payCards">
                <div className="paymentsflex">
                  <div className="holder1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="imgpay"
                    />
                  </div>
                  <div className="holder2">
                    <input
                      id="codecc"
                      type="text"
                      placeholder="**** **** **** 1014"
                      disabled
                    />
                  </div>
                  <div className="holder3">
                    <a>Remove card</a>{" "}
                  </div>
                </div>
                <div className="paymentsflex">
                  <div className="holder1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                      alt="imgpay"
                    />
                  </div>
                  <div className="holder2">
                    <input
                      id="codecc2"
                      type="text"
                      placeholder="**** **** **** 1014"
                      disabled
                    />
                  </div>
                  <div className="holder3">
                    <a>Remove card</a>{" "}
                  </div>
                </div>
                <div>
                  <span id="card-header2">Add new card:</span>
                  <div id="userinput">
                    <div id="namecard">
                      <span>Card holder name</span>
                    </div>
                    <div id="nameinput">
                      <input type="text" placeholder="Naveen" />
                    </div>
                  </div>
                  <div id="cardnumber">
                    <div id="c11">
                      <div>
                        <span>Card number</span>
                      </div>
                      <div>
                        <input type="text" placeholder="1111-1025-1241" />
                      </div>
                    </div>

                    <div id="c12">
                      <input type="text" placeholder="Exp. date"></input>
                    </div>
                    <div id="c13">
                      <input type="text" placeholder="CVV"></input>
                    </div>
                  </div>
                </div>

                <div className="paymentsflex">
                  <div className="holder1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                      alt="imgpay"
                    />
                  </div>
                  <div className="holder2">
                    <input
                      id="codecc3"
                      type="text"
                      placeholder={state[1]}
                      disabled
                    />
                  </div>
                  <div className="holder3">
                    <a>{state[0]}</a>{" "}
                  </div>
                </div>

                <div id="PayButton">
                  <div>
                    <button className="glow-on-hover">PAY</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default PayMents;