import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 2vh;
`;

const Title = (props) => {
  return (
    <Header>
      {props.title}
    </Header>
  );
}

export default Title;
