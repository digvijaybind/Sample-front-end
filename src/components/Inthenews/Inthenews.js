import React, { useEffect } from "react";
import "./inthenews.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const Inthenews = () => {
  // useEffect(() => {
  //     if (window.location.href.indexOf('media')==-1) {
  //         window.location.replace(window.location.href+'home');
  //    }
  // }, [])

  return (
    <div className="spheriuminews-wrapper">
      <div className="container">
        <h2 className="heading">Media And Publications</h2>
        <p className="w-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="carouselinews-mask">
          <OwlCarousel className="owl-theme innews-carousel" {...options}>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-6.png`}
                  alt=""
                  className="img-fluid smalliconslider"
                />
              </div>
              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://cointelegraph.com/press-releases/spherium-finance-unveils-a-cross-chain-incubation-and-grant-program"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spherium Finance unveils a cross-chain incubation and grant
                    program
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://cointelegraph.com/press-releases/spherium-finance-unveils-a-cross-chain-incubation-and-grant-program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/BestStartup.asia-Logo.png`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://beststartup.asia/31-top-singapore-financial-exchanges-companies-and-startups/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    31 Top Singapore Financial Exchanges Companies and Startups
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://beststartup.asia/31-top-singapore-financial-exchanges-companies-and-startups/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/bsc-news.svg`}
                  alt=""
                  className="img-fluid smalliconslider"
                />
              </div>
              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://www.bsc.news/post/spherium-finance-receives-third-place-in-dorahacks-binance-smart-chain-hackathon?utm_campaign=meetedgar&utm_medium=social&utm_source=meetedgar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spherium Finance Receives Third Place In DoraHacks Binance
                    Smart Chain Hackathon
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://www.bsc.news/post/spherium-finance-receives-third-place-in-dorahacks-binance-smart-chain-hackathon?utm_campaign=meetedgar&utm_medium=social&utm_source=meetedgar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/investingcom.jpg`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://www.investing.com/news/cryptocurrency-news/changing-the-face-of-defi-spherium-finance-raises-33-million-in-seed-and-private-sale-rounds-2507792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Changing the Face of DeFi: Spherium Finance Raises $3.3
                    Million in Seed and...
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://www.investing.com/news/cryptocurrency-news/changing-the-face-of-defi-spherium-finance-raises-33-million-in-seed-and-private-sale-rounds-2507792"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-1.png`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://finance.yahoo.com/news/oversubscribed-private-round-sees-spherium-144600986.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Top IDO and Project Launches to Watch in May 2021
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://finance.yahoo.com/news/oversubscribed-private-round-sees-spherium-144600986.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-2.png`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://www.newsbtc.com/news/company/yield-farming-aggregator-don-key-gears-up-for-an-ido-on-superstarter/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yield Farming Aggregator Don-Key Gears Up for an IDO On
                    SuperStarter
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://www.newsbtc.com/news/company/yield-farming-aggregator-don-key-gears-up-for-an-ido-on-superstarter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo3.png`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://markets.businessinsider.com/news/stocks/spherium-finance-raises-3-3-million-to-build-comprehensive-defi-ecosystem-1030422148"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spherium Finance Raises $3.3 Million to Build Comprehensive
                    DeFi...
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://markets.businessinsider.com/news/stocks/spherium-finance-raises-3-3-million-to-build-comprehensive-defi-ecosystem-1030422148"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Featured-in-logos/Featured-in-logo-5.png`}
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="newsblog-wrapper">
                <p>
                  <a
                    href="https://www.investing.com/news/cryptocurrency-news/changing-the-face-of-defi-spherium-finance-raises-33-million-in-seed-and-private-sale-rounds-2507792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Top IDO and Project Launches to Watch in May 2021
                  </a>
                </p>
                <a
                  className="learmore-btn"
                  href="https://www.investing.com/news/cryptocurrency-news/changing-the-face-of-defi-spherium-finance-raises-33-million-in-seed-and-private-sale-rounds-2507792"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                  <img
                    src={`${process.env.PUBLIC_URL}/images/slider-arrow.svg`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
        
      </div>
     
    </div>
  );
};

export default Inthenews;
