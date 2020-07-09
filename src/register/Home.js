import React from 'react';
import Weather from './Weather';
// import './Weather.css';

const Home = () => {

    return(
        <div>
            <div className="container">
            <p className="float-left mt-3 one"><b className="mr-2">Date and Time(IST):</b>{Date()}</p>
            </div>
            <br /><br ></br>
          <Weather></Weather> 
          </div>
    )
}

export default Home;