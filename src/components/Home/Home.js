import React, { useEffect } from "react";

//import Countfigures from '../../components/Countfigures/Countfigures';
import Allinoneapp from "../../components/Allinoneapp/Allinoneapp";


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="particle">

            <section className="home-wrapper">


                <Allinoneapp />




            </section>
        </div>
    );
};

export default Home;
