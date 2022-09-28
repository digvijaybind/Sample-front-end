import react from "react";
import Grid from "@mui/material/Grid";
import Laptop from "../../assets/image/aboutUs/laptop.svg";
import Mobile1 from "../../assets/image/aboutUs/mob1.svg";
import Profile1 from "../../assets/image/profiles/profile1.svg";
import Profile2 from "../../assets/image/profiles/profile2.svg";
import LinkedIn from "../../assets/image/aboutUs/lin.svg";

import "./about.scss";
import CustomButton from "../../commonComponent/Button";
// import "./hyperLaunchNew.scss";

const AboutUs = () => {
    const profileList = [
        {
            designation: "CEO. Co-Founder",
            name: "Aanchal Thakur",
            profile: Profile1,
        },
        { designation: "COO, Co.Founder", name: "Sash Jeetun", profile: Profile2 },
    ];
    return (
        <div className="about-whole-container">
            <Grid
                item
                xs={12}
                md={12}
                sm={12}
                lg={12}
                container
                spacing={2}
                justifyContent="center"
                direction={"row"}
                className="header-Container"
            >
                <Grid
                    item
                    xs={12}
                    md={7}
                    sm={7}
                    lg={7}
                    className="about-header font-color"
                >
                    About Us
                </Grid>
                <Grid item xs={10} md={9} sm={9} lg={9} className="about-description">
                    <div className="cmn-sub-title4">
                        An all-in-one DeFi protocol that empowers the cross-chain community
                        with a suite of DeFi applications fully compatible with major EVM
                        chains, including a Bridge, Universal Wallet, Token Swap platform,
                        Money Markets, Staking services, Lending/Borrowing protocol, and
                        inter-blockchain liquidity transfer.
                    </div>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                container
                spacing={2}
                justifyContent="center"
                direction={"row"}
                className="info-evm-Container misabout-Container mobile-margin"
            >
                <Grid
                    item
                    xs={10}
                    md={9} sm={9} lg={9}
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems={"center"}
                    direction={"row"}
                    className="misabout-Container"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={6}
                        lg={6}
                        // className="lan-evm-image"
                        container
                        alignItems={"flex-start"}
                    >
                        <img className="animationI" src={Mobile1} />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={6} className="t">
                        <div className="cmn-title">Mission</div>
                        <div className="cmn-sub-title4">
                            Connect the world through our transparent, decentralised,
                            non-custodial, and user-friendly one-stop DeFi financial system.
                            Users can access the DeFi ecosystem, such as decentralised
                            exchanges, lending protocols, staking, mobile wallet and
                            cross-chain transfer on over 16+ networks such as Ethereum,
                            Binance Smart Chain, Avalanche, and more.
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
                className="info-evm-Container mobile-margin"
            >
                <Grid
                    item
                    xs={10}
                    md={9} sm={9} lg={9}
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems={"center"}
                    direction={"row"}
                    className="vision-content"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={6}
                        lg={6}
                        className="vision"
                        container
                        alignItems={"flex-start"}
                    >
                        <div className="cmn-title">Vision</div>
                        <div className="cmn-sub-title4">
                            Spherium envisions becoming a robust banking and investment
                            solution for the 1.7 billion unbanked population globally by
                            playing a vital part in changing Tradfi and redistributing the
                            profits and power balance of the shared financial system to the
                            users. We aim to create an ecosystem where every individual,
                            irrespective of their geographical location, faith, and social
                            standing, becomes its own “Wealth Manager” that ensures maximum
                            returns on their investments with relatively low risk.
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6} lg={6} className="lap-ending">
                        <img className="animationI" src={Laptop} />
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
                className="info-evm-Container about-team mobile-margin"
            >
                <Grid
                    item
                    xs={10}
                    md={9} sm={9} lg={9}
                    container
                    spacing={2}
                    justifyContent="space-between"
                    direction={"row"}
                    className="abt-mis-Container"
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={12}
                        lg={6}
                        // className="lan-evm-image"
                        container
                        spacing={2}
                        flexDirection="row"
                    >
                        {profileList.map((data) => {
                            return (
                                <Grid item xs={5.4} md={2.5} sm={4.5} lg={4.5} className="profile-container about-card">
                                    <img src={data.profile} className="profile-img" />
                                    <div className="pro-cont">
                                        <div className="cmn-title7">{data.name}</div>
                                        <div className="cmn-sub-title3 about-desgnation">{data.designation}</div>
                                    </div>
                                    <img src={LinkedIn} className="link-img" />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={5} className="abt-mis-content mobile-margin">
                        <div className="cmn-title">Team</div>
                        <div className="cmn-sub-title4">
                            Spherium is a team of global DeFi experts with diverse areas of
                            expertise, including fintech, law, innovative contract
                            development, business development, AML/KYC, and blockchain
                            research, is focusing on developing services that will unleash the
                            potential DeFi revolution.
                            <br />
                            <br /> We believe in Building together each day, every day.
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutUs;
