import React from 'react';
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

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const isOpen = this.state.isOpen;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { brand, navLinks } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="Navigation">
        <Navbar className="nav-bar" color="light" light expand="md">
          <Container>
            <NavbarBrand className="brand" href="/">
              {brand}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle.bind(this)} />
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
