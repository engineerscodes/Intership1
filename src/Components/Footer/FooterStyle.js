import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterConatiner = styled.footer`
  background-color: #000;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterItemConatiner = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 30px;
  }
`;

export const FooterItemsWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FootertextHide = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;
  visibility: hidden;
`;

export const FooterTitle = styled.h1`
  font-size: 15px;
  margin-bottom: 16px;
  font-weight: bolder;
`;

export const Footertext = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const MediaWraper = styled.section`
  max-width: 1000px;
  width: 100%;
  border-top: 5px solid #fff;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 30px auto 0 auto;
  @media screen and (max-widht: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(LinkS)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  @media screen and (max-width: 520px) {
    margin: 0;
    font-size: 1rem;
  }
`;

export const SICONS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 520px) {
    justify-content: space-evenly;
  }
`;

export const SoicalLinks = styled.a`
  color: #fff;
  font-size: 25px;
`;

export const CopyRights = styled.p`
  color: #fff;
  margin: 10px;
  font-weight: bold;
  @media screen and (max-width: 520px) {
    margin-top: 30px;
    font-size: 13px;
  }
`;

export const Callme = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;