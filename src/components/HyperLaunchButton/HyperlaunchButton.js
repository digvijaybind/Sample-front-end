import React, { useEffect,useRef } from "react";
import "./hyperlaunchbutton.scss";
import * as typeformEmbed from '@typeform/embed'

const HyperLaunchButton = () => {
  const el = useRef(null)
  const link = '//embed.typeform.com/next/embed.js'
  useEffect(() => {
    window.scrollTo(0, 0);

   
      typeformEmbed.makeWidget(el.current, link, {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
     
    
  }, [link]);

  return (
    <div ref={el}>
      <button
        data-tf-popup="sIZNGOAr"
        data-tf-iframe-props="title=HyperLaunch Cross Chain Incubation Program"
        data-tf-medium="snippet"
        style={{
          all: "unset",
          fontFamily: "Helvetica,Arial,sans-serif",
          display: "inline-block",
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundColor: "#0445AF",
          color: "#FFFFFF",
          fontSize: 20,
          borderRadius: "25px",
          padding: "0 33px",
          fontWeight: "bold",
          height: "50px",
          cursor: "pointer",
          lineHeight: "50px",
          textAlign: "center",
          margin: 0,
          textDecoration: "none",
        }}
      >
        Launch me
      </button>
    </div>
  );
};

export default HyperLaunchButton;
