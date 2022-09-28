import React, {useEffect} from "react";
import './demo.scss'
import video from "../../img/hyperswap_bridge.mp4";
import Navigation from "../Navigation/Navigation";

const Demo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navigation/>
    <section className="contentwrapperDemo">
      <div className="centerDemo">
        <video loop autoPlay id="demoVid" muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <h2>HyperSwap & HyperBridge Demo</h2>
        <p>
          The safe, fast and most secure way to bring assets to Spherium
          Platform with just one click.
        </p>
      </div>
    </section>
    </>
  );
};

export default Demo;
