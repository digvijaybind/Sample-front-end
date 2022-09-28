import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Uparrow from "../../assets/image/Uparrow.svg";
import CustomButton from "../../commonComponent/Button";
import Mobilelogoimg from "../../assets/image/Allinone/Mobilelogo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HyperBridgelogo from "../../assets/image/Allinone/Productslogo/hyperbridgenew.svg";
import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import Hyperswaplogo from "../../assets/image/Allinone/Productslogo/hyperswapnew.svg";
import Hyperswalletlogo from "../../assets/image/Allinone/Productslogo/hyperwalletnew.svg";
import Hyperstacklogo from "../../assets/image/Allinone/Productslogo/hyperstakenew.svg";
import Dotlogo from "../../assets/image/Allinone/security/Dotlogo.svg";
import Halborn from "../../assets/image/halborn.svg";
import PeckShiel from "../../assets/image/PeckShiel.svg";
import blockicon from "../../assets/image/blockicon.svg";
import RoadMap from "../../components/Roadmaps/RoadMap";
import Media from "../mediaandPublication/Media";
import Audit from "../audits/Audit";
import Partners from "../partenerShip"
import Supportblock from "../supportBlockchain/Supportblock";
import "./allinoneapp.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ProductbarWrapper = styled.div`

`;
const EachProduct = styled.div`
padding: 5px 5px;

`;

const Productlogo = styled.img`
  height: 46.19px;
  width: 247px;
`;
const ProductLowerhead = styled.div`
  font-family: PlusjakartaSans;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Main gradient */

  background: linear-gradient(88.49deg, #7afbe4 48.72%, #4a54f4 84.08%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const SecurityRightHead2 = styled.div`
  font-family: PlusjakartaSans;
  margin: 2rem 0;
  font-weight: 700;
  font-size: 48px;
  // line-height: 64px;
  /* or 133% */

  /* Main white */

  color: #d0d4de;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans !important;
    font-size: 3rem;
    line-height: 64px;
    /* or 133% */
  
    /* Main white */
  
    color: #d0d4de;
  }
`;
const SecurityRightHead3 = styled.div`
  font-family: PlusjakartaSans;

  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  /* Main white */

  color: #d0d4de;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans !important;
    font-size: 1rem;
    line-height: 28px;
    /* or 133% */
  
    /* Main white */
  
    color: #d0d4de;
  }
`;
const SingleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Dotwrapper = styled.img`
  width: 10px;
  height: 10px;
