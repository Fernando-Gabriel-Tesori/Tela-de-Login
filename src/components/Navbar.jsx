import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #00ff00, #800080);
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: navbar-fade-in 1s ease-in-out;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    transition: transform 0.3s, opacity 0.3s;
  }

  a:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <NavList>
      <NavItem><a href="#">Home</a></NavItem>
      <NavItem><a href="#">Sobre</a></NavItem>
      <NavItem><a href="#">Serviços</a></NavItem>
      <NavItem><a href="#">Contato</a></NavItem>
    </NavList>
  </NavbarContainer>
);

export default Navbar;
