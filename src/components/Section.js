import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';

function Section({
  title,
  desc,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  noChevronDown,
}) {
  return (
    <Wrapper bgImage={backgroundImg}>
      <Fade bottom>
        <ItemTextGroup>
          <ItemTextGroupHeader>{title}</ItemTextGroupHeader>
          {desc && <ItemTextGroupDesc>{desc}</ItemTextGroupDesc>}
        </ItemTextGroup>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <ButtonGroupLeftButton>{leftBtnText}</ButtonGroupLeftButton>
            {rightBtnText && (
              <ButtonGroupRightButton>{rightBtnText}</ButtonGroupRightButton>
            )}
          </ButtonGroup>
          {!noChevronDown && <DownArrow src='/images/down-arrow.svg' />}
        </Buttons>
      </Fade>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemTextGroup = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ItemTextGroupHeader = styled.h1`
  font-size: 3rem;
`;

const ItemTextGroupDesc = styled.p`
  font-size: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centers;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonGroupLeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  margin: 8px;
  height: 40px;
  width: 256px;
  color: white;
  border: none;
  border-radius: 100px;
  opacity: 0.85;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  transition: 0.3s ease-in-out;
`;

const ButtonGroupRightButton = styled(ButtonGroupLeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: jumpingArrow infinite 1.5s;
  cursor: pointer;
  @keyframes jumpingArrow {
    0%,
    20%,
    50%,
    70%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;
