import React  from 'react';
import styled from 'styled-components'



import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, } from 'react-bootstrap';


const Styles = styled.div`
    .navbar {
        background: none;
    }
    #responsive-navbar-nav {
        background: none;
    }
    .ml-auto {
        background: none;
    }
    .bg-cover {
        background: none;
    } 
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover {
            color: white;
        }
    }
    `;
const NavigationBar = ()  =>(
    
        
           <Styles>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">ALCafè</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link href="/about">Home</Nav.Link>
      <Nav.Link href="/shop">Shop</Nav.Link>
      
    </Nav>
    <Nav className="bg-cover">
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      <Nav.Link eventKey={2} href="register">
        Sign-up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          
           </Styles>    
        
   
)

export default NavigationBar

