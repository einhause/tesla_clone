import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, Close } from '@material-ui/icons';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Brand>
        <a href='#'>
          <img src='/images/logo.svg' alt='Tesla' />
        </a>
      </Brand>
      <MainMenu>
        {cars &&
          cars.map((car, index) => (
            <a href='#' key={index}>
              {car}
            </a>
          ))}
      </MainMenu>
      <SideMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <Hamburger onClick={() => setIsBurgerMenuOpen(true)} />
      </SideMenu>
      <BurgerNav show={isBurgerMenuOpen}>
        <CustomCloseWrapper>
          <CustomClose onClick={() => setIsBurgerMenuOpen(false)} />
        </CustomCloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href='#'>{car}</a>
            </li>
          ))}
        <li>
          <a href=''>Existing Inventory</a>
        </li>
        <li>
          <a href=''>Used Inventory</a>
        </li>
        <li>
          <a href=''>Test Drive</a>
        </li>
        <li>
          <a href=''>Cybertruck</a>
        </li>
        <li>
          <a href=''>Roadster</a>
        </li>
        <li>
          <a href=''>Semi</a>
        </li>
        <li>
          <a href=''>Charging</a>
        </li>
        <li>
          <a href=''>Powerwall</a>
        </li>
        <li>
          <a href=''>Commercial Energy</a>
        </li>
        <li>
          <a href=''>Utilities</a>
        </li>
        <li>
          <a href=''>Find Us</a>
        </li>
        <li>
          <a href=''>Support</a>
        </li>
        <li>
          <a href=''>Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  min-height: 5rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Brand = styled.div``;

const MainMenu = styled.nav`
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

const Hamburger = styled(Menu)`
  cursor: pointer;
`;

const CustomCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(Close)`
  cursor: pointer;
`;

const BurgerNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 20;
  list-style: none;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
