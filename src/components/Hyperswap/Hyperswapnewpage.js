import React from "react";
import "./Hyperswapnewpage.scss";
import Grid from "@mui/material/Grid";
import Uparrow from "../../assets/image/Uparrow.svg";
import Mobile from "../../assets/image/HyperSwap/Mobile.svg";
import Dot from "../../assets/image/HyperSwap/dot.svg";
import CustomButton from "../../commonComponent/Button";
import Layers from "../../assets/image/HyperSwap/Layers.svg";
import Multiple from "../../assets/image/HyperSwap/Multipleperson.svg";
import Single from "../../assets/image/HyperSwap/SinglePerson.svg";
import MobileTop from "../../assets/image/HyperSwap/swap-top.svg";
// import MobileHyperSwap from "../../assets/image/HyperSwap/MobileHyperSwap.svg";
// import Mobilecumbackground from "../../assets/image/HyperSwap/Mobilecumbackgroundimage.svg";
const Hyperswapnewpage = () => {
  const list = [
    { count: "4", name: "Chains Present" },
    { count: "2", name: "Tradable Tokens" },
    { count: "X%", name: "Total Liquidity" },
  ];
  const blist = [
    { title: "High transaction costs" },
    { title: "Secured setlement layer" },
    { title: "Incentivization for liquidity providers" },
  ];

  const swapUsers = [
    {
      title: " HyperSwap for Users",
      icon: Single,
      list: [
        " Swap across tokens and chains with ease",
        " Add liquidity, earn LP tokens, stake them for high APY",
        "Take advantage of the arbitrage opportunity across chains with a cross-chain ecosystem",
      ],
    },
    {
      title: "HyperSwap for Projects",
      icon: Multiple,
      list: [
        "Add your multi-chain token for trade",
        "Enable your liquidity pool and attract more liquidity from users",
        "Activate LP staking for your token in an instant",
      ],
    },
  ];


  return (
    <div className="SwapContainer">
      <div className="TopBackground-swap swap-master">
        <Grid
          container
          item
          xs={11}
          lg={12}
          justifyContent={"flex-start"}
          alignItems={"center"}
          className="SwapPadding-left"
        >
          <Grid
            item
            xs={11}
            sm={7}
            md={7}
            lg={7}
            className="MobileViewAligment"
          >
            <div className="topTitle-hyperswap">
              Injecting the power of  Cross-Chain interoperability{" "}
              in asset swaps
            </div>
            <div className="statement">
              An automate market maker powered Decentralised Exchange
              facilitating  not just assets swaps but chain swaps as
              well.
            </div>
            <CustomButton btnName="hyperswap" width="247" icon={Uparrow} />
          </Grid>
        </Grid>
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
            xs={11} md={11} sm={10} lg={10}
            className="swap-main-head"
            container
            direction="row"
            justifyContent="center"
          >
            <Grid item xs={12} md={11} sm={10} lg={10} className="cmn-title2">
              <b className="Hyperswap-color">HyperSwap</b> is the most simple
              solution to trade, swap & manage digital asset portfolio across
              mainstream EVM compatible chains
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        className="every-margin"
      >
        <Grid item xs={11} sm={9} md={9} lg={9}>
          <div className="swap-trade">
            <Grid
              item
              xs={12}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid
                item
                xs={12}
                md={7}
                className="swap-mobile token-containers"
              >
                <Grid
                  item
                  xs={12}
                  md={9}
                  sm={9}
                  lg={11}
                  className="tokenSize-margin"
                >
                  Token standards available to trade
                </Grid>
                <Grid
                  item={12}
                  container
                  direction={"row"}
                  justifyContent="center"
                >
                  <Grid item xs={12} className="bullet-part bottom-margin">
                    <img src={Dot} />
                    <div className="statements">ERC20 Tokens</div>
                  </Grid>
                  <Grid item xs={12} className="bullet-part bottom-margin">
                    <img src={Dot} />
                    <div className="statements">BEP20 Tokens</div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <div className="count-box every-margin">
        <Grid container direction="row" justifyContent="center">
          <Grid
            item
            xs={12}
            md={12}
            sm={12}
            lg={12}
            className="hyper-swap-chain center-alignment"
          >
            Traded volume
          </Grid>
          <Grid
            item
            xs={11}
            sm={6}
            md={6}
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
          xs={10}
          className="swap-main-head"
          container
          direction="row"
          justifyContent="center"
        >
          <Grid item xs={11} sm={10} md={10} lg={9} className="cmn-title2 swap-proto-mob">
            HyperSwap is an application layer protocol embedded on top of an
            Automated Market Maker algorithm to sustain:
          </Grid>
        </Grid>
        <Grid
          item
          xs={11}
          md={9}
          sm={9}
          lg={9}
          container
          spacing={2}
          justifyContent="space-between"
          alignItems={"center"}
          direction={"row"}
          className="swap-bullet-box"
        >
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            lg={6}
            className="swap-layer"
            container
            direction="row"
          >
            <img className="animat" src={Layers} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={6}
            lg={6}
            className="layer-bullet swap-layer"
            container
            justifyContent={'flex-end'}
            direction="row"
          >
            {blist.map((data) => {
              return (
                <Grid
                  item
                  xs={11}
                  md={9}
                  sm={9}
                  lg={9}
                  className="bullet-part bottom-margin"
                >
                  <img src={Dot} />
                  <div className="statements">{data.title}</div>
                </Grid>
              );
            })}
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
        className="cards-Container"
      >
        <Grid
          item
          xs={10}
          sm={9} md={9} lg={9}
          container
          spacing={2}
          justifyContent="space-between"
          direction={"row"}
        >
          {swapUsers.map((data) => {
            return (
              <Grid
                item
                xs={12}
                sm={5.4}
                md={5.4}
                lg={5.3}
                className="swap-cards"
                container
                spacing={2}
                justifyContent="center"
                direction={"row"}
              >
                <Grid xs={12} className="cmn-title9 users-card">
                  <div>{data.title}</div>
                  <img src={data.icon} />
                </Grid>
                <Grid xs={12}>
                  {data.list.map((val) => {
                    return (
                      <Grid item xs={11} className="bullet-part bottom-margin">
                        <img src={Dot} />
                        <div className="cmn-sub-title8 mob-color">{val}</div>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            );
          })}
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
        <Grid
          item
          xs={11}
          md={9} sm={9} lg={9}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="launchPad-content"
        >
          <Grid item xs={12} sm={6} md={6} className="launchPad-evm">
            <div className="swap-about cmn-title">Learn More About HyperSwap</div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-end"
            direction={"row"}
            className='swap-learn-btn'
          >
            <Grid item xs={12} sm={6} md={6} className="btn-zindex">
              <CustomButton btnName={"Learn Here"} icon={Uparrow} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hyperswapnewpage;
