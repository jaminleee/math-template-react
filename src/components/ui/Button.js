import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #FF6291;
  border-radius: 0.5rem;
  border: none;
  color: white;
  padding: 2vh 3vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 1vh 1vw;
  cursor: pointer;
`;



const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
