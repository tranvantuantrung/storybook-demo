import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

import './Navigation.css';

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { brand, navLinks } = props;
  return (
    <div className="Navigation">
      <Navbar className="nav-bar" color="light" light expand="md">
        <Container>
          <NavbarBrand className="brand" href="/">
            {brand}
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              {navLinks.map((item, index) => {
                return (
                  <NavItem className="navItem" key={index}>
                    <NavLink className="mx-3" href={item.link}>
                      {item.name}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Navigation.propTypes = {
  brand: PropTypes.string.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
