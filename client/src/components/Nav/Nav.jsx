import React from "react";
import { Navbar, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar
      className="blue-grey darken-3"
      alignLinks="left"
      brand={
        <Link className="brand-logo right" to="/">
          Joseph Perry | Portfolio
        </Link>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      {/* <NavItem onClick={function noRefCheck() {}}>Getting started</NavItem>
      <NavItem href="components.html">Components</NavItem> */}
      {/* <NavItem> */}
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </Navbar>
  );
};

export default Nav;
