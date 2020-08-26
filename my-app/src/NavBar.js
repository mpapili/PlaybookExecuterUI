// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

const NavIcon = styled.div``;

class NavItem extends Component {
    handleClick = () => {
      const { path, onItemClick } = this.props;
      onItemClick(path);
    }
    render() {
        const { active } = this.props;
        return (
            <div>
                test
            </div>
        );
    }
}


class MikesNavBar extends Component {
    render() {
        return (
          <Styles>
            <Navbar expand="lg">
              <Navbar.Brand href="/">ALVN</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>

              {/* Search Bar */}
              <Form className="form-center">
                <FormControl type="text" placeholder="SEARCH" className="" />
              </Form>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
                  <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Styles>        
        );
    }
}

export default MikesNavBar;
export {NavItem};