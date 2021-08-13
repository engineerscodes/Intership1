import React, { Component } from "react";
import Navbar from "../Components/NavBar/Navbar";
import SideBar from "../Components/SideBar/SideBar";
import Footer from "../Components/Footer/Footers.js";

import Account from "../Components/Account/Account";



class AccountPage extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <SideBar isOpen={this.state.isOpen} toggle={this.toggle} show={false} />
        <Navbar toggle={this.toggle} show={"false"} />

        <Account />

        <Footer />
      </>
    );
  }
}

export default AccountPage;