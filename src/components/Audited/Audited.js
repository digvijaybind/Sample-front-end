import React from "react";
import "./partners.scss";
import SomeVector from "../../img/somevector.svg";

const Audited = () => {
  return (
    <div className="auditedverified-wrapper">
      <div className="container">
        <div
          className="row"
          style={{ justifyContent: "center", flexDirection: "row-reverse" }}
        >
          <div className="col-12 col-md-12 col-lg-4 pl-0 some-vector-wrapper">
            <div className="">
              <img src={SomeVector} alt="" className="img-fluid" />
            </div>
          </div>
          <div
            className="col-12 col-md-12 col-lg-5"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="allInOneWrapper">
              <h3>Security Checks</h3>
              <h1>
                How do we ensure <span>security?</span>
              </h1>
              <p>
                Audits By Industry Leading Partners
                <br /> Long Testnet Phases For Bug Fixes <br />
                Adoption of Practises To Safeguard Liquidity & Assets Locked
              </p>
            </div>
          </div>
        </div>
        <div className="auditswrapper">
          <div>
            <h1>Our Audits</h1>
            <div
              className="d-flex justify-content-center"
              style={{ gap: 40, marginTop: 40 }}
            >
              <div className="audit-image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-3.png`}
                  alt=""
                  className="img-audit"
                />
              </div>
              <div className="audit-image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-2.png`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="audit-image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Auditor-section-logos/Auditor-section-logo-1.png`}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: 60 }}>
            <div className="col-lg-6" id="col-left">
              <div className="bottom-item-wrapper">
                <a
                  href="https://github.com/HalbornSecurity/PublicReports/blob/master/Solidity%20Smart%20Contract%20Audits/Spherium_Vesting_Smart_Contract_Security_Audit_Report_Halborn_Final.pdf"
                  target={"_blank"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h3>Vesting-By</h3>
                </a>
              </div>

              <div className="bottom-item-wrapper">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://github.com/HalbornSecurity/PublicReports/blob/master/Solidity%20Smart%20Contract%20Audits/Spherium_Hyperswap_Smart_Contract_Security_Audit_Report_Halborn_Final.pdf"
                  target={"_blank"}
                >
                  <h3>Smart Contract - By</h3>
                </a>
              </div>
            </div>
            <div className="col-lg-6" id="col-right">
              <div
                className="bottom-item-wrapper"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://github.com/HalbornSecurity/PublicReports/blob/master/Solidity%20Smart%20Contract%20Audits/Spherium_Bridge_Smart_Contract_Security_Audit_Report_Halborn_v1_1.pdf"
                  target="_blank"
                >
                <h3>Bridge - By</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audited;
