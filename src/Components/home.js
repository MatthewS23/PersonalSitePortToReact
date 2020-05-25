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
                    {/* <Nav.Link 
                    href="#home" style = {{font: "Arial", size: 150, fontWeight: "bold", fontSize: "200%", color: "black"}}>
                        Home
                    </Nav.Link> */}

                    {/* <Nav.Link href="#link"> 
                        
                    <Image

                    //className="d-block w-100"
                    //className = "h-auto d-inline-block w-auto" 
                    className = "d-block w-100"
                    src={require("./images/logoresize2.png")}
                    // width = "10"
                    // height = "5"
                    // max-width = "100%"
                    // max-height = "100%"
                    alt="Third slide"

                    />
                    
                    </Nav.Link> */}

                    <NavDropdown style = {{font: "Arial", fontWeight: "bold", fontSize: "200%", color: "black"}}>
                        <NavDropdown.Item href="./designDocumentation">Design Documentation</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Adventures</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Internship</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Podcasts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Contact Me</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>

          
                <Carousel>
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
                    className="d-block w-100"
                    src= {require("./images/Frands.JPG")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3> Austin Texas </h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
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


                <Container style = {{paddingLeft: true, paddingRight: true, size: "100%", paddingTop: true, paddingBottom: true}}>
                
                <Jumbotron style = {{ size: 50 , opacity:0.4, backgroundImage : "./images/resizeLake5.png", backgroundSize: 'cover'}} >
                    <Container style = {{ size: 50 , opacity:0.4, backgroundImage : "./images/resizeLake5.png", backgroundSize: 'cover'}}>
                    <h2 style = {{textAlign: "center", color: "white"}}> I'm Matthew Sloan</h2>
                    <p style = {{textAlign: "center"}}> This is a reflection of my life from both personal and professional aspects.</p>
                    </Container>
                </Jumbotron>

                </Container>

                <Nav className = "justify-content-center" defaultActiveKey="/home" as="ul">
                    
                    <Nav.Item as="li">
                        <Nav.Link href="/home"
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
                        <Nav.Link eventKey="link-1"
                        //  text-align = "center"
                        >
                         
                         <Image
                         className = "d-block w-100"
                         src={require("./images/upworkLogo4.png")}
                         alt="first slide"
                         />

                    </Nav.Link>

                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1"
                        //  text-align = "center"
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