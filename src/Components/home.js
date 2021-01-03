import React from "react";

//import all of bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

//import my simple css file 
import './home.css';

//importing bootstrap components
import { Container, Button,  Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Image, Jumbotron } from 'react-bootstrap';

 //importing sass variable changes(specifically for jumbotron)
// import './home.scss'

//attempt to import image from file route to be stored as a variable -- unable to create background image for jumbotron
import bgimage from './images/resizeLake5.png'

console.log("The Home.js file is being touched");

class Home extends React.Component {


    render(){
        return(
            
           
            <div>
                <Navbar bg="dark" variant = "dark" expand="lg">
                <Navbar.Brand href="./" style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>whoismatthewsloan.com </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">


                    <NavDropdown style = {{font: "Arial", fontWeight: "bold", fontSize: "200%", color: "black"}}>
                        <NavDropdown.Item href="./designDocumentation">Architectural Design</NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/MatthewS23">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="https://sites.stedwards.edu/seucareer/2018/10/03/student-spotlight-matthew-sloan-20/">Internship</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/matthew-sloan/">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="./about">About/Contact</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                    <>

                <Carousel style = {{ margin: "25px 25px 25px 25px", padding: "25px", borderStyle: "groove", borderWidth: "small", borderRadius: "5px"}}>
                <Carousel.Item>
                    <img
                    className="c-block w-100 h-100"
                    src = {require("./images/Guitar.JPG")}
                    alt="second"
                    />
                    <Carousel.Caption>
                    <h3>Austin Texas</h3>
                
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100  h-100"
                    src= {require("./images/Frands.JPG")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3> Austin Texas </h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100  h-100"
                    src={require("./images/newestProfilePic.png")}
                    alt="Third slide"
                    width = "15%"
                    height = "15%"
                    />

                    <Carousel.Caption>
                    <h3>Austin Texas</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                    </>

                <Container style = {{paddingLeft: true, paddingRight: true, size: "100%", paddingTop: true, paddingBottom: true}}>
                
                <Jumbotron style = {{ size: 50 , backgroundImage : "./images/resizeLake5.png", backgroundSize: 'cover'}} >
                    <Container style = {{ size: 50 , opacity:0.95, backgroundImage : "./images/resizeLake5.png", backgroundSize: 'cover'}}>
                    <h2 style = {{textAlign: "center", color: "white"}}> Professional Profiles Below</h2>
                    </Container>
                </Jumbotron>

                </Container>

                <Nav className = "justify-content-center" defaultActiveKey="/home" as="ul">
                    
                    <Nav.Item as="li">
                        <Nav.Link href="https://www.linkedin.com/in/matthew-sloan/"
                        // text-align = "center"
                        >
                        
                        <Image
                        className = "d-block w-100"
                        src={require("./images/logoresize2.png")} fluid
                        alt="Third slide"
                        />

                        </Nav.Link>

                    </Nav.Item>


                    <Nav.Item as="li">


                        <Nav.Link href="https://github.com/MatthewS23"
                            // text-align = "center"
                        >

                         <Image
                         className = "d-block w-100"
                         src={require("./images/githublogo.png")}
                         alt="first slide"
                         />

                    </Nav.Link>

                    </Nav.Item>
                   
                    </Nav>
                    
            </div>

        );
        };
    
};

export default (Home);
