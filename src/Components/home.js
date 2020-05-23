//import {BrowserRouter} from "react-router-dom";
import React from "react";

import './home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './home.scss';

//import { buttonFromJSXFile } from './component1';

import { Container, Button,  Row, Col, Carousel, Image } from 'react-bootstrap';


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
                <Button>
                    Testing Button
                </Button>
                
               
                <Container>
                    <Row>
                        <span>This is a row in a container</span>
                    </Row>
                    <Row> 
                        This is an additional Row 
                    </Row>
                    <Col>This is a container</Col><Col> An additional column</Col>
                    
                </Container>
                <Carousel>
                    <Carousel.Item>
                        <Image
                        className = "d-block w-100"
                        src = {require("./images/austinPowerlines.jpg")}
                        alt = "first slide"
                        
                        />
                        
                        
                    </Carousel.Item>
                    <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />
    </Carousel.Item>

                </Carousel>




<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






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