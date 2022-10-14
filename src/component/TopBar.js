import React from 'react'
import ReactBootstrap, {Navbar, Button, Container, Nav, NavDropdown, Form} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useState } from 'react';
import TopSlideBar from './TopSlideBar';

export default function TopBar() {


  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Car Collections</Nav.Link>
            
          </Nav>
          <Link to="PopUpLogin"><Button variant="outline-success mr-1" >Login</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to="PopUpSingUp"><Button variant="outline-success mr-1" >Sing Up</Button></Link>
          
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <TopSlideBar/>
    </div>
  )
}
