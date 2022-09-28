// .faq - title {
//     font - size: 64px;
//     background: linear - gradient(88.49deg, #7afbe4 30.72 %, #4a54f4 84.08 %);
//     -webkit - background - clip: text;
//     -webkit - text - fill - color: transparent;
//     font - weight: 600!important;
// }
  
//   .generic - container {
//     padding: 3rem 0;
//     font - family: PlusjakartaSans;
// }
  
//   .collapse - container {
//     .ant - collapse {
//         background: transparent;
//         border: unset;
//       .ant - collapse - item > .ant - collapse - header {
//             color: #d0d4de;
//             font - size: 24px;
//         }
//     }
// }
  
//   .panel - content {
//     .ant - collapse - content > .ant - collapse - content - box {
//         background: #02040f!important;
//         color: #d0d4de;
//     }
//     //   .ant-collapse-content {

//     //   }
// }
  
//   .defi - services {
//     //   display: flex;
//     padding - left: 0px!important;
// }
  
//   .defi - title {
//     font - size: 1rem;
//     font - weight: 600;
// }

// @media screen and(min - width: 200px) and(max - width: 650px) {
//     .ant - collapse {
//       .ant - collapse - item > .ant - collapse - header {
//             color: #d0d4de;
//             font - size: 14px!important;
//         }
//     }
  
//     .faq - title {
//         font - size: 25px;
//     }
// }




// // blog




// //css


// /// layout,css

// // .custom-appbar{
// //     margin-left: 0px !important;
// //     width: 100% !important;
// // }

// // .side-nav{
// //     display: none;
// // }

// // @media screen and (min-width: 500px)  and (max-width:800px) {

// // }

// // .mob-sider{

// // }



// // menuist

