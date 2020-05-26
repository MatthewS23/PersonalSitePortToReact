import React from "react";

//import all of bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

//importing bootstrap components
import { Container, Button,  Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Image, Jumbotron } from 'react-bootstrap';

//import {useWindowDimensions} from 'react-native';

console.log("The landingPage.js file is being touched");

class landingPage extends React.Component {




    render(){
        return(
            <div>
                
                <>
                <Navbar bg="dark" variant = "dark" expand="lg">
                <Navbar.Brand href="./" style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>whoismatthewsloan.com </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    <NavDropdown style = {{font: "Arial", fontWeight: "bold", fontSize: "200%", color: "black"}}>
                        <NavDropdown.Item href="./designDocumentation">Architectural Design</NavDropdown.Item>
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
                </Navbar.Collapse>
                </Navbar>
                </>
               <>
                    <img className = "rounded float-left" src = {require("./images/Matthew.png")}
                    style = {{padding: "25px", borderStyle: "groove", borderWidth: "medium", borderRadius: "25px", 
                    position: "bottomleft"}}/>
                </>
                 
                {/* <Container fluid>
                <Image src = {require("./images/Matthew.png")} fluid>
                </Image>
                </Container> */}
               

                {/* <img className = "fixed-bottom" style = {{padding: "25px", borderStyle: "groove", borderWidth: "medium", borderRadius: "25px", position: "bottomleft"}}
                src = {require("./images/Matthew.png")}
                />
                
                <img 
                src = {require("./images/internshipPic.jpg")}
                /> */}
                </div>

            

        )
    }
}

export default (landingPage);

    