`;

const SecurityLeftHead1 = styled.div``;







const LandingPage = () => {
  const list = [
    { count: "04", name: "Blockchains" },
    { count: "15+", name: "Partners" },
    { count: "20+", name: "Backers" },
    { count: "80k+", name: "Community" },
  ];
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {

          duration: 1,

        },
        opacity: 4,
      });
    }
    if (!inView) {
      animation.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div className="Whole-page">
      <div className="land-top-container">
        <Grid container item xs={11} sm={7} md={7}>
          <Grid item xs={12} sm={7} md={8}>
            <div className="cmn-title">
              Diversifying <br />
              the DeFi Ecosystem
            </div>
            <div className="statement">
              By introducing an all-inclusive Cross-Chain DeFi Protocol
            </div>
            <Grid item xs={12} >
              <CustomButton
                btnName="Cross chain world" icon={Uparrow} />
            </Grid>

          </Grid>
        </Grid>
      </div>
      <div className="count-box" >
        <Grid container direction="row" display="flex" justifyContent="center">
          <Grid
            item
            xs={8}
            sm={6}
            md={6}
            container
            direction="row"
            className="count-list"
          >
            {list.map((data, index) => {
              return (
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  className={`count-cards ${index !== 3 && "border-card"}`}
                >
                  <div className="land-count-number">{data.count}</div>
                  <div className="count-name">{data.name}</div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>

      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="info-wrap-landing landpage-mobile"

      >
        <Grid
          item
          xs={10}
          sm={9} md={9} lg={9}
          container
          spacing={2}
          justifyContent="center"
          alignItems={"center"}
          direction={"row"}
          className="productionWrapper all-production"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            container
            justifyContent="center"
            direction={"row"}
            className='all-production'
          >
            <div className="productLeft">
              <div className="Headine1">
                <div>Introducing <br></br> Everything <b className="font-color">Hyper</b> </div>

              </div>
              <div className="Headline2 Introduces-lastwrapper" >
                Discover the most inclusive set of Cross-chain DApps Pushing intercoperability at the forefront of adoption
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className='all-production'>
            <div className="productRight">
              <ProductbarWrapper className="product-container">
                <EachProduct className="each-product">
                  <Link to="/hyperswap">
                    <Productlogo src={HyperBridgelogo} />
                  </Link>
                </EachProduct>
                <EachProduct className="each-product">
                  <Link to="/hyperlend">
                    <Productlogo src={Hyperlendlogo} />
                  </Link>
                </EachProduct>
                <EachProduct className="each-product">
                  <Link to="/hyperswap">
                    <Productlogo src={Hyperswaplogo} />
                  </Link>
                </EachProduct>
                <EachProduct className="each-product">
                  <Link to="/hyperswap">
                    <Productlogo src={Hyperswalletlogo} />
                  </Link>
                </EachProduct>
                <EachProduct className="each-product">
                  <Link to="/hyperswap">
                    <Productlogo src={Hyperstacklogo} />
                  </Link>
                </EachProduct>
              </ProductbarWrapper>

              <ProductLowerhead className="landing-soon">More DApps Landing Soon...</ProductLowerhead>
            </div>
          </Grid>
        </Grid>


      </Grid>
      <Grid container justifyContent={"center"} >
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="info-wrap-Mobile-landing"
        >
          <Grid
            item
            sm={9} md={9} lg={9}
            xs={10}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
            className="land-mobile"
          >
            <Grid item xs={12} sm={6} md={6} className="lan-evm-image">
              <img className="anima" src={Mobilelogoimg} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="lan-mob-title">ONE OF A KIND</div>
              <div className="lan-mob-main"><span className="mobile-title"> Mobile First</span>  <br></br>DeFi Platform</div>
              <div className="lan-mob-des">
                Defragmented by chain agnostic protocols we are eliminating the
                need to jump on endless applications and bring the most
                inclusive framework of DeFi solutions To empower Innovators,
                Builders and Traders we are revealing Mobile First DeFi
                Application under which everything that you want to do, you can
                do{" "}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent={"center"} >
        <Grid
          item
          xs={12}
          sm={9} md={9} lg={9}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="all-hyperlaunch"
        >
          <Grid item xs={10} sm={7} md={7} className="launchPad-evm">
            <div className="all-hyper-lunch-multichain cmn-title">
              A Multi-chain incubation & grant program <b className="font-color hyperlaunch-font">HyperLaunch</b>
            </div>
            <div className="all-hyper-lanuch-subtitle">Spherium’s native multi-chain program to facilitate cross-chain integration for any token yielding project </div>
          </Grid>
          <Grid
            item
            xs={10} sm={5} md={5}
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-end"
            direction={"row"}
            className='go-cross-btn'
          >
            <Grid item xs={12} sm={10} md={10} >
              <CustomButton btnName={"Go Cross-chain"} icon={Uparrow} />
            </Grid>

          </Grid>
        </Grid>

      </Grid>
      <Grid item xs={12} container justifyContent={'center'} >
        <Grid
          item
          xs={9}
          md={9}
          sm={9}
          lg={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="info-wrap-supportedChain"
        >
          <Grid
            item
            xs={12}
            md={9}
            sm={9}
            lg={9}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
            className="security-container "
          >
            <Grid
              item
              xs={12}
              sm={7}
              md={6}
              lg={6}
              container
              justifyContent="flex-start"
              direction={"row"}
              className="SecuritySection"
            >
              <div className="securityLeft">
                <SecurityRightHead2 className="MiddleSecurity cmn-title">
                  Security Parameter Engaged
                </SecurityRightHead2>
                <SecurityRightHead3 className="Row1-security security-discover">
                  Discover The Most Inclusive Set of Cross-Chain DApps
                  Pushing Interoperability At The Forefront
                </SecurityRightHead3>
              </div>
            </Grid>
            <Grid item xs={12} sm={5} md={6} lg={6} container justifyContent={'center'}>
              <div className="securityRight security-landing">
                <SingleWrapper>
                  <Dotwrapper src={Dotlogo} className="dotLogo" />
                  <SecurityLeftHead1 className="leftHeadeline">
                    Long testnet phases for bug fixes & vulnerability identification

                  </SecurityLeftHead1>
                </SingleWrapper>

                <SingleWrapper>
                  <Dotwrapper src={Dotlogo} className="dotLogo" />
                  <SecurityLeftHead1 className="leftHeadeline">
                    Audited by industry leading partners
                  </SecurityLeftHead1>
                </SingleWrapper>

                <SingleWrapper>
                  <Dotwrapper src={Dotlogo} className="dotLogo" />
                  <SecurityLeftHead1 className="leftHeadeline">
                    Adoption of practises to safeguard liquidity & assets locked

                  </SecurityLeftHead1>
                </SingleWrapper>
                <SingleWrapper>
                  <Dotwrapper src={Dotlogo} className="dotLogo" />
                  <SecurityLeftHead1 className="leftHeadeline">
                    Invoked smart contract code functionalities to detect and mitigate attacks

                  </SecurityLeftHead1>
                </SingleWrapper>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="info-wrap"
      >
        {/* <Grid
            item
            xs={10}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
          > */}
        {/* <Grid item xs={10}> */}
        <Grid
          item
          xs={9}
          container
          spacing={2}
          justifyContent="center"
          alignItems={"center"}
          direction={"row"}
          className="productionWrapper    "
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            container
            justifyContent="center"
            direction={"row"}
          >
            <div className="productLeft">
              <div className="Headine1">
                <div>Audited and verified by</div>
              </div>
              <div className="cmn-sub-title8 Introduces-lastwrapper" >
                Check out the live audit reports, bug fixes and recertification in smart contracts
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className="productRight audit-landing">
              <ProductbarWrapper className="product-container">
                <EachProduct className="each-product">
                  <Link to="/hyperswap">
                    <Productlogo src={blockicon} />
                  </Link>
                </EachProduct>
                <EachProduct className="each-product">
                  <Link to="/hyperlend">
                    <Productlogo src={PeckShiel} />
                  </Link>
                </EachProduct>
                <EachProduct className="each-product">
                  <Link to="/hyperswap">
                    <Productlogo src={Halborn} />
                  </Link>
                </EachProduct>
              </ProductbarWrapper>
              <div className="pro-sub">
                <div className="cmn-sub-title8 audit-sub-list" >
                  Vesting, HyperSwap, Bridge and BlockSec audited by Halborn
                </div>
                <div className="cmn-sub-title8 audit-sub-list" >
                  Smart Contract audited by Quillhash and PeckShield
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <RoadMap />

        <Media />

      </Grid>
      <Grid item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="info-wrap"
      >
        <Partners />
      </Grid>
      <Supportblock />

      {/* </Grid> */}
      {/* </Grid> */}

    </div>
  );
};

export default LandingPage;
