import { makeStyles } from "@mui/styles";

import WaveBackground from "../../assets/image/hyperbridge/wave1.png"

const useStyles = makeStyles((theme) => ({
    wrapper: {


        width: "100vw"



    },
    Toprow: {


        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "60px !important"

        },

        [theme.breakpoints.up("lg")]: {

            paddingLeft: "150px",
            paddingTop: "60px"
        },
        [theme.breakpoints.up("xl")]: {
            paddingLeft: "150px",
            paddingTop: "60px"

        }

    },
    TopContainer: {


    },
    HybperbridgeImgstyle: {

    },
    header: {
        fontFamily: "PlusjakartaSans !important",
        fontSize: "2rem !important",



        color: "#fff",
        fontWeight: "700",

        marginBottom: "30px !important",
        [theme.breakpoints.down('md')]: {

            fontFamily: "PlusjakartaSans !important",
            marginBottom: "15px !important",

        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.6rem !important",
            fontFamily: "PlusjakartaSans !important",
            fontWeight: "700",
            marginBottom: "10px !important",


        },

        [theme.breakpoints.up("lg")]: {

            fontFamily: "PlusjakartaSans !important",
            marginBottom: "30px !important",


        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "2.5rem !important",
            fontFamily: "PlusjakartaSans !important",
            marginBottom: "30px !important",

        }
    },
    Subheader: {
        fontFamily: "PlusjakartaSans !important",
        //     font- style: normal;
        // font - weight: 700;

        // line - height: 64px;
        /* or 133% */


        /* Main white */



        color: "#D0D4DE",
        fontWeight: "700",

        marginBottom: "30px",

        [theme.breakpoints.down('md')]: {

            fontSize: "1rem !important",
            fontFamily: "PlusjakartaSans !important",
            fontWeight: "700",
            marginBottom: "30px !important",


        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem !important",
            fontFamily: "PlusjakartaSans !important",

            marginBottom: "30px !important",


        },

        [theme.breakpoints.down("lg")]: {
            fontSize: "0.8rem !important",
            fontFamily: "PlusjakartaSans !important",
            marginBottom: "30px !important",



        },
        [theme.breakpoints.down("xl")]: {
            fontSize: "0.9rem !important",
            fontFamily: "PlusjakartaSans !important",
            marginBottom: "30px !important",


        }
    },
    SecondRow: {
        backgroundImage: "url(${IntegrateEVM})",

        width: "100vw",
        height: "80vh"



    },
    SecondRowwrapper: {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"

    },
    Dollarsign: {
        fontSize: "2rem !important",
        fontFamily: "PlusjakartaSans_bold !important",
        background: "linear-gradient(88.49deg, #7AFBE4 48.72%, #4A54F4 84.08%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent",
        [theme.breakpoints.down('md')]: {

            fontSize: "0.7rem !important",
            fontFamily: "PlusjakartaSans_bold !important",
            fontWeight: "700",


        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.5rem !important",
            fontFamily: "PlusjakartaSans_bold !important",
            fontWeight: "700",


        },

        [theme.breakpoints.down("lg")]: {
            fontSize: "0.8rem !important",
            fontFamily: "PlusjakartaSans_bold !important",



        },
        [theme.breakpoints.down("xl")]: {
            fontSize: "1rem !important",
            fontFamily: "PlusjakartaSans_bold !important",


        }

    },
    dollorLower: {

        color: "#D0D4DE",
        [theme.breakpoints.down('md')]: {

            fontSize: "0.8rem !important",
            fontFamily: "PlusjakartaSans !important",


        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.6rem !important",
            fontFamily: "PlusjakartaSans !important",



        },
        [theme.breakpoints.down("xl")]: {
            fontSize: "0.6rem !important",

            fontFamily: "PlusjakartaSans !important",


        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1rem !important",





        },

    },
    dollarwrapper: {
        borderRight: "solid 1px #D0D4DE",
        display: "flex",
        alignItems: "center"
    },
    FiveIntegratedwrapper: {
        display: "flex",
        justifyContent: "center"

    },
    FiveNoasset: {
        fontSize: "1.5 rem !important",
        fontFamily: "PlusjakartaSans_bold !important",
        marginRight: "10px",
        color: "#fff"


    },
    Integratedtext: {

        fontFamily: "PlusjakartaSans !important",
        color: "#D0D4DE",
        [theme.breakpoints.down('md')]: {

            fontSize: "0.6rem !important",

        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.7rem !important",




        },
        [theme.breakpoints.down("xl")]: {

            fontSize: "0.5 rem !important",

        },
        [theme.breakpoints.down("lg")]: {


            fontSize: "0.7rem !important",




        },

    },
    CardView: {
        color: "#D0D4DE",
        background: "#182835",
        padding: "0 2rem !important",
        borderRadius: "20px",
        height: "fit-content",
        margin: "10px !important",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.3 rem !important"
    },
    Cardtitle: {
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "32px",

        /* or 138% */


        /* Main white */

        color: "#D0D4DE",


        /* Inside auto layout */

        flex: "none",
        order: "0",
        flexGrow: 0
    },
    CardDescripation: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",

        /* or 175% */


        color: "#FFFFFF",

        opacity: "0.5",

        /* Inside auto layout */

        flex: "none",
        order: "1",
        flexGrow: 0

    },
    WaveRow: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"

    },
    Wavebackground: {
        backgroundImage: `url(${WaveBackground})`,
        height: "60vh",
        backgroundSize: "cover",
        wrap: "nowwrap",
        [theme.breakpoints.down('md')]: {
            paddingTop: "6px"

        },
        [theme.breakpoints.down("sm")]: {




        },
        [theme.breakpoints.down("xl")]: {



        },
        [theme.breakpoints.up("lg")]: {





        },


    },
    Waveheader: {
        fontFamily: "PlusjakartaSans !important",
        fontStyle: "normal",
        fontWeight: "700",



        color: "#FFFFFF",
        [theme.breakpoints.down('md')]: {
            fontSize: "1.5rem !important",


        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.6rem !important",




        },
        [theme.breakpoints.down("xl")]: {

            fontSize: "1rem !important",
            marginBottom: "50px"

        },
        [theme.breakpoints.up("lg")]: {

            fontSize: "2rem !important",




        },
    },
    Subheaderwrapper: {
        marginBottom: "30px"
    },
    WaveSubheader: {
        fontFamily: "PlusjakartaSans !important",
        fontStyle: "normal",
        fontWeight: "400",


        /* or 175% */


        /* Main white */

        color: "#D0D4DE",

        opacity: "0.7",
        [theme.breakpoints.down('md')]: {
            fontSize: "1.5rem !important",



        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.9rem !important",




        },
        [theme.breakpoints.down("xl")]: {

            fontSize: "0.6rem !important",

        },
        [theme.breakpoints.down("lg")]: {

            fontSize: "1rem !important",



        },
    },
    WaveContentWrapper: {
        [theme.breakpoints.down('md')]: {

            display: "flex",
            flexWrap: "wrap"

        },
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexWrap: "wrap"



        },
    },
    Fourthwrapper: {


    },
    FourthContent1: {
        textAlign: "center",
        fontSize: "48px",
        fontFamily: " PlusjakartaSans_bold"

    },
    FourthContent2: {
        textAlign: "center",
        fontSize: "px",
        fontFamily: " PlusjakartaSans_bold"

    },
    Sixwrapper: {
        display: "flex",
        justifyContent: "center",

    },
    SixContent1: {
        fontFamily: 'PlusjakartaSans !important',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "36px",
        lineHeight: "48px",
        /* or 133% */

        textAlign: "center",

        /* Main white */
        color: "#fff",
        [theme.breakpoints.down('md')]: {


        },
        [theme.breakpoints.down("sm")]: {


        },
        [theme.breakpoints.down("xl")]: {



        },
        [theme.breakpoints.up("lg")]: {





        },



    },
    SixContent2: {
        fontFamily: 'PlusjakartaSans !important',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",

        /* or 175% */

        textAlign: "center",

        /* Main white */

        color: "#D0D4DE",

        opacity: "0.7",
        [theme.breakpoints.down('md')]: {




        },
        [theme.breakpoints.down("sm")]: {




        },
        [theme.breakpoints.down("xl")]: {

        },
        [theme.breakpoints.up("lg")]: {




        },


    },
    NineContent1: {
        textAlign: "center",
        fontFamily: 'PlusjakartaSans !important',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "32px",

        /* or 178% */



        /* Main white */

        color: "#D0D4DE",
        [theme.breakpoints.down('md')]: {




        },
        [theme.breakpoints.down("sm")]: {




        },
        [theme.breakpoints.down("xl")]: {



        },
        [theme.breakpoints.up("lg")]: {




        },


    },
    SevenWrapper: {
        display: "flex",
        justifyContent: "center",
        px: "115px"


    },
    SevenContainer: {
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(54px)",
        /* Note: backdrop-filter has minimal browser support */

        borderRadius: "20px",
        padding: "60px"
    },
    Ninewrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "162px 282px 158px 282px"

    },
    Licenter: {
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(88.49deg, #7AFBE4 48.72%, #4A54F4 84.08%)"
    },
    Boxtitle: {

        fontFamily: 'PlusjakartaSans !important'
    },
    Boxdescripation: {
        fontFamily: 'PlusjakartaSans !important'
    },
    AuditSection: {
        /* width: 95%; */
        display: "flex",
        justifyContent: "center"
    },

    auditLeft: {
        /* width: 50%; */
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "1rem",
        flexDirection: "column"
    },
    auditRight: {
        padding: "1rem",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "10px",
        color: "#d0d4de",
        /* width: 50%; */
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column"
    },
    Auditbtn: {
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "2rem"
    },
    Auditbtn: {
        width: "40%",
        margin: "6px",
        height: "55px",
        background: "#0C1120",
        opacity: "0.9",
        border: "1px solid #99F8D0",
        boxShadow: "-3px -9px 24px -9.5px #5DEEB1",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }






}));

export { useStyles };