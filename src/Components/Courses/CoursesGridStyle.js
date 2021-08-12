import styled from "styled-components";

export const Teamgrids = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, 300px);
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 300px);
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 280px);
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 150px);
  }
`;
export const DisplayList = styled.div`
  display: flex;
  background: #010606;
`;

export const DisplayH1 = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  padding: 5px;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 330px) {
    font-size: 1.5rem;
    padding: 5px auto 25px auto !important;
  }
`;

export const DisplayListEvent = styled.div`
  display: flex;
  background: #20dea0;
`;