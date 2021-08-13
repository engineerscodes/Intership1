import { History as Data } from "./PurchaseData";
import {
  Pcontainer,
  PList,
  PListContainer,
  Pheader,
  PheaderC,
  PListHeader,
  PH3,
  Pspan,
  Pimg,
} from "./AccoutStyled";



import AccountLogo from "../../Assets/avatar-1.svg";

import { useHistory } from "react-router-dom";
const Account = () => {
  const history = useHistory();
  function checkuser() {
    let user = document.cookie.split("=")[1];
    if (user === undefined) {
      history.push({
        pathname: "/login",
      });
    }
  }
  checkuser();
  function goAccounts(){
    history.push({
      pathname: "/logout",
    });
  }
  return (
    <>
      <PListContainer>
        <div style={{ height: "50px" }}></div>
        <PheaderC>
          <Pimg src={AccountLogo} alt="account" width="250px" height="250px" />
        </PheaderC>
        <PheaderC>
          <Pheader>HI {document.cookie.split("=")[1]}</Pheader>
        </PheaderC>
        <PheaderC>
          <div id="PayButton">
            <div>
              <button className="glow-on-hover" onClick={()=>goAccounts()}> 
                Go To Accounts
              </button>
            </div>
          </div>
        </PheaderC>
      </PListContainer>
      <PListContainer>
        <PheaderC>
          <Pheader>Your Purchase</Pheader>
        </PheaderC>
        <PList>
          <PListHeader>
            <div>
              <Pspan>ORDER PLACED</Pspan>
              <PH3>{Data.length}</PH3>
            </div>
            <div>
              <Pspan>SHIP TO</Pspan>
              <PH3>{document.cookie.split("=")[1]}</PH3>
            </div>
          </PListHeader>
          {Data.map((data, index) => (
            <Pcontainer key={index}>
              <h2>{data.name}</h2>
              <p>COST : {data.cost}</p>
              <p>PURCHASE DATE : {data.date}</p>
              <h3>INSTRUCTOR : {data.instutor}</h3>
            </Pcontainer>
          ))}
        </PList>
      </PListContainer>
    </>
  );
};

export default Account;
