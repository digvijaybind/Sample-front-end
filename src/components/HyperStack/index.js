import react from "react";
import Grid from "@mui/material/Grid";
// import Laptop from "../../assets/image/aboutUs/addfundsMockup.svg";
import Crossmockup from "../../assets/image/wallet/crossmockup.svg";
import Profile1 from "../../assets/image/profiles/profile1.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Roll from "../../assets/image/wallet/roll.svg";
import Dollar from "../../assets/image/hyperstack/dollar.svg";
import Clock from "../../assets/image/hyperstack/clock.svg";
import Dollarnew from "../../assets/image/hyperstack/dollarnew.svg";
import Alarm from "../../assets/image/hyperstack/alarm.svg";
import Phone4 from "../../assets/image/wallet/phone4.svg";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import Googleplayimg from "../../assets/Googleplay.svg";
import Applestoreimg from "../../assets/Applestore.svg";
import DotLine from "../../assets/image/wallet/dotLine.svg";
import Transak from "../../assets/image/wallet/Transak.svg";
import Wyre from "../../assets/image/wallet/Wyre.svg";
import Springlogo from "../../assets/image/hyperstack/Herosection1.svg";
import Arrow from "../../assets/image/hyperstack/Arrow.svg";
import Dot from "../../assets/image/HyperSwap/dot.svg";
import MobileImage from "../../assets/image/hyperstack/test.svg";
// import MobileCumbackground from "../../assets/image/HyperSwap/MobileCumbackground.svg";
import Slider from "react-slick";
import "./hyperstack.scss";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

// import "./hyperLaunchNew.scss";

