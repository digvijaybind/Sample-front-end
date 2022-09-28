
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PlusJakartaSansRegular from "../../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf";
import './media.scss';
const Mediawrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 3rem 0 3rem;
  justify-content: center;
  padding-bottom: 7rem;
  align-items: center;
`;
const MediaRow1 = styled.div`
  display: flex;
  justify-content: center;
`;
const MediaRow1Content1 = styled.div`
font-family: PlusjakartaSans;

  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  /* identical to box height */
margin-bottom: 1.4rem;
  text-align: center;
  letter-spacing: 3.5px;
  text-transform: uppercase;

  /* Acceent 2 */

  color: #99f8d0;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans !important;
    font-size: 1rem;
    line-height: 14px;
    /* identical to box height */
  margin-bottom: 1.4rem;
    text-align: center;
    letter-spacing: 3.5px;
    text-transform: uppercase;
  
    /* Acceent 2 */
  
    color: #99f8d0;
  }



`;
const MediaRow2 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
const MediaRow2Content = styled.div`
font-family: PlusjakartaSans;
width: 
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height, or 138% */

  text-align: center;
  width:60%;
  /* Main white */

  color: #d0d4de;
  @media (max-width: 650px) {
    font-family: PlusjakartaSans;

    font-weight: 700;
    font-size: 2rem;
    line-height: 44px;
    /* identical to box height, or 138% */
  
    text-align: center;
  
    /* Main white */
  
    color: #d0d4de;
  }
`;

const MediaRow3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const EachCard = styled.div`
  right: 732px;
  top: 4934px;
  font-family: PlusjakartaSans;
  border-radius: 16px;
  padding: 10px 15px;
  border:1px solid #5e5959;
  :hover {
    background: linear-gradient(
      34.88deg,
      rgba(255, 255, 255, 0.08) 10.99%,
      rgba(135, 242, 231, 0.08) 91.81%
    );
  }
  margin: 5px 10px;
  
@media only screen and (max-width:1280px){
  // padding:0px !important;
  
  }
`;
const EachCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Date = styled.div`
font-family: PlusjakartaSans;
margin-bottom: 0.7rem;
  font-weight: 600;
  font-size: 9px;
  line-height: 20px;
  /* identical to box height, or 222% */

  letter-spacing: 1px;
  text-transform: uppercase;

  /* Text color */

  color: #5d6774;
`;
const NewsTitle = styled.div`
height: 131px;
font-family: PlusjakartaSans;
margin-bottom: 0.7rem;

  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  /* Main white */

  color: #d0d4de;
  @media only screen and (max-width:1280px){
   font-size:1rem !important;
    
    }
`;
const NewsDescripation = styled.div`
height: 150px;
font-family: PlusjakartaSans;
margin-top: 0.7rem;

  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  /* or 175% */

  /* Text color */

  color: #5d6774;
  @media only screen (max-width:768px){

    
    font-size: 0.6rem;
  }
`;
const Media = () => {
  const blogList = [

    {
      date: "July 5, 2022",
      header:
        "Spherium Finance unveils a cross-chain incubation and grant program",

      sub: " Spherium, a decentralized finance (DeFi) platform that offers a complete suite of financial services comprising a universal wallet, token swap platform, automated",
      link: "https://cointelegraph.com/press-releases/spherium-finance-unveils-a-cross-chain-incubation-and-grant-program",
    },
    {
      date: "July 5, 2022",
      header: "31 Top Singapore Financial Exchanges Companies and Startups",

      sub: "This article showcases our top picks for the best Singapore based Financial Exchanges companies. These startups and companies are taking a variety of approaches to innovating ",
      link: "https://beststartup.asia/31-top-singapore-financial-exchanges-companies-and-startups/",
    },
    {
      date: "July 5, 2022",
      header: "Spherium Finance Receives Third Place In DoraHacks Binance Smart Chain Hackathon",

      sub: "In the recently concluded DoraHacks' Hackathon, Spherium emerged 3rd among the elite competition. The protocol announced their award-winning final",
      link: "https://www.bsc.news/post/spherium-finance-receives-third-place-in-dorahacks-binance-smart-chain-hackathon?utm_campaign=meetedgar&utm_medium=social&utm_source=meetedgar.com",
    },
    {
      date: "July 5, 2022",
      header: "Augmenting a New MultiChain Gateway With Blockius",

      sub: "The existing DeFi framework is plagued with issues in the areas of Token minting, Token vesting, LP Token lock, IDO structure, staking events, and many more. ",
      link: "https://medium.com/spherium-finance/augmenting-a-new-multichain-gateway-with-blockius-b8bc7d97ed6f",
    }
  ];
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {

          duration: 0,

        },
        opacity: 1,
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <>
      <Mediawrapper>
        <MediaRow1 >
          <MediaRow1Content1 className="media-content">Media And Publications</MediaRow1Content1>
        </MediaRow1>

        <MediaRow2  >
          <MediaRow2Content className="cmn-title media-cover">Check out the latest coverage of
            Spherium Finance across major publications.</MediaRow2Content>
        </MediaRow2>
        <MediaRow3 >
          <Grid item xs={12} sm={12} md={12} lg={12} container direction='row' justifyContent="center">
            <Grid item xs={12} md={9} sm={9} lg={9} container direction='row' justifyContent="space-between">
              {blogList.map((data, index) => {
                return (
                  <Grid item xs={12} md={2.8} sm={2.8} lg={2.8}>
                    <EachCard>
                      <EachCardWrapper>
                        <Date>{data.date}</Date>
                        <NewsTitle>
                          {data.header}
                        </NewsTitle>
                        <NewsDescripation>
                          {data.sub}

                        </NewsDescripation>
                        <div className="read-link">
                          <a href={data.link}>Read More</a>
                        </div>
                      </EachCardWrapper>
                    </EachCard>
                  </Grid>
                )
              })}
            </Grid>

          </Grid>


        </MediaRow3>
      </Mediawrapper>
    </>
  );
};

export default Media;
