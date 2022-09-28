import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import "./commoncss/Common.scss"
import { Route, Switch, HashRouter as Router, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Hyperswap from "./components/Hyperswap/Hyperswapnewpage";
import Hyperbridge from "./components/Hyperbridge/Hyperbridgelaunch";
import Hyperlend from "./components/hyperlend/hyperlendnew"
import Hyperlaunch from "./components/Hyperlaunch/HyperlaunchNew";
import Faq from "./components/Faq/Faq";
import Governance from "./components/Governance/Governance";
import Wallet from "./components/Wallet/Wallet";

import Thanks from "./components/Thanks/Thanks";
import Documentation from "./components/Documentation/Documentation";

import Demo from "./components/Demo/Demo";
import Roadmap from "./components/Roadmap/Roadmap";
import Footer from "./components/Finalfooter/Footer";
import Header from "./components/Banner/Header";
import HyperStack from "./components/HyperStack";
import subMenuList from "./menuList/Menulist";
import Sample from "./components/sample/Sample"
// import subMenuList from "./menuList";
import { Collapse } from "antd";
import "./layout.scss";
import Careers from "./components/careers/Careers";
import BlogPage from "./components/blog/Blog";
import PartnerShip from './components/Partners/Partners';
import About from "./components/About/About"
import Horizontalblur from "./assets/image/menu/Horizontalmenu.svg"

const { Panel } = Collapse;
// const theme = createTheme({
//     xs: "0px",
//     sm: "600px",
//     md: "960px",
//     lg: "1280px",
//     xl: "1920px",
//     typography: {
//         fontFamily: ["Plus Jakarta Sans"].join(","),
//     },
// });
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

// const DrawerHeader = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
// }));

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
//             <Box>
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
//                             {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}
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
//                                                 );
//                                             })}
//                                         </div>
//                                     </Panel>
//                                 );
//                             })}
//                         </Collapse>
//                     </div>
//                 </Drawer>
//             </Box>
//             <Box
//                 style={{
//                     marginTop: "100px",
//                     width: "100%",
//                     height: "100%",
//                     minHeight: "100vh",
//                 }}
//             >
//                 <ThemeProvider theme={theme}>
//                     <Switch>
//                         <Route exact path="/">
//                             <Home />
//                         </Route>
//                         <Route exact path="/hyperbridge">
//                             <Hyperbridge />
//                         </Route>
//                         <Route exact path="/hyperswap">
//                             <Hyperswap />
//                         </Route>
//                         <Route exact path="/hyperlend">
//                             <Hyperlend />
//                         </Route>
//                         <Route exact path="/hyperlaunch">
//                             <Hyperlaunch />
//                         </Route>
//                         <Route exact path="/hyperstack">
//                             <HyperStack />
//                         </Route>
//                         <Route exact path="/about">
//                             <About />
//                         </Route>
//                         <Route path="/termsofservice">
//                             <Termsofservice />
//                         </Route>
//                         <Route path="/blog">
//                             <BlogPage />
//                         </Route>
//                         <Route path="/partnership" >
//                             <PartnerShip />
//                         </Route>
//                         <Route path="/privacypolicy">
//                             <Privacypolicy />
//                         </Route>
//                         <Route path="/faq">
//                             <Faq />
//                         </Route>
//                         <Route path="/demo">
//                             <Demo />
//                         </Route>
//                         <Route path="/governance">
//                             <Governance />
//                         </Route>
//                         <Route path="/careers">
//                             <Careers />
//                         </Route>
//                         <Route path="/wallet">
//                             <Wallet />
//                         </Route>

//                         <Route path="/tokenomics">
//                             <Tokenomics />
//                         </Route>
//                         <Route path="/contact">
//                             <Contact />
//                         </Route>
//                         <Route path="/documentation">
//                             <Documentation />
//                         </Route>
//                         {/* <Route path="/trading-competition">
//   <TradingCompetition/>
// </Route> */}
//                         <Route path="/thanks">
//                             <Thanks />
//                         </Route>
//                         <Route path="/roadmap">
//                             <Roadmap />
//                         </Route>
//                     </Switch>
//                 </ThemeProvider>
//                 <Footer />
//             </Box>
//         </Router>
//     );
// }


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

// import Careers from "./components/Careers";
// import WalletPage from "./components/WalletPage";
// import HyperStack from "./components/HyperStack";
// import BlogPage from "./components/blog/Blog";



// import subMenuList from "./menuList";
// import { Collapse } from "antd";
// import CloseIcon from '@mui/icons-material/Close';
// const { Panel } = Collapse;

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function Layout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} className="layout-header">
                    <Toolbar>
                        <Header />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: "none" }) }}
                            className="menuIcon"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    className="mob-sider"
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose} className="menuic">
                            {theme.direction === "ltr" ? (
                                <CloseIcon />
                            ) : (
                                <CloseIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <div className="side-list-nav">
                        <Collapse
                            defaultActiveKey={["0"]}
                            onChange={onChange}
                            expandIconPosition="end"
                        // expandIcon={({ isActive }) =>
                        //   isActive ? <MinusOutlined /> : <PlusOutlined />
                        // }
                        >
                            {subMenuList?.map((data, index) => {
                                return (
                                    <>
                                        {data.subMenu.length > 0 ?
                                            <Panel forceRender={true} header={data.name} showArrow={data.subMenu.length > 0 ? true : false} key={index}>
                                                {data.subMenu.length > 0 && <div>
                                                    {data.subMenu?.map((val, id) => {
                                                        return (
                                                            <div>
                                                                {val.path.includes("https") ? (
                                                                    <a href={val.path} className="showLink">
                                                                        {val.name}
                                                                    </a>
                                                                ) : (
                                                                    <Link to={val.path} className="side-list-header">{val.name}</Link>
                                                                )}

                                                            </div>
                                                        )
                                                    })}
                                                </div>}
                                            </Panel>
                                            :
                                            <div className="mob-sublist">
                                                <Link className="side-listheader" to={data.path}>{data.name}</Link>
                                            </div>

                                        }
                                    </>
                                );
                            })}
                        </Collapse>
                    </div>
                </Drawer>
                <Main open={open} className="main-container">
                    <DrawerHeader />
                    <div className="App-header">
                        <ThemeProvider theme={theme}>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/hyperbridge">
                                    <Hyperbridge />
                                </Route>
                                <Route exact path="/hyperstake">
                                    <HyperStack />
                                </Route>
                                <Route exact path="/hyperlend">
                                    <Hyperlend />
                                </Route>
                                <Route exact path="/partner">
                                    <PartnerShip />
                                </Route>
                                <Route exact path="/hyperswap">
                                    <Hyperswap />
                                </Route>
                                <Route exact path="/wallet">
                                    <Wallet />
                                </Route>
                                <Route exact path="/hyperLaunch">
                                    <Hyperlaunch />
                                </Route>
                                <Route exact path="/careers">
                                    <Careers />
                                </Route>
                                <Route exact path="/about">
                                    <About />
                                </Route>

                                <Route path="/faq">
                                    <Faq />
                                </Route>
                                <Route path="/blog">
                                    <BlogPage />
                                </Route>
                                <Route path="/demo">
                                    <Demo />
                                </Route>
                                <Route path="/governance">
                                    <Governance />
                                </Route>
                                <Route path="/wallet">
                                    <Wallet />
                                </Route>

                                <Route path="/documentation">
                                    <Documentation />
                                </Route>

                                <Route path="/thanks">
                                    <Thanks />
                                </Route>
                                <Route path="/roadmap">
                                    <Roadmap />
                                </Route>

                            </Switch>
                        </ThemeProvider>
                    </div>
                    <Footer />
                </Main>
            </Box>
        </Router>
    );
}


