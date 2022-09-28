import react from "react";
import Grid from "@mui/material/Grid";
import Rect from "../../assets/image/profiles/rect.svg";
import Popular1 from "../../assets/image/Blog/popular1.svg";
import Popular2 from "../../assets/image/Blog/popular2.svg";
import Popular3 from "../../assets/image/Blog/popular3.svg";
import Popular4 from "../../assets/image/Blog/popular4.svg";
import Popular5 from "../../assets/image/Blog/popular5.svg";
import Popular6 from "../../assets/image/Blog/popular6.svg";

import ANYPAd from "../../assets/image/products1/Anypad.png";
import Brokoli from "../../assets/image/products1/AtackWagon.png";
import HYFI from "../../assets/image/products1/Backed.png";
import hypersign from "../../assets/image/products1/BBA.png";
import logoblack from "../../assets/image/products1/Bitliberte.png";
import StorytokenLogoi from "../../assets/image/products1/storyimage.png";
import supra from "../../assets/image/products1/SupraOracle.png";
import Blockius from "../../assets/image/products1/Blockius.png"
import BPAY from "../../assets/image/products1/BPAY.png"
import CryptoMiners from "../../assets/image/products1/CryptoMiners.png"
import Fantom from "../../assets/image/products1/Fantom.png"
import Forward from "../../assets/image/products1/Forward.png"
import Gamerse from "../../assets/image/products1/Gamerse.png"
import Grayblock from "../../assets/image/products1/Grayblock.png"
import Halbnorn from "../../assets/image/products1/Halborn.png"
import HyperSign from "../../assets/image/products1/HyperSign.png"
import IBA from "../../assets/image/products1/IBA.png"
import LockNess from "../../assets/image/products1/LockNess.png"
import NFFTLogo from "../../assets/image/products1/NFFT-Logo.png"
import Polkaly from "../../assets/image/products1/Polkaly.png"
import Rigel from "../../assets/image/products1/Rigel.png"
import StoryToken from "../../assets/image/products1/StoryToken.png"
import SupraOracle from "../../assets/image/products1/SupraOracle.png"
import UnMarshal from "../../assets/image/products1/UnMarshal.png"
import UnstopableDomains from "../../assets/image/products1/UnstopableDomains.png"
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
// import "./blog.scss";
import "./Partnerlanding.scss"
const PartnerShip = () => {

  const PartnerImg = [
    { img: ANYPAd },
    { img: Brokoli },
    { img: HYFI },
    { img: hypersign },
    { img: logoblack },
    { img: StorytokenLogoi },
    { img: supra },
    { img: Blockius },
    { img: CryptoMiners },
    { img: Fantom },
    { img: Gamerse },
    { img: Grayblock },
    { img: Halbnorn },
    { img: HyperSign },
    { img: IBA },
    { img: LockNess },
    { img: NFFTLogo },
    { img: Polkaly },
    { img: Rigel },


    { img: UnMarshal },
    { img: UnstopableDomains },






  ]
  const profileList = [
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
    {
      date: "July 5, 2022",
      header:
        "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
      profile: Popular1,
      sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
    },
  ];
  const openList = [
    { name: "All" },
    { name: "NFT" },
    { name: "DeFi" },
    { name: "Blockchain" },
    { name: "Gamefi" },
    { name: "Data providers" },
    { name: "Payments" },
    { name: "Launchpad" },
    { name: "Software/platforms" },
  ];
  return (
    <div className="career-whole-container">

      <Grid
        item
        xs={12}

        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="career-Container  career-tops"
      >
        <Grid item xs={10} lg={5} className="career-header">
          Mainstreaming DeFi with one cohort at a time

        </Grid>
        <Grid item xs={10} className="career-description">
          <div className="partner-in-content">
            Interested to join the revolution? <u>Signup here</u>

          </div>
        </Grid>
      </Grid>
      <div className="IntegrateEVM blog-bg ">
        <Grid
          item
          xs={12}
          lg={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="partner-blog"
        >
          <Grid
            item
            xs={10}
            container
            spacing={2}
            justifyContent="flex-start"
            direction={"row"}
          // className="career-align"
          >
            <Grid item xs={9} sm={12} md={12} className="partner-heading">
              All partners
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={11} className="blog-topics">
              {openList.map((data, index) => {
                return (
                  <Link className={index === 0 ? "link-select" : "link-list"}>
                    {data.name}
                  </Link>
                );
              })}
            </Grid>

          </Grid>
        </Grid>
      </div>
      <Grid
        item
        xs={12}
        lg={12}
        container
        spacing={2}
        display={'flex'}
        flexDirection="row"
        justifyContent={"center"}
      >
        <Grid
          item
          xs={12}
          lg={10}
          className="blog-profiles"
          container
          spacing={2}
          display={'flex'}
          flexDirection="row"
          justifyContent={"center"}
        >
          {PartnerImg.map((data) => {
            return (
              <Grid item xs={5} sm={6} md={6} lg={2.7} className="blog-box-partner">
                <img src={data.img} className="blogs-img" />
              </Grid>
            );
          })}
        </Grid>
      </Grid>

    </div>
  );
};

export default PartnerShip;
