import React from "react";

//import all of bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


//import my simple css file
import './designDocumentation.css';


//importing bootstrap components
import { Container, Button,  Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Image, Jumbotron, Table } from 'react-bootstrap';
import { withRouter } from "react-router-dom";


class about extends React.Component {

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

            <h5 style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy", padding: "20px" }}> I am passionate about solving complex problems with simple and innovative solutions.
            </h5>



            {/*<Container className = "justify-content-center" style = {{ padding: "25px", alignSelf: 'center'}}>*/}
                <Image src= {require ("./images/IMG_6388.JPG")} className="rounded mx-auto d-block" style = {{ height: "37%", width: "37%", padding: "25px" }}  />
            {/*</Container>*/}
            <Container style = {{padding: "5px"}}>

                <h5 style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>Overview of Technologies and Corresponding Knowledge level: </h5>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Infrastructure</th>
                        <th>Frontend</th>
                        <th>Backend</th>
                        <th>Database</th>
                        <th>CI/CD</th>
                        <th>Command Line/Package Managers</th>
                        <th>Software Development Lifecycle</th>
                        <th>OS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Digital Ocean, familiar with Linux OS Server Management through Command Line and GUI interfaces. IT Security Audit: AWS, Microsoft Azure, and Google </td>
                        <td>JavaScript, HTML, CSS, React.js</td>
                        <td>Python, Node.js, Express.js(API development and third Party API interaction)</td>
                        <td>mySQL, MongoDB</td>
                        <td>CircleCI</td>
                        <td>Bash, NPM, APT, MongoDB, mySQL, Java</td>
                        <td>Agile Scrum Methodology</td>
                        <td>Linux Ubuntu, Mac, Windows</td>
                    </tr>

                    </tbody>
                    <tbody>
                    <tr>
                        <td>Advanced</td>
                        <td>Intermediate</td>
                        <td>Advanced</td>
                        <td>Advanced</td>
                        <td>Entry</td>
                        <td>Advanced</td>
                        <td>Fundamental </td>
                        <td>Advanced</td>
                    </tr>

                    </tbody>
                </Table>
            <p style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy", padding: "10px" }}>While completing my degree in Computer Information Science with a minor in Accounting at St. Edward’s University I was a part of three scrum teams, continuously repeating the software development lifecycle, to deliver web applications. Through these projects I was able to attain the fundamental skills as a full stack software engineer. These experiences include: designing, developing, and testing REST APIs (node.js and python), react.js applications, web server HTTP request handlers, and static HTML/CSS files. In the realm of databases I have experience designing and implementing relational and non-relational databases such as mongodb and mySQL. Additionally I am proficient in NGINX reverse proxies, Bash Command line, GitHub and Bitbucket using Git, architectural and user experience design, and Linux/Microsoft/Mac.
                
            </p>
                <h5 style = {{color: "white", textAlign: "center", textShadow: "2px 2px 5px navy" }}>Contact me at matthew.sloan23@gmail.com for inquiries</h5>
            </Container>
            <p style = {{padding: "20px"}}></p>
        </>


        </div>
            )

            }
            }
            export default (about);
