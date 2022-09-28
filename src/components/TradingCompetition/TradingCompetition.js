import React, { useEffect } from "react";
import "./trading.scss";
import { Link } from "react-router-dom";
import video from "../../img/iphone_giveaway.mp4";
const TradingCompetition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="contentwrapper">
      <div className="center">
        <div className="upperSection">
          <video loop autoPlay id="trading" muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <div className="bannerright">
            <h2>
              A <span>Dex Trading Competition</span> Like No Other
            </h2>
            <h5>
              Fostering Decentralized Trade Habits, <br /> Spherium brings the
              Biggest $SPHRI Giveaway Ever
            </h5>
            <span className="mainButton">
              <a
                href="https://pancakeswap.finance/swap?inputCurrency=0x8ea93d00cc6252e2bd02a34782487eed65738152&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56"
                target="_blank"
              >
                Enter $SPHRI Dex Trading Competition
              </a>
            </span>
          </div>
        </div>
        <div className="bottomSection">
          <div className="bottomContent">
            <div>
              <p className="giveawayTitle">
                Biggest <b>$SPHRI</b> Giveaway
              </p>
              <div className="giveawaySubtitle">
                <span className="ruleText">
                  Follow Just A Simple Rule <br /> Trade $100 worth $SPHRI or
                  more on
                </span>
                <span className="pancakeImg">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/pancake.svg`}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="iphoneText">
              <p>Win An Iphone SE3</p>
            </div>
          </div>
          <div className="imgOuterWrapper">
          <div className="imgInnerWrapper">
            <img src={`${process.env.PUBLIC_URL}/images/iphone.png`} alt="" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingCompetition;
