import React from 'react';

import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import "./partnerShip.scss"

import Au21 from "../../assets/image/partnerships/AU21_Capital.png"
import BasicsVentures from "../../assets/image/partnerships/BasicsVenturesBasicsCapitalé.png"
import Block from "../../assets/image/partnerships/Block.png"
import ChronosVentures2 from "../../assets/image/partnerships/ChronosVentures2.png"
import CSPDao from "../../assets/image/partnerships/CSPDao.png"
import DCI from "../../assets/image/partnerships/DCI.png"
import ExnetworkCapital from "../../assets/image/partnerships/ExnetworkCapital.png"
import Gate_Io from "../../assets/image/partnerships/Gate_Io.png"
import GBIC from "../../assets/image/partnerships/GBIC.png"
import InclusionCapital from "../../assets/image/partnerships/InclusionCapital.png"
import LDCapital from "../../assets/image/partnerships/LDCapital.png"
import LysitheaVentures from "../../assets/image/partnerships/LysitheaVentures.png"
import NGCVentures from "../../assets/image/partnerships/NGCVentures.png"
import PetrockCapital from "../../assets/image/partnerships/PetrockCapital.png"
import RarestoneCapital from "../../assets/image/partnerships/RarestoneCapital.png"
import SL2_Capital from "../../assets/image/partnerships/SL2_Capital__1_-removebg.png"
import Swissfounders from "../../assets/image/partnerships/Swissfounders.png"
import T3E from "../../assets/image/partnerships/T3E.png"
import TitanVentures from "../../assets/image/partnerships/TitanVentures.png"
import TwinApex1 from "../../assets/image/partnerships/TwinApex1.png"
import Wolfedge_Capital from "../../assets/image/partnerships/Wolfedge_Capital__1_-removebg.png"


import PlusJakartaSansRegular from "../../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf"
const PartnerSection = styled.div`

border-radius: 16px;
    display: flex;
    justify-content: center;
    margin: 4rem 1rem 8rem 1rem;
`

const PartnerWrapper = styled.div`
display:flex;
flex-direction:column;
background: #FFFFFF05;
padding: 3rem 7rem;
border-radius: 20px;
margin : 3rem 7rem;

`

const UpperSection = styled.div`
display:flex;
justify-content:center;

`
const PartnerTitle = styled.div`
font-family: 'PlusJakartaSansRegular';
src: url(${PlusJakartaSansRegular}) format('ttf');
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 64px;
margin-bottom: 2rem;
/* identical to box height, or 133% */


/* Main white */

color: #D0D4DE;



`
const LowerSection = styled.div`

display:flex;
justify-content: center;
flex-wrap: wrap;


`
const Eachsection = styled.div`
width:width: 150px;
margin: 10px
background: rgba(255, 255, 255, 0.1);
border-radius: 10px;
`

const Partnerimg = styled.img`
width:177px;

`

const Emptysection = styled.div`


`
const Partners = () => {
  const partnerImages = [


    { img: Au21 },
    { img: BasicsVentures },
    { img: Block },
    { img: ChronosVentures2 },

    { img: CSPDao },
    { img: DCI },
    { img: ExnetworkCapital },
    { img: InclusionCapital },

    { img: LDCapital },
    { img: LysitheaVentures },

    { img: NGCVentures },
    { img: PetrockCapital },

    { img: RarestoneCapital },
    { img: SL2_Capital },
    { img: Swissfounders },
    { img: T3E },
    { img: TitanVentures },
    { img: TwinApex1 },
    { img: Wolfedge_Capital },
    { img: Gate_Io },
    { img: GBIC },



  ]
  return (
    <div className='partner-container'>
      <div className='sub-partner'>
        <div className='PartnerTitle'>
          Backed by
        </div>
        <div className='backed-logo'>
          <Grid xs={10} sm={9} md={10} lg={10} spacing={2} container direction={'row'} justifyContent='space-between' >
            {partnerImages.map((data) => {
              return (
                <Grid container xs={5.5} sm={2.5} md={2.5} lg={2.7} className='partner-logo-landing'>
                  <img className='Partnerimg' src={data.img} />
                </Grid>

              )
            })}


          </Grid>
        </div>
      </div>

      {/* <PartnerSection>
        <PartnerWrapper>
          <UpperSection>

            <PartnerTitle>
              Our partners
            </PartnerTitle>

          </UpperSection>
          <LowerSection>

            <Eachsection>
              <Partnerimg src={AdlunamLogo} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Anypad} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Brokoli_logo} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={HYFI} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={hypersign_black_transparent_rect} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Supra} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={StorytokenLogo} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Anypad} />
            </Eachsection>
            <Eachsection>
              <Partnerimg src={Anypad} />
            </Eachsection>



          </LowerSection>




        </PartnerWrapper>




      </PartnerSection> */}

    </div >
    //   <div className="partnersContainer">
    //       <div className="container">
    //   <h1>PARTNERS</h1>
    //   <div className="col-lg-12">
    //     <div className="row align-items-center">
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-1.png`}
    //           alt=""
    //           width={'40%'}
    //           className="img-fluid"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Partnerships-logo-2.png`}
    //           alt=""
    //           className="img-fluid"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/adlunam-logo-colour-2.png`}
    //           alt=""
    //           width={'40%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center">
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/ANYPAD-LOGO.svg`}
    //           alt=""
    //           width={'25%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/BROKOLI.png`}
    //           alt=""
    //           width={'40%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/blockius.png`}
    //           alt=""
    //           width={'40%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/GAMERSE.png`}
    //           alt=""
    //           width={'30%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center">
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/POLKALLY.svg`}
    //           alt=""
    //           width={'40%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/story.png`}
    //           alt=""
    //           width={'40%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/SUPRAORACLES.svg`}
    //           alt=""
    //           width={'40%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/attack-wagon-logo.png`}
    //           alt=""
    //           width={'30%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center">
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/backed.png`}
    //           alt=""
    //           width={'30%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/BitLiberte.svg`}
    //           alt=""
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/Hyfi1.png`}
    //           alt=""
    //           width={'40%'}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center" style={{borderRight: '2px solid rgba(255, 255, 255, 0.1)'}}>
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/hypersign.png`}
    //           alt=""
    //           style={{filter: 'invert(1)', width: '70%'}}
    //           className="partner-img"
    //         />
    //       </div>
    //       <div className="col-lg-3 d-flex justify-content-center">
    //         <img
    //           src={`${process.env.PUBLIC_URL}/images/Partnerships-logos/lockness.png`}
    //           alt=""

    //           className="partner-img"
    //         />
    //       </div>

    //     </div>
    //   </div>
    //   </div>
    // </div>
  );
};

export default Partners;