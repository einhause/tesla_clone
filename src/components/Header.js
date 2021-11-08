import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  /* header 
      1. Logo
      2. Car links (to go to certain area on page)
      3. additional links
        1) shop
        2) account
        3) hamburger
    */

  return (
    <Container>
      <Brand>
        <a href='#'>
          <img src='/images/logo.svg' alt='Tesla' />
        </a>
      </Brand>
      <MainMenu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </MainMenu>
      <SideMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <Hamburger />
      </SideMenu>
    </Container>
  );
}

export default Header;

const Container = styled.nav`
  min-height: 5rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;
  top: 0;
  left: 0;
  right: 0;
`;

const Brand = styled.div``;

const MainMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 0.7rem;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
    margin-right: 0.7rem;
  }
`;

const Hamburger = styled(MenuIcon)`
  cursor: pointer;
`;
