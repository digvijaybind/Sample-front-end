import react, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Rect from "../../assets/image/profiles/rect.svg";
import Popular1 from "../../assets/image/Blog/popular1.svg";
import Popular2 from "../../assets/image/Blog/popular2.svg";
import Popular3 from "../../assets/image/Blog/popular3.svg";
import Popular4 from "../../assets/image/Blog/popular4.svg";
import Popular5 from "../../assets/image/Blog/popular5.svg";
import Popular6 from "../../assets/image/Blog/popular6.svg";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./blog.scss";

const BlogPage = () => {
  const [content, setContent] = useState([]);
  const [linkId, setLinkId] = useState(0);

  const blogList = [
    {
      title: "All",
      images: [
        {
          date: "July 5, 2022",
          header:
            "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
          profile: Popular1,
          sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
          link: "https://medium.com/spherium-finance/spherium-joining-hands-with-unmarshal-to-integrate-data-driven-dashboards-into-hyperswap-36819f0047b5",
        },
        {
          date: "July 5, 2022",
          header: "Boundlesspay to Take off on Spherium’s Hyperlaunch",
          profile: Popular2,
          sub: "Cryptocurrency platforms are growing steadily, including new blockchains, defi protocols, P2E games, etc. However, payment is one sector that needs more attention and care.",
          link: "https://medium.com/spherium-finance/boundlesspay-to-take-off-on-spheriums-hyperlaunch-ba6b17f21ba",
        },
        {
          date: "July 5, 2022",
          header: "Enhancing the MultiChain Ecosystem With BACKED",
          profile: Popular3,
          sub: "Cryptocurrencies as an asset class have most definitely surged as more and more interest is drawn to make a quick buck, but to do skillfully, is an art not many have mastered.",
          link: "https://medium.com/spherium-finance/enhancing-the-multichain-ecosystem-with-backed-af498fd5494e",
        },
        {
          date: "July 5, 2022",
          header: "Augmenting a New MultiChain Gateway With Blockius",
          profile: Popular4,
          sub: "The existing DeFi framework is plagued with issues in the areas of Token minting, Token vesting, LP Token lock, IDO structure, staking events, and many more. ",
          link: "https://medium.com/spherium-finance/augmenting-a-new-multichain-gateway-with-blockius-b8bc7d97ed6f",
        },
        {
          date: "July 5, 2022",
          header:
            "Yet Another HyperLaunch Addition — Bitliberte to go Live on Spherium’s Hyperlaunch",
          profile: Popular5,
          sub: "The eCommerce marketplace is a significant part of the global economy.",
          link: "https://medium.com/spherium-finance/yet-another-hyperlaunch-addition-bitliberte-to-go-live-on-spheriums-hyperlaunch-c8c93a54bcd2",
        },
        {
          date: "July 5, 2022",
          header:
            "Spherium Finance Joins Forces With AnyPad to Bolster Innovative Blockchain Startups",
          profile: Popular6,
          sub: "The De-Fi ecosystem has exceedingly gained momentum and secured major milestones. ",
          link: "https://medium.com/spherium-finance/spherium-finance-joins-forces-with-anypad-to-bolster-innovative-blockchain-startups-994aad0ae992",
        },
      ],
    },
    {
      title: "Partnerships",
      images: [
        {
          date: "July 5, 2022",
          header:
            "Spherium Joining Hands with Unmarshal To Integrate Data Driven Dashboards Into HyperSwap",
          profile: Popular1,
          sub: "Blockchain data is publicly accessible and has a right to be viewed by everyone, but extracting useful information from it remains a challenge. ",
          link: "https://medium.com/spherium-finance/spherium-joining-hands-with-unmarshal-to-integrate-data-driven-dashboards-into-hyperswap-36819f0047b5",
        },
        {
          date: "July 5, 2022",
          header: "Boundlesspay to Take off on Spherium’s Hyperlaunch",
          profile: Popular2,
          sub: "Cryptocurrency platforms are growing steadily, including new blockchains, defi protocols, P2E games, etc. However, payment is one sector that needs more attention and care.",
          link: "https://medium.com/spherium-finance/boundlesspay-to-take-off-on-spheriums-hyperlaunch-ba6b17f21ba",
        },
        {
          date: "July 5, 2022",
          header: "Enhancing the MultiChain Ecosystem With BACKED",
          profile: Popular3,
          sub: "Cryptocurrencies as an asset class have most definitely surged as more and more interest is drawn to make a quick buck, but to do skillfully, is an art not many have mastered.",
          link: "https://medium.com/spherium-finance/enhancing-the-multichain-ecosystem-with-backed-af498fd5494e",
        },
        {
          date: "July 5, 2022",
          header: "Augmenting a New MultiChain Gateway With Blockius",
          profile: Popular4,
          sub: "The existing DeFi framework is plagued with issues in the areas of Token minting, Token vesting, LP Token lock, IDO structure, staking events, and many more. ",
          link: "https://medium.com/spherium-finance/augmenting-a-new-multichain-gateway-with-blockius-b8bc7d97ed6f",
        },
        {
          date: "July 5, 2022",
          header:
            "Yet Another HyperLaunch Addition — Bitliberte to go Live on Spherium’s Hyperlaunch",
          profile: Popular5,
          sub: "The eCommerce marketplace is a significant part of the global economy.",
          link: "https://medium.com/spherium-finance/yet-another-hyperlaunch-addition-bitliberte-to-go-live-on-spheriums-hyperlaunch-c8c93a54bcd2",
        },
        {
          date: "July 5, 2022",
          header:
            "Spherium Finance Joins Forces With AnyPad to Bolster Innovative Blockchain Startups",
          profile: Popular6,
          sub: "The De-Fi ecosystem has exceedingly gained momentum and secured major milestones. ",
          link: "https://medium.com/spherium-finance/spherium-finance-joins-forces-with-anypad-to-bolster-innovative-blockchain-startups-994aad0ae992",
        },
      ],
    },
    {
      title: "Announcements",
      images: [
        {
          date: "July 5, 2022",
          header:
            "Yet Another HyperLaunch Addition — Bitliberte to go Live on Spherium’s Hyperlaunch",
          profile: Popular1,
          sub: "The eCommerce marketplace is a significant part of the global economy.",
          link: "https://medium.com/spherium-finance/yet-another-hyperlaunch-addition-bitliberte-to-go-live-on-spheriums-hyperlaunch-c8c93a54bcd2",
        },
        {
          date: "July 5, 2022",
          header: "How does Spherium Finance Safeguards Liquidity Locked?",
          profile: Popular2,
          sub: "A liquidity pool enables users to buy and sell cryptocurrency on decentralized exchanges and other DeFi platforms without a centralized market maker.",
          link: "https://medium.com/spherium-finance/how-does-spherium-finance-safeguards-liquidity-locked-220932effa31",
        },
        {
          date: "July 5, 2022",
          header: " The major issues in DeFi",
          profile: Popular3,
          sub: "With exponential growth in TVL volumes worldwide and promising initiatives, DeFi has expanded rapidly.",
          link: "https://medium.com/spherium-finance/what-are-the-major-issues-in-defi-f9438d0907ff",
        },
        {
          date: "July 5, 2022",
          header: "Our Interoperable Cross-Chain Bridge is now LIVE",
          profile: Popular4,
          sub: "To bridge this gap, we are building an ecosystem with cross-chain interoperability as a core functionality which has been one of the primary visions of Spherium Finance.",
          link: "https://medium.com/spherium-finance/our-interoperable-cross-chain-bridge-is-now-live-3b1a50e48165",
        },
        {
          date: "July 5, 2022",
          header:
            "Why Decentralized Exchanges (DEX) will hold the future of the trustless economy- In conjunction with HyperSwap",
          profile: Popular5,
          sub: "The eCommerce marketplace is a significant part of the global economy.",
          link: "The increased demand for decentralized exchange platforms to encourage and simplify digital asset trading has been rising lately.",
          link: "https://medium.com/spherium-finance/why-decentralized-exchanges-dex-will-hold-the-future-of-the-trustless-economy-in-conjunction-8689e045afaf",
        },
        {
          date: "July 5, 2022",
          header:
            "How Spherium’s Cross-Chain Bridge Will Make Access to DeFi Cheaper",
          profile: Popular6,
          sub: "In the past week, decentralized exchanges — platforms that facilitate peer-to-peer cryptocurrency transactions — have been dominated by whales.",
          link: "https://medium.com/spherium-finance/how-spheriums-cross-chain-bridge-will-make-access-to-defi-cheaper-bbc1a8db81fb",
        },
      ],
    },
    {
      title: "How to",
      images: [
        {
          date: "July 5, 2022",
          header: "How To Use Spherium Cross-Chain Bridge",
          profile: Popular1,
          sub: "DeFi Cross-chain bridge solution has inevitably become a rigid demand as the asset swap wave surges continuously.",
          link: "https://medium.com/spherium-finance/how-to-use-spherium-cross-chain-bridge-e5d84d106c47",
        },
      ],
    },
    {
      title: "Market Insights & Trends",
      images: [
        {
          date: "July 5, 2022",
          header: "Liquidity Mining leading the charge for DeFi adoption",
          profile: Popular1,
          sub: "DeFi encapsulates all solutions through which users can earn passive income through various activities. One of these avenues is liquidity mining.",
          link: "https://medium.com/spherium-finance/liquidity-mining-leading-the-charge-for-defi-adoption-371bd306e3de",
        },
        {
          date: "July 5, 2022",
          header: "Anecdotes of Creating a Cross-Chain Protocol",
          profile: Popular2,
          sub: "Blockchain infrastructure has surged at such a pace that keeping up with their true nature and working models is a walkthrough and constant realisation of new technological advancements.",
          link: "https://coinmarketcap.com/community/articles/31191",
        },
        {
          date: "July 5, 2022",
          header: " HyperBridge: The Most Simple Cross-Chain Bridging Solution",
          profile: Popular3,
          sub: "we are finally launching the most stable version of our cross-chain bridge, code named, “HyperBridge” on 5th May, 2022",
          link: "https://medium.com/spherium-finance/hyperbridge-the-most-simple-cross-chain-bridging-solution-d8c33124ea52",
        },
        {
          date: "July 5, 2022",
          header: "The Luna Fiasco and the Future of Cryptocurrencies",
          profile: Popular4,
          sub: "During a Senate Banking Committee hearing on Tuesday, Treasury Secretary Janet Yellen responded to an unprecedented attack on $LUNA, which saw its value drop more than 99%.",
          link: "https://coinmarketcap.com/community/articles/28343",
        },
      ],
    },
  ];

  useEffect(() => {
    setContent(blogList[0].images);
  }, []);
  const openList = [
    { name: "All" },
    { name: "Partnerships" },
    { name: "Announcements" },
    { name: "How To" },
    { name: "Market Insights & Trends" },
  ];

  const blogContent = (list, id) => {
    setContent(list);
    setLinkId(id);
  };
  return (
    <div className="career-whole-container">
      <Grid
        item
        xs={12}
        // sm={9} md={9} lg={9}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="career-Container"
      >
        <Grid item xs={10} sm={9} md={9} lg={6} className="career-header">
          We love building, and we are  build it everyday. Don’t want{" "}
          to miss an update?
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={7} className="career-description">
          <div className="career-in-content">
            Catch all the latest news here
          </div>
        </Grid>
      </Grid>
      <div className="IntegrateEVM blog-bg blog-height">
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
        // className="career-align"
        >
          <Grid
            item
            xs={12}
            sm={10} md={10} lg={10}
            container
            spacing={2}
            justifyContent="flex-start"
            direction={"row"}
            className="blog-popular"
          >
            <Grid item xs={9} sm={12} md={12} className="popular-heading">
              Popular topics
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={6} className="blog-topics">
              {blogList.map((data, index) => {
                return (
                  <div
                    className={index === linkId ? "link-select" : "link-list"}
                    onClick={() => blogContent(data.images, index)}
                  >
                    {data.title}
                  </div>
                );
              })}
            </Grid>
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
          xs={10}
          container
          spacing={2}
          justifyContent="flex-start"
          direction={"row"}
          // className="career-align"
          className="blog-cards-view"

        >
          <Grid
            item
            xs={12}
            className="blog-profiles"
            container
            spacing={2}
            flexDirection="row"
            justifyContent={"flex-start"}
          >
            {content?.map((data) => {
              return (
                <Grid
                  item
                  xs={11}
                  sm={5}
                  md={3.5}
                  lg={3.6}
                  className="blog-box blog-box-new"
                >
                  <img src={data.profile} className="blogs-imgs" />
                  <div className="blogs-date">{data.date}</div>
                  <div className="blogs-desg">{data.header}</div>
                  <div className="blogs-date blog-sub">{data.sub}</div>
                  <div className="blog-read">
                    <a target="blank" href={data.link} target="_blank">
                      Read Full <ArrowRightOutlined />{" "}
                    </a>
                  </div>
                  {/* <img src={LinkedIn} className="link-img" /> */}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPage;
