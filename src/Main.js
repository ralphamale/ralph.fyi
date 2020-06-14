import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Books from "./Books";
import Photos from "./Photos";
import Writing from "./Writing";
import TechExp from "./TechExp";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">ng-RALPH.fyi</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/hire">Tech Exp / Hire Me!</NavLink></li>
            <li><NavLink to="/books">Books I Like</NavLink></li>
            <li><NavLink to="/photos">Photos</NavLink></li>
            <li><NavLink to="/Writing">Writing</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/books" component={Books}/>
            <Route path="/photos" component={Photos}/>
            <Route path="/writing" component={Writing}/>
            <Route path="/contact" component={Contact}/>   
            <Route path="/hire" component={TechExp}/>          
          </div>
          <hr/>
          <footer class={"crypto"}> 
          <p>BTC: 3C8aVtMtn6YjSPVNHgQ7ZKqmgtMPBBjTKP</p>
          <p>ETH: 0x437cc37d686D5246244Ae922e5f436C0f1AF37E5</p>
          <p>Powered by React and deployed through Netlify</p>
        </footer>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;