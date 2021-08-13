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
  function CheckLoginStatus() {
    let username = document.cookie.split("=")[1];
    if(username === undefined)
    {
       //console.log("not logged in");
       return (
         <>
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
               to="/register"
               duration={500}
               exact="true"
               offset={-80}
               boderbg={greengb}
             >
               SIGNUP
             </NavLinksRouter>
           </NavItem>
         </>
       );
      
    }else{
       
       // console.log(username)
        return (
          <>
            <NavItem>
              <NavLinksRouter
                to="/account"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                ACCOUNT
              </NavLinksRouter>
            </NavItem>
            <NavItem>
              <NavLinksRouter
                to="/logout"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                <abbr title={username}>LOGOUT</abbr>
              </NavLinksRouter>
            </NavItem>
          </>
        );
    }
  }
 
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
            {CheckLoginStatus()}
           
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
