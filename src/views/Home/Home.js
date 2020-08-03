import React from 'react';
import principal from "../../statics/principal.png";
import "./Home.css"

const Home = () => {
    return(
        <div className="Home" >
        <img alt="MoviePop!" src={principal} className="pure-img" />
        <h1>MoviePop!</h1>
        </div>
    );
}

export default Home;
