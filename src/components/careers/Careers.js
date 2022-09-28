import react from "react";
import Grid from "@mui/material/Grid";
import Rect from "../../assets/image/profiles/rect.svg";
import Profile1 from "../../assets/image/profiles/profile1.svg";
import Profile2 from "../../assets/image/profiles/profile2.svg";
import Profile3 from "../../assets/image/profiles/profile3.svg";
import Profile4 from "../../assets/image/profiles/profile4.svg";
import LinkedIn from "../../assets/image/aboutUs/lin.svg";
import Location from "../../assets/image/location.svg";
import CustomButton from "../../commonComponent/Button";
import Uparrow from "../../assets/image/Uparrow.svg";
import Timer from "../../assets/image/timer.svg"
import "./careers.scss";

const Careers = () => {
  const list = {
    letfList: [
      "Positive environment",
      "Indefinite perks",
      "Equal opportunities",
      "Growth opportunities",
    ],
    rightList: [
      "Global Team ",
      "Remote working",
      "User comes first approach",
      "Team work",
    ],

  };
  const profileList = [
    {
      designation: "CEO. Co-Founder",
      name: "Aanchal Thakur",
      profile: Profile1,
    },
    { designation: "COO, Co.Founder", name: "Sash Jeetun", profile: Profile2 },
    {
      designation: "Team lead, Product Dev.",
      name: "Haidar",
      profile: Profile3,
    },
    {
      designation: "Marketing Associate / HR",
      name: "Elisabetta",
      profile: Profile4,
    },
  ];
  const openingList = [
    { position: "Business Dev intern" },
    { position: "Marketing Intern" },
    { position: "Solidity Dev intern" },
    { position: "Brand Ambassador" },
  ];

  return (
    <div className="career-whole-container">
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="career-Container  career-tops"
      >
        <Grid item xs={10} className="career-header">
          Together we bridge
          the DeFi revolution
        </Grid>
        <Grid item xs={10} className="career-description">
          <div className="career-in-content">
            Join our team to become part of borderless cross-chain
            infrastructure
          </div>
        </Grid>
      </Grid>
      <div className="IntegrateEVM">
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="center"
          direction={"row"}
          className="blur-bg"
        >
          {/* <div className="base"> */}
          <Grid
            item
            xs={12}
            container
            spacing={2}
            justifyContent="center"
            direction={"row"}
            className="culture-main"
          >
            <Grid item xs={12} className="culture-container">
              <div className="cult-title">Culture Code in Spherium Finance</div>
              <div className="cult-sub-title">
                We believe in building together - Each day, everyday.{" "}
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              container
              display={'flex'}
              flexDirection={"row"}
              justifyContent="center"
              spacing={2}
              className="list-mobile"
            >
              <div className="car-listed">
                <Grid item xs={3}>
                  <img src={Rect} className="rect_img" />
                </Grid>
                <Grid item xs={8} className="car-right-lists">
                  {[...list.letfList, ...list.rightList].map((data) => {
                    return <div className="car-list">{data}</div>;
                  })}
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              container
              flexDirection={"row"}
              justifyContent="center"
              spacing={2}
              className="car-listing list-desktop"
            >
              <Grid item xs={5} className="car-left-list">
                {list.letfList.map((data) => {
                  return <div className="car-list">{data}</div>;
                })}
              </Grid>
              <Grid item xs={2}>
                <img src={Rect} className="rect_img" />
              </Grid>
              <Grid item xs={5} className="car-right-list">
                {list.rightList.map((data) => {
                  return <div className="car-list">{data}</div>;
                })}
              </Grid>
            </Grid>
          </Grid>
          {/* </div> */}
        </Grid>
      </div>
      <Grid
        item
        xs={12}

        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="career-align"
      >
        <Grid item xs={9} className="career-header team-head">
          Leadership Team
        </Grid>
        <Grid
          item
          xs={11}
          md={12}
          sm={12}
          className="career-profiles"
          container
          spacing={2}
          flexDirection="row"
          justifyContent={"center"}
        >
          {profileList.map((data) => {
            return (
              <Grid item xs={5} md={5} sm={2.5} lg={2.3} className="profile-container-career ">
                <img src={data.profile} className="profile-img" />
                <div className="profile-name">{data.name}</div>
                <div className="profile-desg">{data.designation}</div>
                <img src={LinkedIn} className="link-img" />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} className="career-header">
          <div className="car-team-footer">+ 12 TEAM MEMBERS</div>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="center"
        direction={"row"}
        className="career-openings"
      >
        <Grid item xs={10} className="career-header team-head">
          Our current openings
        </Grid>
        <Grid
          item
          xs={11}
          className="career-profiles"
          container
          spacing={2}
          flexDirection="row"
          justifyContent={"center"}

        >
          {openingList.map((data) => {
            return (
              <Grid
                item
                xs={11}
                className="Internship-wrapper"
                container
                flexDirection={"row"}
              >
                <Grid item xs={8} md={8} sm={8} lg={6} container flexDirection={"row"}>
                  <Grid item xs={12} className="car-position">
                    {data.position}
                  </Grid>
                  <Grid item xs={12} container display={"flex"}>
                    <div className="location-show">
                      <img src={Location} />
                      <div>Remote</div>
                    </div>
                    <div className="location-show">
                      <img src={Timer} />
                      <div>Fill-time</div>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4} md={4} sm={4} lg={6}
                  container
                  justifyContent={"flex-end"}
                  alignItems="center"
                  className='btnTest'
                >
                  <CustomButton btnName={"Apply"} width={10} icon={Uparrow} />
                </Grid>

                {/* <img src={data.profile} className="profile-img" />
                  <div className="profile-name">{data.name}</div>
                  <div className="profile-desg">{data.designation}</div>
                  <img src={LinkedIn} className="link-img" /> */}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Careers;
