import React from "react";

import styled from "styled-components";
import HyperBridgelogo from "../../assets/image/Allinone/products/hyperbridge.svg";
import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import Halborn from "../../assets/image/halborn.svg";
import PeckShiel from "../../assets/image/PeckShiel.svg";
import blockicon from "../../assets/image/blockicon.svg";
import { Grid } from "@mui/material";

import PlusJakartaSansRegular from "../../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf";
import "./audit.css";

const RightSection1 = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 48px;
  font-family: PlusjakartaSans;
  color: #d0d4de;
`;
const RightSection2 = styled.div`
  font-family: PlusjakartaSans;

  font-weight: 400;
  font-size: 2rem;
  line-height: 28px;
  margin-top: 1rem;
  font-size: 16px;
  color: #d0d4de;
`;

const LowerMangnement = styled.div`
grid-template-rows: repeat(3,1fr);
    display: grid;
    grid-gap: 8px;
    grid-template-rows

`;

const LowerHead = styled.div`
  font-family: PlusjakartaSans;

  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  /* identical to box height, or 143% */
  padding-top: 1rem;

  /* Main white */

  color: #d0d4de;
`;

const Productlogo = styled.img`
padding:0 10px 
`;

const Audit = () => {
  return (
    <Grid
      item
      xs={9}
      md={9}
      sm={9}
      container
      className="productionWrapper"
      direction="row"
      justifyContent="center"
      alignItems={"center"}
    >
      {/* <Grid item xs={9} md={9} sm={9} className="Auditwrapper"> */}
      <Grid item xs={12} md={5} sm={5}>
        <div className="auditLeft">
          <div className="audit-header-title">
            Audited and <br /> Verified  by
          </div>
          <div className="audit-header-sub-title">
            Discover The Most Inclusive Set of Cross-Chain <br></br>DApps
            Pushing Interoperability At The Forefront
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={7} sm={7} className="auditRight" container direction='column'>
        <Grid item xs={12} md={6} sm={6}>
          <div className="audit-btn">
            <div className="each-audit mob-width">
              <Productlogo src={Halborn} />{" "}
            </div>
            <div className="each-audit">
              <Productlogo src={PeckShiel} />{" "}
            </div>
            <div className="each-audit">
              <Productlogo src={blockicon} />{" "}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
          <div className="lower-content">
            <div className="state-list">
              Vesting, HyperSwap, Bridge audited by Halborn
            </div>{" "}
            <div className="state-list">
              Smart Contract, Hyperlend audited by Perkshield
            </div>
            <div className="state-list">
              Staking contract audited by Halborn
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
    // </Grid>
  );
};

export default Audit;
