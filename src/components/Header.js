import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, Close } from '@material-ui/icons';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Brand>
        <Link to='#top' smooth>
          <img src='/images/logo.svg' alt='Tesla' />
        </Link>
      </Brand>
      <MainMenu>
        {cars &&
          cars.map((car, index) => {
            const path = `/#model_${car.charAt(car.length - 1)}`;
            return (
              <Link smooth to={path} key={index}>
                {car}
              </Link>
            );
          })}
      </MainMenu>
      <SideMenu>
        <Link to=''>Shop</Link>
        <Link to=''>Account</Link>
        <Hamburger onClick={() => setIsBurgerMenuOpen(true)} />
      </SideMenu>
      <BurgerNav show={isBurgerMenuOpen}>
        <CustomCloseWrapper>
          <CustomClose onClick={() => setIsBurgerMenuOpen(false)} />
        </CustomCloseWrapper>
        {cars &&
          cars.map((car, index) => {
            const path = `/#model_${car.charAt(car.length - 1)}`;
            return (
              <li>
                <Link smooth to={path} key={index}>
                  {car}
                </Link>
              </li>
            );
          })}
        <li>
          <Link to=''>Existing Inventory</Link>
        </li>
        <li>
          <Link to=''>Used Inventory</Link>
        </li>
        <li>
          <Link to=''>Test Drive</Link>
        </li>
        <li>
          <Link to=''>Cybertruck</Link>
        </li>
        <li>
          <Link to=''>Roadster</Link>
        </li>
        <li>
          <Link to=''>Semi</Link>
        </li>
        <li>
          <Link to=''>Charging</Link>
        </li>
        <li>
          <Link to=''>Powerwall</Link>
        </li>
        <li>
          <Link to=''>Commercial Energy</Link>
        </li>
        <li>
          <Link to=''>Utilities</Link>
        </li>
        <li>
          <Link to=''>Find Us</Link>
        </li>
        <li>
          <Link to=''>Support</Link>
        </li>
        <li>
          <Link to=''>Investor Relations</Link>
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
