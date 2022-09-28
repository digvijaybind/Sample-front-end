import React, { useEffect } from "react";
import styled from "styled-components";
import Binancelogo from "../../assets/image/support/binance.svg";
import Avanlanchelogo from "../../assets/image/support/Avanlanche.svg";
import Polygonlogo from "../../assets/image/support/Polygon.svg";
import Ethernumlogo from "../../assets/image/support/Ethernum.svg";
import Cominglogo from "../../assets/image/support/Comingsoon.svg";
import Grid from "@mui/material/Grid";
import './Support.scss';

const SupportConatiner = styled.div`
  background: rgba(0, 0, 0, 0.63);
  padding: 10px
`;
const SupportWrapper = styled.div`
  // display: grid;
  // grid-template-columns: 40% auto;
  // grid-gap: 180px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const SupportInteroperateContain = styled.div`
  // padding-left: 5rem;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
 
  /* or 150% */

  /* Main white */

  color: #d0d4de;
  @media screen and (min-width: 200px) and (max-width: 650px){
    font-size: 12px !important;


  }
`;
const Eachbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  height: 44px;

  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
`;
const EachbarWrapper = styled.img``;

const Supportblock = () => {
  const images = [
    { img: Binancelogo },
    { img: Avanlanchelogo },
    { img: Polygonlogo },
    { img: Ethernumlogo },


  ]
  return (
    <SupportConatiner>
      <Grid item xs={12} md={12} sm={12} lg={12} container direction={'row'} justifyContent={'center'} alignItems={'center'} className='support-box' >
        <Grid item xs={12} md={9} sm={9} lg={9} container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Grid item xs={12} md={5} sm={5} lg={5} container direction={'row'} justifyContent={'flex-start'}>
            <SupportInteroperateContain>
              Supported Interoperable Blockchains
            </SupportInteroperateContain>
          </Grid>
          <Grid item xs={9} md={7} sm={7} lg={7} container direction={'center'} justifyContent={'flex-end'}
            className="SecuritySection">
            {images.map((data) => {
              return (
                <Grid xs={5} md={2.2} sm={2.2} lg={2.2} className="block-img">
                  <img src={data.img} />
                </Grid>
              )

            }
            )}


          </Grid>
        </Grid>
      </Grid>

    </SupportConatiner>
  );
};

export default Supportblock;
