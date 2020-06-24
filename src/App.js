import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Connecting the Home component that extends React.Component from home.js
import Home from "./Components/home";

//Connecting the Home component that extends React.Component from designDocumentation.js
import designDocumentation from "./Components/designDocumentation";

//Connecting the Landing Page component that extends React.Component from designDocumentation.js
import landingPage from "./Components/landingPage";

//Connecting the Landing Page2 component that extends React.Component from designDocumentation.js
import landingPage2 from "./Components/landingPage";

import about from "./Components/about";

import iam_frontend from "./Components/iam_frontend"

class App extends React.Component{
  render(){
    return(<BrowserRouter>
      <div className="App">
     
      <Route exact path= "/" component={Home} />
      <Route exact path= "/designDocumentation" component={designDocumentation} />
      <Route exact path= "/about" component={about} />
      <Route exact path= "/landingPage" component={landingPage} />
      <Route exact path= "/landingPage2" component={landingPage2} />
      <Route exact path = "/IAM" component = {iam_frontend} />
      </div>


      </BrowserRouter>);
    
  }


}


export {App};
