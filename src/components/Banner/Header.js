import React, { useEffect, useState } from "react";
import Navbackgroundimgae from "../../assets/image/banner/Navback.svg";
import spheriumlogo from "../../assets/image/banner/spheriumlogo.svg";
import Animationlogo2img from "../../assets/image/banner/Animationlogo2.svg";
import { Button, Popover } from "antd";
import "./Header.css";
import { Route, Switch, Link, HashRouter as Router } from "react-router-dom";
import subMenuList from "../../menuList/Menulist";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = "#00121d";
  }, []);

  const getContent = (data) => {
    return (
      <>
        {data.length > 0 && (
          <div className="pop_over">
            {data &&
              data.map((val) => {
                return (
                  <>
                    {val.path.includes("https") ? (
                      <a href={val.path} className="showLink">
                        {val.name}
                      </a>
                    ) : (
                      <Link to={val.path} className="showLink">
                        <div className="cmn-title4">{val.name}</div>
                        <div
                          className={`cmn-sub-title5 ${
                            val.subtitle === "Coming soon" && "sub-color"
                          }`}
                        >
                          {val.subtitle}
                        </div>
                      </Link>
                    )}
                  </>
                );
              })}
          </div>
        )}
      </>
    );
  };

  const redirect = (data) => {
    history.push(data);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="headerBackground">
        <div className="showLogo">
          <img src={spheriumlogo} />
        </div>
        <div className="navList">
          {subMenuList.map((data) => {
            return (
              <>
                <Popover
                  content={() => getContent(data.subMenu)}
                  trigger="hover"
                >
                  {data.path.includes("https") ? (
                    <a href={data.path} className="menuSublist">
                      {data.name}
                    </a>
                  ) : (
                    <Button
                      onClick={() => redirect(data.path)}
                      className="menuSublist"
                    >
                      {data.name}
                    </Button>
                  )}
                </Popover>
              </>
            );
          })}
        </div>
        <div className="enterBtn">
          <button className="btnShow">Enter App</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