const HyperStack = () => {
  const ref = useRef(null);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const cardList = [
    {
      icon: Dollar,
      description:
        "Liquidity providers, looking to stake their assets present on multiple chains to earn dynamic yield rewards.",
    },
    {
      icon: Alarm,
      description:
        "Long-Term investors wanting stable returns by locking their assets in their preferred ecosystem",
    },
    {
      icon: Clock,
      description:
        "Short-Term investors locking their assets for some passive revenue.",
    },
    {
      icon: Dollarnew,
      description:
        "Protocols looking to reduce sell pressure on their tokens by using long-term staking or LP incentives. ",
    },
  ];
  const stackList = [
    {
      title: "Single Asset Fixed Staking",
      list: [
        "Stake any asset available for a fixed time period.",
        "Higher APY for higher time frame",
        "Early redemption penalties applies to some of the staking if withdrawn before the maturity time frame",
      ],
    },
    {
      title: "Single Asset Flexible Staking",
      list: [
        "Stake any asset available in a non-binding time period",
        "Higher APY for higher time frame",
        "No add-on penalty for un-staking without the completion of time frame",
      ],
    },
    {
      title: "LP Token Staking",
      list: [
        "Lock LP tokens and earn extra rewards ",
        "Provide liquidity on available LP pools",
      ],
    },
  ];
  const list = [
    { count: "100K", name: "Assets staked worth" },
    { count: "2", name: "Chains activated" },
    { count: "10k", name: "Rewards distributed" },
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
      <div className="stack-top">
        <div className="stack-top-left">
          <Grid
            item
            xs={12}
            md={12}
            sm={12}
            lg={12}
            className="walt-content walt-2 hy-stack"
            container
            spacing={2}
            alignContent={"center"}
            justifyContent="center"
            direction={"row"}
          >
            <Grid item xs={9} sm={12} md={12} lg={12} className="cmn-title">
              Locking asset liquidity on multiple chains is simpler than ever
            </Grid>
            <Grid
              item
              xs={9}
              sm={12}
              md={12}
              lg={12}
              className="cmn-sub-title1"
            >
              Unlocking the potential of moving locked liquidity in a
              cross-chain interoperable protocol
            </Grid>
            <Grid
              item
              xs={9}
              sm={12}
              md={12}
              lg={12}
              className="walt-top-btn btn-zindex"
            >
              <CustomButton btnName={"HyperStake"} icon={Uparrow} />
            </Grid>
          </Grid>
        </div>
        <div className="stack-top-right">
          <img
            src={Springlogo}
            style={{ width: "100%" }}
            className="desc-bridgeimg"
          />
          <img
            src={MobileImage}
            style={{ width: "100%" }}
            className="mob-bridgeimg"
          />
        </div>
      </div>
      {/* <div className=""> */}
      <div>
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
              xs={11}
              sm={10}
              md={10}
              lg={10}
              className="swap-main-head"
              container
              direction="row"
              justifyContent="center"
            >
              <Grid item xs={12} sm={8} md={9} lg={9} className="cmn-title2">
                <b className="Hyperswap-color">HyperStake</b> Is A Multi-Chain
                Staking protocol built to cater a diverse set of stakeholders
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              className="stack-cross-card"
              container
              spacing={2}
              justifyContent="space-between"
              direction={"row"}
            >
              {cardList.map((data) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={2.7}
                    sm={2.7}
                    className="card-views"
                    container
                    // justifyContent="center"
                    // alignItems={"center"}
                    // direction={"row"}
                  >
                    <div className="icon-details">
                      <img src={data.icon} />
                      <div className="cmn-sub-title2 stack-desc">
                        {data.description}
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </div>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="Fcenter"
        direction={"row"}
        className="swap-main-head"
      >
        {/* <Grid item xs={8} className="cmn-title2 stack_chain">
          <b className="Hyperswap-color">HyperStake</b> Is A Multi-Chain Staking
          protocol built to cater a diverse set of stakeholders
        </Grid> */}
        <Grid
          item
          xs={12}
          container
          spacing={3}
          justifyContent="center"
          direction={"row"}
          className="wholeImagewrapper"
        >
          {stackList.map((data) => {
            return (
              <Grid xs={9} md={3.5} className="stack-box" wrap="nowwrap">
                <div className="inner-box">
                  <div className="innerbackground">
                    <div className="cmn-title2 st-bullet cmn-title2-mob">
                      {data.title}
                    </div>
                    <div className="InnerContainer">
                      {data.list.map((val) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            className="bullet-part bottom-margin"
                          >
                            <img src={Dot} />
                            <div className="cmn-sub-title3 swap-statement">
                              {val}
                            </div>
                          </Grid>
                        );
                      })}
                    </div>
                    <img src={Arrow} />
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>

        <div className="count-box stack-count">
          <Grid container direction="row" justifyContent="center">
            <Grid
              item
              xs={9}
              sm={8}
              md={8}
              lg={9}
              container
              direction="row"
              className="count-list count-margin"
            >
              {list.map((data, index) => {
                return (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    className={`count-cards ${index !== 2 && "border-card"}`}
                  >
                    <div className="count-number hyperswap-count ">
                      {data.count}
                    </div>
                    <div className="count-name hyperswap-subcount ">
                      {data.name}
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </div>
        <Grid container direction={'row'} justifyContent='center'>
          <Grid
            item
            xs={8}
            md={9}
            sm={9}
            lg={9}
            className="info-wrap stack-statement"
            container
            direction={"column"}
            justifyContent="center"
          >
            <div className="cmn-title5">
              Enjoy greater returns on the most favourite assets with the added
              feasibility of a secured infrastructure governing the locked
              liquidity in the protocol. Spherium changing the concept of
              chain-restrictive staking through its Cross-Chain Multi-Fold
              Staking application
            </div>
          </Grid>
        </Grid>

        <Grid container xs={12} className="Lastwrapper">
          <Grid item xs={5}></Grid>

          <Grid item xs={7}></Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        className="every-margin"
      >
        <Grid item xs={10}>
          <div className="swap-trade-hyperstake">
            <Grid
              item
              xs={9}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid
                item
                xs={10}
                md={8}
                className="swap-mobile-hyperstake stack-mobile"
              >
                <div className="cmn-title2 stacktoken-mob">
                  <b className="font-color">HyperStake</b> can be activated and
                  engaged by enterprising projects by simply filling the below
                  form and reach out to team
                </div>
                <div className="cmn-sub-title6 Content2Mobile">
                  Apply for Token whitelisting
                </div>
              </Grid>
            </Grid>
          </div>
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

export default HyperStack;
