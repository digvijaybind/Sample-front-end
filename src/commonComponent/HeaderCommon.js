import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import hyperbridge from "../../assets/image/hyperbridge/hyperbridge.svg";
import BackgroundImage from "../../assets/image/banner/backgroundImage.svg";
import Uparrow from "../../assets/image/Uparrow.svg";

export default function Hyperbridge() {
    return (
        <Grid
            container
            alignItems="center"
            sx={{ height: "600px", background: `url(${BackgroundImage}) no-repeat` }}
        >
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Grid item className="header">
                        Cross-Chain Interoperability Made Simple
                    </Grid>
                    <Grid item className="sub-header">
                        HyperBridge is a Token Bridge Protocol Across Multiple Blockchains.
                        The Gateway to Cross-Chain Interoperable ecosystem that lets you
                        bridge tokens on multiple chains at your fingertips
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                            sx={{ border: "1px solid white" }}
                        >
                            <Grid item>
                                <div className="enter-app-button-container">
                                    <div className="enter-app-button">Enter App</div>
                                    <img src={Uparrow} />
                                </div>
                            </Grid>
                            <Grid item className="solana">
                                Solana support coming soon....
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <img src={hyperbridge} className="hyperbridge-image"></img>
            </Grid>
        </Grid>
    );
}
