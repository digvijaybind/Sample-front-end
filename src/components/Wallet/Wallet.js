import react from "react";
import Grid from "@mui/material/Grid";
// import Laptop from "../../assets/image/aboutUs/addfundsMockup.svg";
import Crossmockup from "../../assets/image/wallet/crossmockup.svg";
import Profile1 from "../../assets/image/profiles/profile1.svg";
import HeroSection from "../../assets/image/wallet/HeroSection.svg";
import Roll from "../../assets/image/wallet/roll.svg";
import KeyIcon from "../../assets/image/wallet/keyIcon.svg";
import Mobilewallet from "../../assets/image/wallet/Mobilewallet.svg";
import Phone4 from "../../assets/image/wallet/phone4.svg";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import Googleplayimg from "../../assets/Googleplay.svg";
import Applestoreimg from "../../assets/Applestore.svg";
import DotLine from "../../assets/image/wallet/dotLine.svg";
import Transak from "../../assets/image/wallet/Transak.svg";
import Wyre from "../../assets/image/wallet/Wyre.svg";

import Slider from "react-slick";
import "./wallet.scss";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

// import "./hyperLaunchNew.scss";

const WalletPage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const cardList = [
    { icon: KeyIcon, description: "One set of keys" },
    { icon: Roll, description: "Multiple Blockchains" },
    { icon: KeyIcon, description: "Infinite Tokens" },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="wallet-page">
      <div className="top-wallet wallet-top-content">
        <div className="wallet-top-left">
          <Grid
            item
            xs={12}
            md={12}
            sm={12}
            lg={6}
            className="walt-content walt-2 hy-stack"
            container
            spacing={2}
            alignContent={"center"}
            justifyContent="center"
            direction={"row"}
          >
            <Grid item xs={9} sm={12} md={12} lg={12} className="cmn-title">
              A chain agnostic mobile wallet to streamline asset hold-off across chains
            </Grid>
            <Grid item xs={9} sm={12} md={12} lg={12} className="walt-sub-title">
              The only mobile wallet you need to do migrate into the EVM compatible ecosystems
            </Grid>
            <Grid item xs={9} sm={12} md={12} lg={12} className="walt-top-btn btn-zindex">
              <CustomButton btnName={"HyperStake"} icon={Uparrow} />
            </Grid>
          </Grid>
        </div>
        <div className="wallet-top-right">
          <img src={HeroSection} style={{ width: '100%' }} className='desc-bridgeimg' />
          <img src={Mobilewallet} style={{ width: '100%' }} className='mob-bridgeimg' />

        </div>
      </div>

      <div className="IntegrateEVM">
        <Grid
          item
          xs={12}
          container
          direction="row"
          justifyContent="center"
          className="every-margin"
        >
          <Grid
            item
            xs={10} md={11} sm={10} lg={10}
            className="swap-main-head"
            container
            direction="row"
            justifyContent="center"
          >
            <Grid item xs={10} md={11} sm={10} lg={7} className="cmn-title2">
              Spherium Wallet allows you to store
              assets and more
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* <div className=""> */}
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="side-wallet-Container"
      >
        <Grid
          item
          xs={10}
          container
          spacing={2}
          justifyContent="center"
          alignItems={"center"}
          direction={"row"}
          className="walt-top-Container wrap-grid"
        >
          <Grid
            item
            xs={10}
            md={6}
            lg={6}
            sm={6}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
            className="walt-top-Container"
          >
            <Grid xs={12} className="walt-chain-title wlt-title-center">
              Add funds to Spherium Wallet instantly with our partners
            </Grid>
            <Grid xs={12} className="trans-wyre">
              <img src={Transak} />
              <img src={Wyre} />
            </Grid>
            <Grid xs={10} className="dot-line">
              <div className="dot-image">
                <img src={DotLine} />
              </div>
              <div className="dot-line-name">
                <div>Add funds</div>
                <div>Transact</div>
                <div>Decentrally</div>
              </div>
            </Grid>
          </Grid>

          <Grid xs={10} md={6} lg={6} sm={6} className="lan-evm-image">
            <img src={Phone4} />
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
        className="asset-wallet-Container"
      >
        <Grid
          item
          xs={10}
          container
          spacing={2}
          justifyContent="center"
          alignItems={"center"}
          direction={"row"}
          className="walt-top-Container"
        >
          <Grid xs={12} md={6} lg={6} sm={6} className="lan-cross-image">
            <img src={Crossmockup} />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={6}
            sm={6}
            container
            spacing={2}
            justifyContent="center"
            alignItems={"center"}
            direction={"row"}
            className='wallet-asset'
          >
            <Grid item xs={12}>
              <div className="walt-chain-title">
                Cross-Chain Asset Management and Asset Allocation from one
                wallet app now
              </div>
              <div className="walt-sub-title">
                Supporting ERC20, BEP20 and more standard tokens natively
              </div>
              <div className="walt-cross-title">Try Spherium wallet</div>
              <div className="walt-sub-title">Mobile DApp</div>
            </Grid>
            <Grid
              xs={10}
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems={"center"}
              direction={"row"}
              className="google-btn"
            >
              <Grid xs={4}>
                <img className="showImages img-google" src={Googleplayimg} />
              </Grid>
              <Grid xs={4}>
                <img className="showImages img-google" src={Applestoreimg} />
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <div className="walt-sub-title desktopHeader">Desktop DApp</div>
              <div>
                <CustomButton
                  btnName={"Go to DApp"}
                  width={12}
                  icon={Uparrow}
                />
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
        className="asset-wallet-Container"
      >
        <Grid
          item
          xs={12}
          md={10}
          sm={10}
          lg={10}
          className="each-cards cross-card"
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
        >
          {cardList.map((data) => {
            return (
              <Grid
                item xs={9} sm={3} md={3.5}
                className="card-view card-duplicate"
                container
                spacing={2}
                justifyContent="center"
                direction={"row"}
              >
                <Grid xs={12} className="cross-icon-view">
                  <img src={data.icon} />
                </Grid>
                <Grid xs={12} className=" cmn-title2-mob cross-icon-text">
                  <div>{data.description}</div>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* </div> */}
      {/* <div className="test">
        <Carousel afterChange={onChange}>
          <h3 style={contentStyle}>1</h3>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <h3 style={contentStyle}>4</h3>
        </Carousel>
      </div> */}
    </div>
  );
};

export default WalletPage;
