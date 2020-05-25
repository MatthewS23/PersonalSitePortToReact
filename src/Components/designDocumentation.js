import React from "react";

//import all of bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';


//import my simple css file 
import './designDocumentation.css';


//importing bootstrap components
import { Container, Button,  Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Image, Jumbotron, Table } from 'react-bootstrap';
import { withRouter } from "react-router-dom";


class designDocumentation extends React.Component {

    render(){
        return(

            <div>
            <Navbar bg="dark" variant = "dark" expand="lg">
            <Navbar.Brand href="./" style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>Architectural Design</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
              

                <NavDropdown style = {{font: "Arial", fontWeight: "bold", fontSize: "200%", color: "black"}}>
                    <NavDropdown.Item href="#action/3.1">Architectural Design</NavDropdown.Item>
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
            <Image src = {require ("./images/swe2SystemDiagram.png")} style = {{padding: "50px", border: "1px solid #ddd", marginLeft: "auto", marginRight: "auto"}} fluid>
            

            </Image>

            <h3 style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>System Diagram for Software Engineering 2 at St. Edward's University</h3>
            <h4 style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>Lennar Home IOT Services for a real time Web Analytics Platform</h4>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Infrastructure</th>
                    <th>Frontend</th>
                    <th>Backend</th>
                    <th>Database</th>
                    <th>My Position</th>
                    <th>Methodology</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Digital Ocean</td>
                    <td>React.js</td>
                    <td>Node.js(Express.js)</td>
                    <td>MongoDB</td>
                    <td>Command in Control</td>
                    <td>Agile Scrum</td>
                    </tr>
                    
                </tbody>
                </Table>
                <Image src = {require ("./images/systemDiagramSoft1.png")} style = {{padding: "50px", border: "1px solid #ddd", marginLeft: "auto", marginRight: "auto"}} fluid>
                </Image>

                <h3 style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>System Diagram for Software Engineering 1 at St. Edward's University</h3>
                <h4 style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>Flower delivery system for autonomous vehicles</h4>


                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Infrastructure</th>
                    <th>Frontend</th>
                    <th>Backend</th>
                    <th>Database</th>
                    <th>My Position</th>
                    <th>Methodology</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Digital Ocean</td>
                    <td>HTML and Javascript</td>
                    <td>Vanilla Python</td>
                    <td>MySQL</td>
                    <td>Rotating Positions</td>
                    <td>Agile Scrum</td>
                    </tr>
                    
                </tbody>
                </Table>

                <Image src = {require ("./images/nextSteps.png")} style = {{padding: "50px", border: "1px solid #ddd", marginLeft: "auto", marginRight: "auto"}} fluid>
                </Image>



            </div>


        )
    }

}

export default (designDocumentation);