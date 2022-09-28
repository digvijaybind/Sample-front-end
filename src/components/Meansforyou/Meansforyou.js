import React from "react";
import "./meansforyou.scss";
import { Link } from "react-router-dom";
import SomeImage from "../../img/someimage.svg";
import Banner from "../../img/ethBnbBanner.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Meansforyou = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <section className="meansforyou-wrapper">
      <div className="container" style={{ padding: "70px 200px 0 190px" }}>
        <div className="col-lg-12">
          <div className="mfuSubwrapper">
            <h3>Introducing Everything</h3>
            <h1>Hyper</h1>

            <div className="carouselinews-mask">
              <OwlCarousel className="owl-theme innews-carousel" {...options}>
                <div class="item">
                  <div className="newsblog-wrapper">
                    <p>
                      <b>HyperBridge</b> <br />
                      Discover a Multi Chain Bridge enabling instant bridging of
                      tokens between interoperable EVM and Non-EVM compatible
                      blockchains, secured in the most dynamic and flexible
                      mechanism to support Institutions and Users.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div className="newsblog-wrapper">
                    <p>
                      <b>HyperSwap</b> <br />A native built Decentralized
                      Cross-Chain Asset Swap protocol coupled up with
                      functionality of automated market maker, multi-chain pool
                      accessibility, interoperable blockchain architecture of L1
                      & L2s to fulfill trade requests.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div className="newsblog-wrapper">
                    <p>
                      <b>HyperLend</b> <br />
                      Modernising the banking systems through a decentralised
                      borrowing and lending protocol that will allow investors
                      to collateralise digital assets, borrow digital assets
                      where interest rates will depend on the law of supply and
                      demand.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div className="newsblog-wrapper">
                    <p>
                      <b>HyperWallet</b> <br />
                      Connecting the entire Spherium product line with
                      everything “DeFi”, cross chain wallet will not only ease
                      the process of managing several digital assets in one
                      place but will enable in-built Cross-Chain token-swap,
                      Staking, Dual Farms, Lending/Borrowing, Vaults, Escrow
                      protocols and Accessibility.
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="col-lg-12 mt-5">
            <div className="row" style={{ gap: 17 }}>
              <div className="singleMeansWrapper col-lg-3">
                <img src={SomeImage} alt="img" />
                <p>Hyper</p>
                <h1>Lend</h1>
              </div>
              <div className="singleMeansWrapper col-lg-3">
                <img src={SomeImage} alt="img" />
                <p>Hyper</p>
                <h1>Swap</h1>
              </div>
              <div className="singleMeansWrapper col-lg-3">
                <img src={SomeImage} alt="img" />
                <p>Hyper</p>
                <h1>Wallet</h1>
              </div>
              <div className="singleMeansWrapper col-lg-2">
                <p>
                  More Projects
                  <br /> Landing Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="supported-blockchains">
        <div className="supported-blockchains-wrapper m-auto">
          <h3>Supported Interoperable Blockchains </h3>
          <h1>Ethereum, Binance, Polygon, Avalanche, Arbitrum</h1>
        </div>
      </div>
    </section>
  );
};

export default Meansforyou;
