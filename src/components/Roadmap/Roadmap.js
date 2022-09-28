import React, { useEffect } from "react";
import "./roadmap.scss";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      <React.Fragment>
        <div style={{maxWidth: 1200, color: 'white', margin: 'auto'}}>
        <h1
          className="roadMapTitle mb-4"
          style={{ color: "white", textAlign: "center", marginTop: "2rem" }}
        >
          Spherium Roadmap
        </h1>
        <p>
          Spherium Finance is delighted to bring forth their updated roadmap,
          through this update we have attempted to provide everybody with a
          clearer and straightforward timeline of events. As a team, the
          organisation prioritizes launching projects that have an impeccable
          track record. On the same note, there has been a profusion of events
          with HyperLaunch going live being one of the biggest out of all such
          events. This quarter specifically saw a volume of progress in terms of
          expansion and introducing solutions into the ecosystem. Apart from
          HyperSwap, we have started to make considerable progress with the
          PancakeSwap Listing.{" "}
        </p><br/>
        <p>
          Spherium Finance would like to take this chance to talk about the
          delay that has been caused with going on Mainnet, this is sole because
          of continuous rounds of extensive and exhaustive testing that is being
          conducted. These tests are specifically imperative to conduct to be
          able to launch a project that doesn’t encounter roadblocks after being
          launched as that can potentially cause a heavy setback to the project
          and its future proceedings. Spherium Finance was also very recently
          audited by Halborn Securities which had intended to provide
          transparency about the organisation and consequently, the projects
          that were supposed to go mainnet in due time.
        </p><br/>

        <p>
          To conclude, Spherium Finance requests continuous support and
          expresses gratitude towards all the patience and perpetual support all
          our followers have extended over the past months and looks forward to
          receiving the same in the coming days. Please visit our updated
          roadmap to receive an idea about when exactly we have scheduled to
          release updates. As far as current developments are considered in
          terms of new launches within the given timeframes, we are delighted to
          announce that Spherium Finance is well on track and we urge all our
          followers to constantly keep engaging with us through our social media
          handles for more information about upcoming happenings!
        </p><br/>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  var(--fbg)",
              borderRadius: "7%",
            }}
            iconStyle={{
              background: "#fff",
              boxShadow: "1px 0px 15px 15px rgb(173 255 0 / 25%)",
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "var(--date)", fontWeight: 600 }}
            >
              2021{" "}
              <span
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: 400 }}
              >
                Q2
              </span>
            </h3>
            <ul>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Website Creation</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Whitepaper V1</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Team growth and expansion</span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
            date=""
            iconStyle={{
              background: "#fff",
              boxShadow: "1px 0px 15px 15px rgb(173 255 0 / 25%)",
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "var(--date)", fontWeight: 600 }}
            >
              2021{" "}
              <span
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: 400 }}
              >
                Q3
              </span>
            </h3>

            <ul>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Fundraising Activities </span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Tokenomics Release</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">
                  Fund Raise Closure and Token Launch
                </span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Token Listing on CEX</span>{" "}
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            date=""
            iconStyle={{
              background: "#fff",
              boxShadow: "1px 0px 15px 15px rgb(173 255 0 / 25%)",
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "var(--date)", fontWeight: 600 }}
            >
              2021{" "}
              <span
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: 400 }}
              >
                Q4
              </span>
            </h3>

            <ul>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">
                  {" "}
                  HyperLaunch Incubation & Grant Program Launch
                </span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Onboarding New Projects</span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            date=""
            contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
            iconStyle={{
              background: "#fff",
              boxShadow: "1px 0px 15px 15px rgb(173 255 0 / 25%)",
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "var(--date)", fontWeight: 600 }}
            >
              2022{" "}
              <span
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: 400 }}
              >
                Q1
              </span>
            </h3>

            <ul>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">$SPHRI Launch on PCS</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Bridge Integration On BSC-ETH</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Mobile app testing V1.0 beta</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Avalanche integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done"> Polygon integration on Bridge</span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
            date=""
            iconStyle={{
              background: "#fff",
              boxShadow: "1px 0px 15px 15px rgb(173 255 0 / 25%)",
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "var(--date)", fontWeight: 600 }}
            >
              2022{" "}
              <span
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: 400 }}
              >
                Q2
              </span>
            </h3>

            <ul>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Arbitrum integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Movr integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done"> Fantom integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Moonbeam integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">KCC integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Optimism integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Heco integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Chronos integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Aurora integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Xdai integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Hedera integration on Bridge</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">On-Chain KYC</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Fiat on and off ramp</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Dual Staking program</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Dual Staking for Spherium partners</span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  var(--fbg)" }}
            date=""
            iconStyle={{
              background: "#fff",
              boxShadow: "1px 0px 15px 15px rgb(173 255 0 / 25%)",
            }}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "var(--date)", fontWeight: 600 }}
            >
              2022{" "}
              <span
                className="vertical-timeline-element-subtitle"
                style={{ fontWeight: 400 }}
              >
                Q3
              </span>
            </h3>

            <ul>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">HyperSwap Mainnet Launch</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">Hyperlend Lending protocol</span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">
                  Non-Evm solutions and L1s integrations
                </span>
              </li>
              <li style={{ gap: 10, display: "flex", alignItems: "center" }}>
                <span className="done">SPHRI DAO</span>
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </React.Fragment>
    </>
  );
};

export default Roadmap;
