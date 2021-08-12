import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksRouter,
} from "./NavbarStyle";

import { FaBars } from "react-icons/fa";

let greengb = "true";
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Edul4ol</NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
                boderbg={greengb}
                ishinden={props.show}
              >
                HOME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksRouter
                to="/Courses"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                COURSE
              </NavLinksRouter>
            </NavItem>
            <NavItem>
              <NavLinksRouter
                to="/login"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                LOGIN
              </NavLinksRouter>
            </NavItem>

            <NavItem>
              <NavLinksRouter
                to="/signup"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                SIGNUP
              </NavLinksRouter>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                boderbg={greengb}
                ishinden={"true"}
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
