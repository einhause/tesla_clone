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
        id='model_S'
        nextLink='model_Y'
      />
      <Section
        title='Model Y'
        desc='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='custom order'
        rightBtnText='existing inventory'
        id='model_Y'
        nextLink='model_3'
      />
      <Section
        title='Model 3'
        desc='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='custom order'
        rightBtnText='existing inventory'
        id='model_3'
        nextLink='model_X'
      />
      <Section
        title='Model X'
        desc='Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom order'
        rightBtnText='existing inventory'
        id='model_X'
        nextLink='solar_panels'
      />
      <Section
        title='Solar Panels'
        desc='Money-back guarentee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
        id='solar_panels'
        nextLink='solar_roof'
      />
      <Section
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
        id='solar_roof'
        nextLink='accessories'
      />
      <Section
        title='Accessories'
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
        id='accessories'
        noChevronDown
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
