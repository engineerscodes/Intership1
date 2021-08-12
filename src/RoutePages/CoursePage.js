import React, { Component } from "react";
import Navbar from "../Components/NavBar/Navbar";
import SideBar from "../Components/SideBar/SideBar";
import Footer from "../Components/Footer/Footers.js";
import CourseGrid from "../Components/Courses/Coursesgrid";

class CoursePage extends Component {
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
        <CourseGrid/>
        <Footer />
      </>
    );
  }
}
export default CoursePage;
