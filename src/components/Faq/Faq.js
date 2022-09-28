import React from "react";
import "./faq.scss";
import Grid from "@mui/material/Grid";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const defiList = [
    {
      title: "HyperBridge",
      content:
        " An interoperable multi-chain bridge that allows tokens to be quickly bridged between EVM and Non-EVM compatible blockchains.",
    },
    {
      title: "HyperSwap",
      content:
        " A cross-chain asset swap that is decentralised and based on an automated market-making  mechanism.",
    },
    {
      title: "HyperLend",
      content:
        " A decentralised money market where investors can lend or borrow digital assets at interest rates determined by supply and demand.",
    },
    {
      title: "HyperWallet",
      content:
        "A secure and decentralised wallet for Spherium products and services.Spherium offers a unified platform for multi-asset, cross-chain swaps, crypto financing, and cross-chain operability.",
    },
  ];
  const list = [
    "Technical Support for cross-chain integration",
    "Free Access to HyperBridge to move liquidity across multi EVM & Non EVM compatible chains",
    "Access to cross-chain DeFi solutions such as DEX, Staking, Dual Farming, Lending and more",
    "Revenue rebate for a specific period of time from user participation ",
    "A groundbreaking project will also win a reasonable grant from Team Spherium   ",
  ];

  const tokenList = [
    {
      title: "$SPHRI",
      content:
        " being the only token of the entire system, will also work in such a way that it grants rewards, giveaways, airdrops, whitelist entries and perks to the HODLers.",
    },
    {
      title: "$SPHRI",
      content:
        "will also act as the key asset to participate in the governance based on-chain and off-chain decisions. ",
    },
    {
      title: "$SPHRI",
      content:
        " being a hard-cap token maxed at 100M and also having a deflationary token mechanism will continuously create more utility holders.",
    },
  ];
  return (
    <div className="container faq-master">
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
      >
        <Grid
          item
          xs={10}
          md={8}
          sm={10}
          lg={10}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
        >
          <Grid item xs={12} lg={5} className='faq-header'>
            <div className="font-color">
              <div className="faq-title">Any questions?</div>
              <div className="faq-title">We got you.</div>
            </div>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Grid item xs={12} lg={12} className="collapse-container">
              <Collapse
                defaultActiveKey={["2", "3", "4", "5"]}
                onChange={onChange}
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? <MinusOutlined /> : <PlusOutlined />
                }
              >
                <Panel
                  header="What is Spherium Finance working upon?"
                  key="1"
                  className="panel-content"
                >
                  <p>
                    Spherium Finance in a nutshell is a Decentralised Finance
                    protocol that is working to solve the issue of
                    defragmentation in the industry by forging a sustainable and
                    scalable suite of applications in a cross-chain
                    interoperability environment. Spherium is creating an all
                    inclusive platform which will encapsulate mainstream and
                    revolutionary blockchains, enterprising projects and anyone
                    who wants to experience the power of finance in Web3.{" "}
                  </p>
                </Panel>
                <Panel
                  header="How will Spherium empower the cross-chain ecosystem?"
                  key="2"
                  className="panel-content"
                >
                  <p>
                    Spherium aims to create an encapsulating cross-chain network
                    by integrating key L1 and L2 blockchains onto its protocol
                    line-up to enable the most comprehensive DeFi platform.
                    Spherium will start its cross-chain operations by
                    integrating major EVM blockchains, moving to the emerging
                    L2s. Furthermore, adding Non EVM blockchains will be the
                    next course of action to extend the reach and utility of
                    cross-chain operations. And finally, pushing up and coming
                    blockchains that set out to revolutionise the industry will
                    also have a distinguished place in the Spherium
                    infrastructure completing the whole circle of empowering the
                    cross-chain ecosystem.{" "}
                  </p>
                </Panel>
                <Panel
                  header="What DeFi Services will be available at Spherium?"
                  key="3"
                  className="panel-content"
                >
                  <p>
                    Overlooking the currently fragmented stage of DeFi industry
                    as a whole, where its struggle for projects to move their
                    liquidity in a multi chain system, due to exorbitant fee
                    structures, and at the same time for end users as well, to
                    switch between different protocols to experience the best of
                    all blockchains takes out of the whole decentralised
                    structure analogy.
                    <br />
                    <br /> To bring together everything that DeFi stands for,
                    Spherium will comprise of a suite of Hyper applications
                    namely:
                    <br />
                    <br />
                  </p>
                  <Grid
                    xs={12}
                    container
                    spacing={2}
                    justifyContent="center"
                    direction={"row"}
                  >
                    {defiList.map((data) => {
                      return (
                        <Grid item xs={11} className="defi-services">
                          <b>{data.title + ":"}</b>
                          {data.content}
                        </Grid>
                      );
                    })}
                  </Grid>
                </Panel>
                <Panel
                  header="How can projects utilize Spherium's cross-chain incubation Program?"
                  key="4"
                  className="panel-content"
                >
                  <p>
                    Unlike most of the protocols which are focused either
                    entirely on customer centric approach, Spherium is
                    empowering the entire digital assets economy, by taking
                    enterprising projects on an enriching onboarding journey,
                    expanding into a multi-chain future. Through HyperLaunch, A
                    Cross Chain Incubation & Grant Program, projects can use the
                    multi suite applications to add cross-chain functionality
                    onto their systems.
                    <br />
                    <br /> HyperLaunch first cohort will consist of 50 projects
                    who will share a host of benefits:
                    <br />
                    <br />
                  </p>
                  <Grid
                    xs={12}
                    lg={10}
                    sm={9}
                    md={9}
                    container
                    spacing={2}
                    justifyContent="center"
                    direction={"row"}
                    className='faq-bullets'
                  >
                    <ul className="bullet-list faq-bullets-list">
                      {list.map((val) => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </Grid>
                  <br />
                  <br />
                  <p>
                    There exists a prerequisite for projects to apply for the
                    Incubation & Grant Program. Head over to the HyperLaunch
                    page and fill the form to get in touch with the team.
                  </p>
                </Panel>
                <Panel
                  header="What utility does the native token $SPHRI hold?"
                  key="5"
                  className="panel-content"
                >
                  <p>
                    The whole Spherium ecosystem is governed by its native token
                    $SPHRI, which holds the most significant value attached to
                    performing any action across the applications present. While
                    interacting with Spherium DApps, $SPHRI holds the most
                    feasibility as compared to any other digital asset. Lower
                    fees, early opportunities and an impact to shape and
                    re-shape the future prospects of how Spherium grows
                    intrinsically.
                    <br />
                    <br />
                  </p>
                  <Grid
                    xs={12}
                    container
                    spacing={2}
                    justifyContent="center"
                    direction={"row"}
                  >
                    {tokenList.map((data) => {
                      return (
                        <Grid item xs={11} className="defi-services">
                          <b>{data.title + ","}</b>
                          {data.content}
                        </Grid>
                      );
                    })}
                  </Grid>
                </Panel>
              </Collapse>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Faq;

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
