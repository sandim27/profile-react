import React from 'react';
import { Nav, NavItem} from 'react-bootstrap';
import { LinkContainer,IndexLinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import './styles/index.css';

const Header = () => {
  return (
    <header>
      <Link className="link-me" to='/'>Me</Link>
      <nav>
        <Nav bsStyle="tabs">
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>My salon</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/location">
            <NavItem eventKey={2}>Location</NavItem>
          </LinkContainer>
          <LinkContainer to="/services">
            <NavItem eventKey={2}>Services</NavItem>
          </LinkContainer>
          <LinkContainer to="/artists">
            <NavItem eventKey={2}>Artists</NavItem>
          </LinkContainer>
          <LinkContainer to="/workinghours">
            <NavItem eventKey={2}>Working Hours</NavItem>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <NavItem eventKey={2}>Gallery</NavItem>
          </LinkContainer>
          <LinkContainer to="/brands">
            <NavItem eventKey={2}>Brands</NavItem>
          </LinkContainer>
        </Nav>
      </nav>
    </header>
  );
}

export default Header;
