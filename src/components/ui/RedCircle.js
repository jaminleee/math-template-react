import React from 'react';
import styled from 'styled-components';

const RedCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: red;
  border-radius: 50%;
`;

const RedCircle = () => {
  return (
    <RedCircleWrapper></RedCircleWrapper>
  );
}

export default RedCircle;
