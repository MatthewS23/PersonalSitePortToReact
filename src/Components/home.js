//import {BrowserRouter} from "react-router-dom";
import React from "react";

import './home.css';

console.log("The Home.js file is being touched");


// function displayHTML(){
        
//     const testDisplay = (
//         <h2> This is the Home Page</h2>
//     );
//     console.log("The function is working");
//     return testDisplay;
// };


class Home extends React.Component {

    //render

    // React.createElement(myButton,
    //     {color: 'blue'},
    //     'Click ME'

    // );

    render(){
        return(

            //<div style = {{"color : "cyan"}}>
            <div>
                <h2> This is rendering HTML</h2>
                <h4>Rendering an additional header in one encompassing division</h4>
                <button>
                    Testing Button
                </button>
                


            </div>



        //displayHTML
        
        //<h4> Adding additional information</h4>
        );
        };
    // render(){
    //     return(
    //         <h4> Can I render two returns? </h4>
    //     )
    // }   
};

export default (Home);