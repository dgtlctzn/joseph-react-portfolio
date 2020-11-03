import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <Navbar
      alignLinks="left"
      brand={
        <Link className="brand-logo right" to="/">
          Logo
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
      <NavItem onClick={function noRefCheck() {}}>Getting started</NavItem>
      <NavItem href="components.html">Components</NavItem>
    </Navbar>
  );
};

export default Nav;
