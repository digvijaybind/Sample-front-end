import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Hyperswap from './components/Hyperswap/Hyperswap';
import Hyperbridge from './components/Hyperbridge/new';
import Hyperlend from './components/hyperlend/Hyperlend';
import Hyperlaunch from './components/Hyperlaunch/Hyperlaunch';
import About from './components/About/About';
import Termsofservice from './components/Termsofservice/Termsofservice';
import Privacypolicy from './components/Privacypolicy/Privacypolicy';
// import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Governance from './components/Governance/Governance';
import Wallet from './components/Wallet/Wallet';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Contact from './components/Contact/Contact';
import Thanks from './components/Thanks/Thanks';
import Documentation from './components/Documentation/Documentation';
import TradingCompetition from './components/TradingCompetition/TradingCompetition';
import Demo from './components/Demo/Demo';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from "./components/Finalfooter/Footer"
import Header from './components/Banner/Header';
import Careers from './components/careers/Careers';
import "./layout.scss"
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    // display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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

    return (
        <Router>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ background: 'black' }} open={open}>
                    <Toolbar>
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Header />

                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Main open={open} className='main-container'>
                    <div className="App-header">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/hyperbridge">
                                <Hyperbridge />
                            </Route>
                            <Route exact path="/hyperswap">

                            </Route>
                            <Route exact path="/hyperlend">
                                <Hyperlend />
                            </Route>
                            <Route exact path="/careers" >
                                <Careers />
                            </Route>
                            <Route exact path="/hyperlaunch">
                                <Hyperlaunch />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route path="/termsofservice">
                                <Termsofservice />
                            </Route>
                            <Route path="/privacypolicy">
                                <Privacypolicy />
                            </Route>
                            <Route path="/faq">
                                <Faq />
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
                            <Route path="/tokenomics">
                                <Tokenomics />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/documentation">
                                <Documentation />
                            </Route>
                            {/* <Route path="/trading-competition">
              <TradingCompetition/>
            </Route> */}
                            <Route path="/thanks">
                                <Thanks />
                            </Route>
                            <Route path="/roadmap">
                                <Roadmap />
                            </Route>
                        </Switch>
                    </div>


                </Main>
            </Box>
        </Router>

    );
}
