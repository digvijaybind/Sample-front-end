import React, { useEffect } from "react";
import CountdownTimer from "../Countdown/Countdown";
import Navigation from "../Navigation/Navigation";
import Austronaut from "../../img/austronaut.png";
import Navbackgroundimgae from "../../assets/image/banner/Navback.svg";
import spheriumlogo from "../../assets/image/banner/spheriumlogo.svg";
import Arrowimg from "../../assets/image/banner/Arrow1.svg";
import Animationlogoimg from "../../assets/image/banner/Animationlogo.svg";
import Animationlogo2img from "../../assets/image/banner/Animationlogo2.svg";

import PlusJakartaSansRegular from "../../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf"


import styled from "styled-components";
const NavBackground = styled.div`
  background-image: url(${Navbackgroundimgae});
`;
const NavbackgroundWrapper = styled.div`
  padding: 18px 86px 18px 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Spheriumlogo = styled.img`

width:135px
height:24px;

`;

const NavbarManagenment = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EachBar = styled.div`
cursor:pointer;
font-family: 'Plus Jakarta Sans';
  width: 84px;

  
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  /* identical to box height, or 171% */
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;

  /* Main white */
  color: #5D6774;
  
  :hover {
 
  }
`;
const TextArrow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EnterButtonWrapper = styled.div`
cursor:pointer;
  height: 44px;
  width: 136px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 0px;
  gap: 8px;
  background: rgba(153, 248, 208, 0.1);
  /* Acceent 2 */

  border: 0.7px solid #99f8d0;
  border-radius: 50px;
`;
const EnterText = styled.div`
  width: 74px;
  height: 31px;

  /* Body_02 */
  font-family: 'PlusJakartaSansRegular';
  src: url(${PlusJakartaSansRegular}) format('ttf'),
  font-style: normal;
  font-weight: 400;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  text-align: center;

  /* Main white */

  color: #d0d4de;
`;
const Arrow = styled.img`
  width: 19px;
  height: 21px;
  border: 1.4px solid #99f8d0;
`;

const Animationlogo = styled.div`
  position: relative;
  width: 100%;
  height: 888px;
  background-image: url(${Animationlogo2img});

`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  right:30px
  position: relative;
  
  top: 173px;
`;
const Row1 = styled.div`
  width: 100%;
  color: #D0D4DE;
  max-width: 526px;
  // width: 526px;
  // height: 128px;
  // right: 678px;
  // top: 208px;
  font-family: "Plus Jakarta Sans";

  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
`;
const Row2 = styled.div`
max-width: 550px;
width: 100%;
/* height: 64px; */
font-family: "Plus Jakarta Sans";
font-weight: 500;
line-height: 32px;
padding-top: 84px;
padding-bottom: 32px;
font-size: 18px;
color: #5D6774;
`;

const CrosschainButton = styled.button`
  // width: 247px;
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 153px;


  background: #4770ff;
  box-shadow: -2px -19px 27px -11px rgba(20, 114, 255, 0.45);
  border-radius: 12px;

  padding: 17px 28.5px;
`;
const CrosschainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Crosschain = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  font-family: "Plus Jakarta Sans";
  /* identical to box height, or 160% */

  /* Main white */

  color: #d0d4de;
