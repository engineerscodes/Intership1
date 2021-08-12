import styled from "styled-components";


export const BannerContainer = styled.div`
 
  display: flex;
  height: 350px;
  position: relative;
  z-index: 1;
  background-color: #aaa;
`;

export const BannerImg =styled.img`
  
  width: 100%;
  z-index: 1;
  position: relative;


`;

export const BannerText = styled.div`
  z-index: 2;
  position: absolute;
  left: 10%;
  top: 10%;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  padding: 2.4rem;
  width: 200px;
`;