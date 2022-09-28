import "./hyperLaunchNew.scss";
import Grid from "@mui/material/Grid";
import HyperBridgelogo from "../../assets/image/Allinone/Productslogo/hyperbridgenew.svg";
import Hyperlendlogo from "../../assets/image/Allinone/products/Hyperlend.svg";
import Hyperswaplogo from "../../assets/image/Allinone/Productslogo/hyperswapnew.svg";
import Hyperswalletlogo from "../../assets/image/Allinone/Productslogo/hyperwalletnew.svg";
import Hyperstacklogo from "../../assets/image/Allinone/Productslogo/hyperstakenew.svg";
import serverIcon from "../../assets/image/hyperLaunch/serverIcon.svg";
import Stackimage from "../../assets/image/hyperLaunch/Stackimage.svg";
import Mobile from "../../assets/image/hyperLaunch/mobileIcon.svg";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import { Link } from "react-router-dom";

const HyperLaunchs = () => {
  const images = [
    { img: HyperBridgelogo },
    { img: Hyperlendlogo },
    { img: Hyperswaplogo },
    { img: Hyperswalletlogo },
    { img: Hyperstacklogo },
  ];

  const cardList = [
    { description: "Technical support for multi-chain acessibilty" },
    { description: "Free cross-chain bridge support" },
    { description: "Revenue  rebate" },
    {
      description: "Integration in Spherium's suit of cross-chain applications",
    },
    { description: "Marketing collabrations to build  a stronger ecosystem" },
    { description: "Defined  revenue structure" },
  ];

  return (
    <div className="container">
      <div className="world-container">
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="hyper-launch-top"
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={11}
            lg={10}
            className="hyper-main-heading font-color"
          >
            HyperLaunch
          </Grid>
          <Grid item xs={9} sm={10} md={7} lg={5} className="lan-description">
            Empowering, equipping and enabling enterprising projects.
          </Grid>
          <Grid
            item
            xs={11}
            sm={8}
            md={8}
            lg={9}
            className="lan-info-container hyper-launch-intro"
          >
            <div className="lan-info-header font-color">
              Spherium Finance introduces
            </div>{" "}
            an incubation & grant program for Web3 projects to experience
            Cross-Chain Interoperability. A unique, fast and seamless way to
            connect with cross-chain compatible DeFi applications equipped with{" "}
            cross-funcionality
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
      >
        <Grid
          item
          xs={11}
          sm={9}
          md={9}
          lg={9}
          className="blurContainer"
          container
          alignItems={"center"}
          direction="row"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            container
            direction={"row"}
            className="blur-left-view"
          >
            <div className="cmn-title2 hyper-gateway mob-fate-text">
              <b className="font-gradient">HyperLaunch</b> is the gateway for
              the inevitable cross-chain future
            </div>
            <div className="cmn-sub-title2 mob-gatesub">
              Discover the most inclusive set of Cross-chain DApps Pushing
              intercoperability at the forefront of adoption
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className="productRight launch-product-right">
              <div className="product-container">
                {images.map((data) => {
                  return (
                    <div className="each-product">
                      <Link to="/hyperswap">
                        <img src={data.img} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
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
        className="remove-pad"
      >
        <Grid
          item
          xs={11}
          sm={9}
          md={9}
          lg={9}
          container
          spacing={2}
          justifyContent="space-between"
          alignItems={"center"}
          direction={"row"}
          className="mob-view-card desk-marign"
        >
          <Grid item xs={12} sm={6} md={8} className="hyper-start">
            <div className="cmn-title mob-img-title">
              {" "}
              Access to 20+ EVM & Non EVM compatible chains
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="hyper-end">
            <img className="animationImgs" src={Stackimage} />
          </Grid>
        </Grid>

        <Grid
          item
          xs={10}
          sm={9}
          md={9}
          lg={9}
          container
          spacing={2}
          justifyContent="space-between"
          alignItems={"center"}
          direction={"row"}
            className="desk-marign"
        >
          <Grid item xs={12} sm={6} md={4} className="hyper-start">
            <img className="animationImgs" src={serverIcon} />
          </Grid>
          <Grid item xs={12} sm={6} md={8} className="hyper-end">
            <div className="cmn-title mob-img-title">
              {" "}
              Add token utility through 5+ DeFi solutions
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          xs={10}
          sm={9}
          md={9}
          lg={9}
          container
          spacing={2}
          justifyContent="space-between"
          alignItems={"center"}
          direction={"row"}
          className="token-available-image mob-view-card desk-marign"
        >
          <Grid item xs={12} sm={6} md={8} className="hyper-start">
            <div className="cmn-title mob-img-title">
              Token availability on mobile app interface
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="hyper-end">
            <img className="animationImgs" src={Mobile} />
          </Grid>
        </Grid>

        <Grid
          item
          xs={10}
          sm={9}
          md={9}
          lg={10}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
        >
          <Grid
            item
            xs={12}
            className="cads-header info-wrap"
            container
            direction={"column"}
            justifyContent="center"
          >
            <div className="cards-make-hyper">
              How do we look to make an impact through
            </div>
            <div className="font-color card-sub-title">HyperLaunch</div>
          </Grid>
          <Grid
            item
            xs={12}
            className=""
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
                  sm={3.7}
                  md={3.7}
                  lg={3.7}
                  className="hyper-card-view box-title"
                >
                 <div className="laun-det">{data.description}</div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid
          item
          xs={10}
          container
          spacing={2}
          justifyContent="space-between"
          direction={"row"}
          className="launchPad-content"
        >
          <Grid item xs={12} sm={6} md={6} lg={7} className="hyper-start hyperlaunch-defi">
            <div className="cmn-title mob-img-title">
              Be a part of the most unique cohort of projects from DeFi, NFT,
              P2E Launchpad To DAOs
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
            md={6}
            lg={5}
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-end"
            direction={"row"}
            className="hyper-end"
          >
            <Grid item xs={6} sm={6} md={6} lg={6} className='hyperlaunch-defi'>
              <CustomButton btnName={"Apply Here"} icon={Uparrow} />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} className='hyperlaunch-defi'>
              <CustomButton btnName={"Talk to us"} icon={Uparrow} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HyperLaunchs;