`;

const Blockchainblock = styled.div`
width:100%;
  height: 182px;
  display: flex;

  align-items: center;

  background: linear-gradient(
    55.26deg,
    rgba(255, 255, 255, 0.1) 28.98%,
    rgba(135, 242, 231, 0.1) 81.29%
  );
  backdrop-filter: blur(104px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  padding: 44px 140px;

  bottom: 51px;
  position: relative;
  left: 27%;
  bottom: 114px;
`;
const BlockchainblockWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 66px;
`;

const EachColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Numberhead = styled.div`
  width: 66px;
  height: 64px;
  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Acceent 2 */

  color: #99f8d0;
`;
const Subhead = styled.div`
  width: 119px;
  height: 28px;

  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  text-align: center;

  /* Main white */

  color: #d0d4de;
`;

const BackgroundWrapper = styled.div`




`
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
 
  color: white;
  background-color: rgba(33,33,33,.6);
  filter:blur(0.5px);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`

  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
  
  }
`;

const SubA = styled.a`
 background-color: rgba(33,33,33,.6);
 
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
   
  }
`;

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBackground>
        <NavbackgroundWrapper>
          <Spheriumlogo src={spheriumlogo} />

          <NavbarManagenment>
            <StyledUl>
              <DropDownLi>
                <Dropbtn onClick={() => this.handleClick("DropDown")}>
                  Spherium Fiance
                </Dropbtn>
                <DropDownContent>
                  {" "}
                  <SubA onClick={() => this.handleClick("Link1")}> Spherium Fiance-Defi Ecosystem</SubA>
                  <SubA onClick={() => this.handleClick("Link2")}>Spherium Labs(AS labs) Acceletor</SubA>
                  <SubA onClick={() => this.handleClick("Link3")}>Spherium Ventures-Coming soon</SubA>
                </DropDownContent>
              </DropDownLi>
              <StyledLi>
                <StyledA onClick={() => this.handleClick("News")}>Home</StyledA>
              </StyledLi>
              <DropDownLi>
                <Dropbtn onClick={() => this.handleClick("DropDown")}>
                  DropDown
                </Dropbtn>
                <DropDownContent>
                  {" "}
                  <SubA onClick={() => this.handleClick("Link1")}>Link 1</SubA>
                  <SubA onClick={() => this.handleClick("Link2")}>Link 2</SubA>
                  <SubA onClick={() => this.handleClick("Link3")}>Link 3</SubA>
                </DropDownContent>
              </DropDownLi>
            </StyledUl>
            <EachBar>Sherium Fianace</EachBar>
            <EachBar>Product</EachBar>
            <EachBar>Docs</EachBar>
            <EachBar>Partners</EachBar>
            <EachBar>About</EachBar>
            <EachBar>Blog</EachBar>
          </NavbarManagenment>
          <EnterButtonWrapper>
            <EnterText>Enter app</EnterText>


          </EnterButtonWrapper>
        </NavbackgroundWrapper>
      </NavBackground>
      <Animationlogo>
        <ContentWrapper className="container">
          <Row1>
            Diversifying <br></br>
            the DeFi Ecosystem
          </Row1>
          <Row2>
            By introducing of cross-chain interoperability in everything{" "}
            <br></br>
            Hyper for Defi 2.0 Defragmented
          </Row2>
          <CrosschainButton>
            <CrosschainWrapper className="container">
              <Crosschain>Cross chain world</Crosschain>
            </CrosschainWrapper>
          </CrosschainButton>
        </ContentWrapper>
      </Animationlogo>
      <Blockchainblock>
        <BlockchainblockWrapper>
          <EachColumn>
            <Numberhead>04</Numberhead>
            <Subhead>Blockchains</Subhead>
          </EachColumn>

          <EachColumn>
            <Numberhead>15+</Numberhead>
            <Subhead>Partners</Subhead>
          </EachColumn>

          <EachColumn>
            <Numberhead>20+</Numberhead>
            <Subhead>Backers</Subhead>
          </EachColumn>

          <EachColumn>
            <Numberhead>80k+</Numberhead>
            <Subhead>Community</Subhead>
          </EachColumn>
        </BlockchainblockWrapper>
      </Blockchainblock>
    </>

    // <div>
    //   <section className="bannersvg-wrapper">
    //     <div className="col-12 col-md-12 col-lg-12 p-0">
    //       <div className="bannerbottom">
    //         <div className="bottom-statics">
    //           <div className="row" style={{ justifyContent: "space-evenly" }}>
    //             <div>
    //               <div className="leftdivbg">
    //                 <h2>
    //                   Buy
    //                   <span> $SPHRI</span> Here
    //                 </h2>
    //               </div>
    //             </div>
    //             <div>
    //               <div className="rightdivbg">
    //                 <a
    //                   href="https://www.gate.io/trade/sphri_usdt"
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                 >
    //                   <img
    //                     src={`${process.env.PUBLIC_URL}/images/gateio-logo.svg`}
    //                     alt=""
    //                     className="img-fluid"
    //                   />
    //                 </a>

    //                 <a
    //                   href="https://v2.info.uniswap.org/pair/0xfc221e168dc56cda3deea3108760df13766280b6"
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                 >
    //                   <img
    //                     src={`${process.env.PUBLIC_URL}/images/uniswap-logo.svg`}
    //                     alt=""
    //                     className="img-fluid"
    //                   />
    //                 </a>

    //                 <a
    //                   href="https://pancakeswap.finance/info/pool/0x31eded84f47458941f7b25c27fe96a923fdd38ac"
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                 >
    //                   <img
    //                     src={`${process.env.PUBLIC_URL}/images/pancake.svg`}
    //                     alt=""
    //                   />
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <Navigation />

    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div
    //           className="col-12 col-md-6 col-lg-6"
    //           style={{ marginBottom: 20 }}
    //         >
    //           <div className="bannerinfoleft">
    //             <div className="bannerTitlewrapper">
    //               <h1 className="bannerTitle">
    //                 Diversifying The <br /> <mark>DeFi</mark> Ecosystem
    //               </h1>
    //               <p className="bannerSubtitle">
    //                 By introducing cross-chain interoperability in everything{" "}
    //                 <b>Hyper for Defi 2.0!</b>
    //               </p>
    //               <CountdownTimer />
    //             </div>
    //             <img
    //               src={Austronaut}
    //               alt="austronaut"
    //               style={{ paddingBottom: 60 }}
    //             />
    //           </div>
    //         </div>{" "}
    //         <div className="starrybanner d-flex">
    //           <div className="row sub-row">
    //             <div className="starryBannerRow">
    //               <h1>5</h1>
    //               <p>Blockchains</p>
    //             </div>
    //             <div className="starryBannerRow">
    //               <h1>25+</h1>
    //               <p>Partners</p>
    //             </div>
    //             <div className="starryBannerRow">
    //               <h1>20+</h1>
    //               <p>Backers</p>
    //             </div>
    //             <div className="starryBannerRow">
    //               <h1>80k+</h1>
    //               <p>Community</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Banner;
