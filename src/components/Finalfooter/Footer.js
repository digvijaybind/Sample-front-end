import React from "react";
import Googleplayimg from "../../assets/Googleplay.svg";
import Applestoreimg from "../../assets/Applestore.svg";
import Facebook from "../../assets/image/Facebook.svg";
import Instagram from "../../assets/image/Insta.svg";
import Email from "../../assets/image/Email.svg";
import Likedin from "../../assets/image/Lin.svg";
import Twitter from "../../assets/image/Twitter.svg";
import spheriumlogo from "../../assets/image/banner/spheriumlogo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import "./Footer.css";



const DownlaodMobileWrapper = styled.div`
  display: flex;
  justify-content: flex-startTransition;
  flex-direction: column;
`;
const DownloadHead = styled.div`
  color: #d0d4de;
`;
const Mobilehead = styled.h2`
  background: #7afbe4;
  background: linear-gradient(to right, #7afbe4 0%, #4a54f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Descripation = styled.h5`
  margin: 1rem 0;
  color: #5d6774;
  width: 80%;
  line-height: 30px;
`;
const StoreWrapper = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 40% 40%;
`;


const Footer = () => {

  const footerList = [
    {
      title: "Products",
      list: [
        { MenuName: "Hyperswap", path: "/hyperswap" },
        { MenuName: "Hyperlend", path: "/hyperlend" },
        { MenuName: "Hyperstaking", path: "/hyperstake" },
        { MenuName: "Cross chain Bridge", path: "/hyperbridge" },
        { MenuName: "Spherium Wallet", path: "/wallet" }
      ],
    },
    {
      title: "Quick Link",
      list: [{ MenuName: "Home", path: "/" }, { MenuName: "Aboutus", path: "/about" }, { MenuName: "Blog", path: "/blog" }, { MenuName: "Careers", path: "/careers" }, { MenuName: "FAQs", path: "/faq" }],
    },
    {
      title: "Developers",
      list: [{ MenuName: "Documentation", path: "" }],
    },
    {
      title: "Support",
      list: [{ MenuName: "Terms of use", path: "" }, { MenuName: "Privacy policy", path: "" }, { MenuName: "Media Kit", path: "" }, { MenuName: "Contact us", path: "" }],
    },
  ];
  return (
    <div className="FooterContainer">
      <div className="FooterWrapper">
        <div className="leftFooter">
          <DownlaodMobileWrapper>
            <DownloadHead className="spherium-dwn">
              Download Spherium
            </DownloadHead>
            <Mobilehead className="spherium-dwn spherium-footer-font">mobile wallet</Mobilehead>
          </DownlaodMobileWrapper>
          <Descripation className="des-ff">
            Swap, Lend, Buy, Transfer, Bridge and Provide Liquidity in Pools In
            Just A Single Tap
          </Descripation>

          <StoreWrapper>
            <Link>
              {" "}
              <img className="showImages" src={Googleplayimg} />
            </Link>
            <Link>
              <img className="showImages" src={Applestoreimg} />
            </Link>
          </StoreWrapper>
        </div>
        <div className="FooterRightContainer">
          <Grid
            item
            xs={12}
            sm={12}
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            flexDirection={"row"}
            className="footerList"
          >
            {footerList.map((data) => {
              return (
                <Grid item xs={6} lg={3}>
                  <div className="f-title">{data.title}</div>
                  {data.list.map((val) => {
                    return (
                      <div>
                        {val.path.includes("https") ?
                          <a href={val.path} className="listItems">
                            {val.MenuName}
                          </a>
                          :
                          <Link to={val.path} className="listItems">
                            {val.MenuName}
                          </Link>}

                      </div>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
          <div></div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="bottom-first">
          <div className="showLogo">
            <img src={spheriumlogo} />
          </div>
          <div className="copyrightText">
            <div>© 2022 Copyright and rights reserved</div>
          </div>
        </div>
        <div className="iconList-footer">
          <a href="https://www.facebook.com/people/SpheriumFinance/1000761596342"> <img className="iconListimg" src={Facebook} /></a>
          <a href="https://www.instagram.com/spherium.finance/">     <img className="iconListinsta" src={Instagram} /></a>
          <a href="mailto: contact@spherium.finance">    <img className="iconListimg" src={Email} /></a>
          <a href="https://www.linkedin.com/company/spherium/mycompany/">   <img className="iconListimg" src={Likedin} /></a>
          <a href="https://twitter.com/spheriumfinance?s=21">      <img className="iconListimg" src={Twitter} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
