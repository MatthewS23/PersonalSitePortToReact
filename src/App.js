import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Connecting the Home component that extends React.Component from home.js
import Home from "./Components/home";
//Connecting the Home component that extends React.Component from designDocumentation.js
import designDocumentation from "./Components/designDocumentation"





class App extends React.Component{
  render(){
    return(<BrowserRouter>
      <div className="App">
     
      <Route exact path= "/" component={Home} />
      <Route exact path= "/designDocumentation" component={designDocumentation} />

      </div>


      </BrowserRouter>);
    
  }


}


export {App};
