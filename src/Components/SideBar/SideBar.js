import React from "react";
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SibeBarLink,
  SibeBarLinkRouter,
} from "./SideBarStyle";

const SideBar = (props) => {
   function CheckLoginStatus() {
      let username = document.cookie.split("=")[1];
      if(username === undefined){
       return (
         <>
           <SibeBarLinkRouter to="/login" onClick={props.toggle}>
             LOGIN
           </SibeBarLinkRouter>
           <SibeBarLinkRouter to="/register" onClick={props.toggle}>
             SIGNUP
           </SibeBarLinkRouter>
         </>
       );
      }else{
        return (
          <>
            <SibeBarLinkRouter to="/account" onClick={props.toggle}>
              ACCOUNT
            </SibeBarLinkRouter>
            <SibeBarLinkRouter to="/logout" onClick={props.toggle}>
              <abbr title={username}>LOGOUT</abbr>
            </SibeBarLinkRouter>
          </>
        );
      }
   }
   
  function homeDisplayAction() {
    if (props.show === "true") {
      return (
        <SibeBarLink to="home" onClick={props.toggle}>
          HOME
        </SibeBarLink>
      );
    } else {
      return (
        <SibeBarLinkRouter to="/" onClick={props.toggle}>
          HOME
        </SibeBarLinkRouter>
      );
    }
  }

  return (
    <div>
      <SideBarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            {homeDisplayAction()}
            <SibeBarLinkRouter to="/Courses" onClick={props.toggle}>
              COURSE
            </SibeBarLinkRouter>
            {CheckLoginStatus()}
            <SibeBarLink to="contact" onClick={props.toggle}>
              CONTACT
            </SibeBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SideBarContainer>
    </div>
  );
};

export default SideBar;
