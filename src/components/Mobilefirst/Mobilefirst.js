import React from "react";
import "./mobilefirst.scss";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Inthenews/inthenews.scss";
import Adlunam from "./videos/adlunam.MP4";
import Anypad from "./videos/anypad.MP4";
import Blockius from "./videos/blockius.MP4";
import Brokoli from "./videos/brokoli.MP4";
import Gameverse from "./videos/gameverse.MP4";
import Hyfi from "./videos/hyfi.MP4";
import Hypersign from "./videos/hypersign.MP4";
import Liberte from "./videos/liberte.MP4";
import Lockness from "./videos/lockness.MP4";
import Story from "./videos/story.MP4";
import Supra from "./videos/supra.MP4";
import Wagon from "./videos/wagon.MP4";
import UDomains from "./videos/UDomains.MP4";
import Polkally from "./videos/polkally.MP4";



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

const Mobilefirst = () => {
  return (
    <section className="mobilefirst-wrapper">
      <div className="container">
        <div className="">
          <h1 className="heading">Latest Partnership</h1>
        </div>
        <div className="carouselinews-mask">
          <OwlCarousel className="owl-theme innews-carousel" {...options}>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Adlunam} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Adlunam</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Anypad} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Anypad</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Blockius} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Blockius</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Brokoli} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Brokoli</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Gameverse} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Gameverse</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Hyfi} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Hyfi</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Hypersign} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Hypersign</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Liberte} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>BitLiberte</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Lockness} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Lockness</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Story} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Story</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Supra} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Supra Oracles</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Wagon} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Attack Wagon</p>
              </div>
            </div>
            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={UDomains} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Unstoppable Domains</p>
              </div>
            </div>

            <div class="item">
              <div className="image-wrapper">
                <video loop id="" muted playsInline style={{ width: 345, borderRadius: 10 }} autoPlay>
                  <source src={Polkally} type="video/mp4" />
                </video>
              </div>
              <div className="newsblog-wrapper">
                <p>Polkally</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Mobilefirst;
