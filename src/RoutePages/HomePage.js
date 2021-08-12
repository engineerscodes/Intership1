import React, { Component } from "react";
import Navbar from "../Components/NavBar/Navbar";
import SideBar from "../Components/SideBar/SideBar";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import InfoData from "../Components/InfoSection/InfoData";
import TopCat from "../Components/Topcategories/TopCat";
import TestTimonialCardComponent from "../Components/TestTimonials/TestTimonialCard";
import Footer from "../Components/Footer/Footers.js";
class HomePage extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <SideBar
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          show={"true"}
        />
        <Navbar toggle={this.toggle} show={"true"} />

        <Banner />
        <About />
        <InfoData />

        <TopCat />
        <TestTimonialCardComponent />
        <Footer />
      </>
    );
  }
}
export default HomePage;
