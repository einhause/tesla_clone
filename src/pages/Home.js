import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        desc='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='custom order'
        rightBtnText='existing inventory'
      />
      <Section
        title='Model Y'
        desc='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='custom order'
        rightBtnText='existing inventory'
      />
      <Section
        title='Model 3'
        desc='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='custom order'
        rightBtnText='existing inventory'
      />
      <Section
        title='Model X'
        desc='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom order'
        rightBtnText='existing inventory'
      />
      <Section
        title='Solar Panels'
        desc='Money-back guarentee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Accessories'
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
