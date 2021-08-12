import React from "react";
import {
  FooterConatiner,
  FooterWrap,
  FooterItemConatiner,
  FooterItemsWrapper,
  FooterItems,
  FooterTitle,
  Footertext,
  MediaWraper,
  SocialMediaWrap,
  Logo,
  SICONS,
  SoicalLinks,
  CopyRights,
  FootertextHide,
  Callme,
} from "./FooterStyle";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footers = () => {
  return (
    <FooterConatiner id="contact">
      <FooterWrap>
        <FooterItemConatiner>
          <FooterItemsWrapper>
            <FooterItems>
              <FooterTitle>About Us </FooterTitle>
              <Footertext
                to={{ pathname: "https://www.education4ol.com/" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Edu4ol
              </Footertext>
              <Footertext
                to={{
                  pathname: "https://www.linkedin.com/company/education-4-ol/",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Linkedin
              </Footertext>
              <Footertext
                to={{
                  pathname: "https://www.instagram.com/education_4_ol/",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Instagram
              </Footertext>
            </FooterItems>

            <FooterItems>
              <FooterTitle>Contact Us </FooterTitle>
              <Footertext
                to={{
                  pathname:
                    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mknaveen837@gmail.com",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Gmail
              </Footertext>
              <Callme href="tel:+916383128594"> Call Us</Callme>
              <FootertextHide to="/"> XX </FootertextHide>
            </FooterItems>
          </FooterItemsWrapper>

          <FooterItemsWrapper>
            <FooterItems>
              <FooterTitle>services </FooterTitle>
              <Footertext
                to={{
                  pathname: "https://www.education4ol.com/about-us",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Teaching
              </Footertext>
              <Footertext
                to={{
                  pathname: "https://www.education4ol.com/about-us",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Career counselling{" "}
              </Footertext>
              <Footertext
                to={{
                  pathname: "https://www.education4ol.com/about-us",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Quiz Platform{" "}
              </Footertext>
            </FooterItems>

            <FooterItems>
              <FooterTitle > Products </FooterTitle>
              <Footertext
                to={{
                  pathname: "https://www.education4ol.com/about-us",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Eduol APP
              </Footertext>
              <Footertext
                to={{
                  pathname: "https://www.education4ol.com/about-us",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Coming soon...
              </Footertext>
              <Footertext
                to={{
                  pathname: "https://www.education4ol.com/about-us",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Coming soon...
              </Footertext>
            </FooterItems>
          </FooterItemsWrapper>
        </FooterItemConatiner>

        <MediaWraper>
          <SocialMediaWrap>
            <Logo to="banner"> Edul4ol </Logo>

            <SICONS>
              <SoicalLinks
                href="https://www.instagram.com/education_4_ol/"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
              >
                {" "}
                <FaInstagram />{" "}
              </SoicalLinks>
              <SoicalLinks
                href="https://www.linkedin.com/company/education-4-ol/"
                target="_blank"
                aria-label="Linkedin"
                rel="noreferrer"
              >
                {" "}
                <FaLinkedin />{" "}
              </SoicalLinks>
              <SoicalLinks
                href="https://www.facebook.com/education4ol4"
                target="_blank"
                aria-label="Facebook"
                rel="noreferrer"
              >
                {" "}
                <FaFacebook />{" "}
              </SoicalLinks>
              <SoicalLinks
                href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=mknaveen837@gmail.com"
                target="_blank"
                aria-label="G-mail"
                rel="noreferrer"
              >
                {" "}
                <SiGmail />{" "}
              </SoicalLinks>
            </SICONS>
          </SocialMediaWrap>
        </MediaWraper>
        <CopyRights>
          Copyright © {new Date().getFullYear()} All rights reserved | Edul4ol
        </CopyRights>
      </FooterWrap>
    </FooterConatiner>
  );
};

export default Footers;
