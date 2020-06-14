import React, { Component } from "react";
import CubaImg from "./cuba.jpg";
import HalloweenImg from "./halloween.jpg";
import India1Img from "./india.jpg";
import India2Img from "./india2.jpg"
import JapanImg from "./japan.jpg";
import MachuImg from "./machu.jpg";
import PretzelImg from "./pretzel.jpg";
import TajImg from "./taj.jpg";
class Photos extends Component {
  render() {
    return (
      <div className="photo">
        <h2>Photos</h2>

        <p>Sorry, I do not have an OnlyFans at this time.</p>
        
        <img src={PretzelImg} />

        <p>With Pretzel, my dog I adopted in Las Vegas</p>

        <img src={HalloweenImg} />

        <p>When I shaved my head bald</p>

        <img src={India1Img} />

        <p>Indian photo shoot with our bespoke attire</p>

        <img src={CubaImg} />

        <p>Playing with dolphins on a trip to Cuba</p>

        <img src={India2Img} />

        <p>Overlooking Rajasthan in India</p>

        <img src={JapanImg} />

        <p>Stopping in Japan after a wedding in Korea</p>
        <img src={MachuImg} />

        <p>On the way to Machu Picchu after a week of spiritual ceremonies</p>

        <img src={TajImg} />

        <p>You probably know where this is.</p>


      </div>
    );
  }
}
 
export default Photos;

