import React from 'react';
import styled from "styled-components";

import StyledNavItem from './NavBar.js';
import NavIcon from './NavBar.js';
import Link from "react-router-dom";

// FontAwesome Icons
import { faHome, faClock, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 75px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        );
    }
}

class NavItem extends React.Component {
    handleClick = () => {
        // const { path, onItemClick } = this.props;
        const path = this.props.path;
        const onItemClick = this.props.clickFunc;
        console.log("handling!");
        onItemClick(path);
    }

    render() {
        return(
            <div style={{color: 'white'}}>
                <FontAwesomeIcon icon={this.props.icon} style={{color: '#9FFFCB', height: '100%', width: '30px', paddingTop: '10px'}} onClick={this.handleClick}/>
            </div>
        );
    }
}



class SideNav extends React.Component {

    onItemClick = (path) => {
        console.log("running onItemClick");
        window.location = path;
        this.setState({ activePath: path });
    }

    render() {
            const items = [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'Home',
                  css: 'fa fa-fw fa-home',
                  key: 1, /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                  icon: faHome
                },
                {
                  path: '/about',
                  name: 'About',
                  css: 'fa fa-fw fa-clock',
                  key: 2,
                  icon: faClock
                },
                {
                  path: '/NoMatch',
                  name: 'NoMatch',
                  css: 'fas fa-hashtag',
                  key: 3,
                  icon: faHashtag
                },
              ]    
            
            return(
                <StyledSideNav>
                    {
                        items.map((item) => {
                            return (
                                <NavItem key={item.key} icon={item.icon} clickFunc={this.onItemClick}
                                 path={item.path}></NavItem>
                            );
                        })
                    }
                </StyledSideNav>
            );
    }
}