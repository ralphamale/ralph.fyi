import React, { Component } from "react";
import HeaderImage from "./contact.jpg";
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Parle moi</h2>
        <img src={HeaderImage} />
         <p><a href={"https://calendly.com/ralphamale"}>Book time</a> with me, or say <a href={"mailto:youre_not_a_bot_are_you@figure_out_the_address_from_my_robotproof_word_play.com"}>hello AT ralph.fyi</a>.</p>
      </div>
    );
  }
}
 
export default Contact;