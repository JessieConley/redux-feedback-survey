import React, { Component } from "react";
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

//import components
import Feeling from '../Feeling/Feeling';
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          
      

          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supported" component={Supported} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
        </div>
      </Router>
    );
  }
}


export default App;