// //   layout 

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { Route, Switch, HashRouter as Router } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation";
// import Home from "./components/Home/Home";
// import Hyperswap from "./components/Hyperswap/Hyperswap";
// // import Hyperbridge from './components/Hyperbridge/Hyperbridge';
// import Hyperlend from "./components/hyperlend/Hyperlend";
// import Hyperlaunch from "./components/Hyperlaunch/Hyperlaunch";
// import About from "./components/About/About";
// import Termsofservice from "./components/Termsofservice/Termsofservice";
// import Privacypolicy from "./components/Privacypolicy/Privacypolicy";
// // import Footer from './components/Footer/Footer';
// import Faq from "./components/Faq/Faq";
// import Governance from "./components/Governance/Governance";
// import Wallet from "./components/Wallet/Wallet";
// import Tokenomics from "./components/Tokenomics/Tokenomics";
// import Contact from "./components/Contact/Contact";
// import Thanks from "./components/Thanks/Thanks";
// import Documentation from "./components/Documentation/Documentation";
// import TradingCompetition from "./components/TradingCompetition/TradingCompetition";
// import Demo from "./components/Demo/Demo";
// import Roadmap from "./components/Roadmap/Roadmap";
// import Footer from "./components/Finalfooter/Footer";
// import Header from "./components/Banner/Header";
// import HyperLaunchNew from "./components/hyperLaunchNew";
// import AboutUs from "./components/Aboutus";
// import Careers from "./components/Careers";
// import WalletPage from "./components/WalletPage";
// import HyperStack from "./components/HyperStack";
// import BlogPage from "./components/Blog/index";
// import subMenuList from "./menuList";
// import { Collapse } from "antd";
// import CloseIcon from '@mui/icons-material/Close';
// const { Panel } = Collapse;
// import "./layout.scss";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//     ({ theme, open }) => ({
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create("margin", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: `-${drawerWidth}px`,
//         ...(open && {
//             transition: theme.transitions.create("margin", {
//                 easing: theme.transitions.easing.easeOut,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             marginLeft: 0,
//         }),
//     })
// );

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//     transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
// }));

// export default function Layout() {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };
//     const onChange = (key) => {
//         console.log(key);
//     };

//     return (
//         <Router>
//             <Box sx={{ display: "flex" }}>
//                 <CssBaseline />
//                 <AppBar position="fixed" sx={{ background: "#02040f" }} open={open}>
//                     <Toolbar>
//                         <Header />

//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             onClick={handleDrawerOpen}
//                             edge="start"
//                             sx={{ mr: 2, ...(open && { display: "none" }) }}
//                             className="menuIcon"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     </Toolbar>
//                 </AppBar>
//                 <Drawer
//                     sx={{
//                         width: drawerWidth,
//                         flexShrink: 0,
//                         "& .MuiDrawer-paper": {
//                             width: drawerWidth,
//                             boxSizing: "border-box",
//                         },
//                     }}
//                     variant="persistent"
//                     anchor="left"
//                     open={open}
//                     className="mob-sider"
//                 >
//                     <DrawerHeader>
//                         <IconButton onClick={handleDrawerClose} className="menuic">
//                             {theme.direction === "ltr" ? (
//                                 <CloseIcon />
//                             ) : (
//                                 <CloseIcon />
//                             )}
//                         </IconButton>
//                     </DrawerHeader>
//                     <div className="side-list-nav">
//                         <Collapse
//                             defaultActiveKey={["0"]}
//                             onChange={onChange}
//                             expandIconPosition="end"
//                         // expandIcon={({ isActive }) =>
//                         //   isActive ? <MinusOutlined /> : <PlusOutlined />
//                         // }
//                         >
//                             {subMenuList?.map((data, index) => {
//                                 return (
//                                     <Panel header={data.name} key={index}>
//                                         <div>
//                                             {data.subMenu?.map((val, id) => {
//                                                 return (
//                                                     <div>
//                                                         <div className="side-list-header">{val.name}</div>
//                                                     </div>
//                                                 )
//                                             })}
//                                         </div>
//                                     </Panel>
//                                 );
//                             })}
//                         </Collapse>
//                     </div>
//                 </Drawer>
//                 <Main open={open} className="main-container">
//                     <DrawerHeader />
//                     <div className="App-header">
//                         <Switch>
//                             <Route exact path="/">
//                                 <Home />
//                             </Route>
//                             <Route exact path="/hyperbridge">
//                                 {/* <Hyperbridge /> */}
//                             </Route>
//                             <Route exact path="/hyperstack">
//                                 <HyperStack />
//                             </Route>
//                             <Route exact path="/hyperlend">
//                                 <Hyperlend />
//                             </Route>
//                             <Route exact path="/walletpage">
//                                 <WalletPage />
//                             </Route>
//                             <Route exact path="/hyperLaunch">
//                                 <HyperLaunchNew />
//                             </Route>
//                             <Route exact path="/careers">
//                                 <Careers />
//                             </Route>
//                             <Route exact path="/aboutus">
//                                 <AboutUs />
//                             </Route>
//                             <Route path="/termsofservice">
//                                 <Termsofservice />
//                             </Route>
//                             <Route path="/privacypolicy">
//                                 <Privacypolicy />
//                             </Route>
//                             <Route path="/faq">
//                                 <Faq />
//                             </Route>
//                             <Route path="/blogPage">
//                                 <BlogPage />
//                             </Route>
//                             <Route path="/demo">
//                                 <Demo />
//                             </Route>
//                             <Route path="/governance">
//                                 <Governance />
//                             </Route>
//                             <Route path="/wallet">
//                                 <Wallet />
//                             </Route>
//                             <Route path="/tokenomics">
//                                 <Tokenomics />
//                             </Route>
//                             <Route path="/contact">
//                                 <Contact />
//                             </Route>
//                             <Route path="/documentation">
//                                 <Documentation />
//                             </Route>
//                             {/* <Route path="/trading-competition">
//               <TradingCompetition/>
//             </Route> */}
//                             <Route path="/thanks">
//                                 <Thanks />
//                             </Route>
//                             <Route path="/roadmap">
//                                 <Roadmap />
//                             </Route>
//                         </Switch>
//                     </div>
//                     <Footer />
//                 </Main>
//             </Box>
//         </Router>
//     );
// }


// // header



// @media screen and(min - width: 200px)  and(max - width: 550px) {

//     .navList{
//         display: none;
//     }
//     .enterBtn{
//         display: none;
//     }
//     .showLogo{
//         padding - left: 0px;
//     }
// }

