import React from "react";

import './home.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, Button,  Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';


console.log("The Home.js file is being touched");


class Home extends React.Component {


    render(){
        return(
            
           
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Hi i'm Matthew</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Design Documentation</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Adventures</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Internship</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Podcasts</NavDropdown.Item>
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
                    className="d-block w-100"
                    src = {require("./images/austinPowerlines.jpg")}
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

        );
        };
    
};

export default (Home);