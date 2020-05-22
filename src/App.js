import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./Components/home";



class App extends React.Component{
  render(){
    return(<BrowserRouter>
      <div className="App">
     
      <Route exact path= "/" component={Home} />

      </div>


      </BrowserRouter>);
    
  }


}


export {App};
