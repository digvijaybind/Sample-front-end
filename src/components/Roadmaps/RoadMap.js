import React from "react";
import Roadmap from "../../assets/image/Roadmap.svg";
import Ellipse from "../../assets/image/Ellipse.svg";
import RoadImage from "../../assets/image/test.png";
import MiddleRoadmap from "../../assets/image/banner/MiddleRoadmap.svg";
import MobileRoadmap from "../../assets/image/roadmap/Mobileroadmap.svg"
import Mobileroadmapcenter from "../../assets/image/roadmap/mobileroadmapcenter.svg"
 
import { Grid } from "@mui/material";

import "./RoadMap.css";

const RoadMap = () => {
    return (
        <Grid item xs={12} md={9} sm={9} className="roadContainer">
            {/* <div > */}
            <div className="leftSide">
                <div className="boxView showrighttop">
                    <div>
                        <img className="ellipseImg" src={Ellipse} />
                        <div className="">Q2- 2022</div>
                    </div>
                    <div className="Roadmapsubtitle">HyperBridge Polygon &Avalanche integration </div>
                    <div className="Roadmapsubtitle"> HyperStake build initiation</div>
                    <div className="Roadmapsubtitle">On-chain KYC</div>
                    <div className="Roadmapsubtitle">Fiat on and of ramp</div>


                </div>
                <div className="boxView showRightTab">
                    <div>

                        <div className="road-titles">Q4 - 2022</div>
                    </div>
                    <div className="Roadmapsubtitle">HyperLend Mainnet launch</div>
                    <div className="Roadmapsubtitle">Govername Token launch</div>
                    <div className="Roadmapsubtitle">Non-EVM solutions and L1s
                        integrations</div>
                    <div>Mobile App integration
                        expansion</div>

                </div>
            </div >
            <div className="imageGrid">
                <div className="containers">
                    <img src={Roadmap} className="image1 desk-view" />
                    <img className="image2  desk-view" src={MiddleRoadmap} />
                    <img src={MobileRoadmap} className="image1  mob-view" />
                    <img className="image2b mob-view" src={Mobileroadmapcenter} />
                    {/* <img src={RoadImage} /> */}
                </div>
            </div>
            <div className="rightSide">
                <div className="boxView showPosition">
                    <div>

                        <div>Q1 - 2022</div>
                    </div>
                    <div className="Roadmapsubtitle">$SPHRI Launch on PCs</div>
                    < div className="Roadmapsubtitle">Bridge integration on BSC-ETH</div>
                    <div className="Roadmapsubtitle">Mob V 1.0 beta</div >
                    <div className="Roadmapsubtitle">Avalanche integration on Bridge</div>
                    <div className="Roadmapsubtitle">Polygon integration on Bridge</div>
                </div>
                <div className="boxView showTabposition">
                    <div>

                        <div className="road-titles">Q3 - 2022</div>
                    </div>
                    <div className="Roadmapsubtitle">HyperSwap Mainnet launch</div>
                    <div className="Roadmapsubtitle">HyperStake Mainnet launch</div>
                    <div className="Roadmapsubtitle">Alpha platform release</div>
                    <div className="Roadmapsubtitle">Mobile app cross chain and
                        AMM public beta </div>
                    <div cl assName="Roadmapsubtitle">Non-EVM solutions and L1s
                        integrations</div>
                </div>
            </ div>
            {/* </div> */}
        </Grid>
    );
};

export default RoadMap;
