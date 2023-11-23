import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Content from './Content';

const StyledTemplate = styled.div`
  background-color: #FFEBF1;
  min-height: 100vh;
  position: relative;
`;

const ContentList = styled.div`
  padding-top: 5vh; 
  padding-bottom: 0vh; 
  padding-left: 20vw; 
  padding-right: 20vw; 
`;

const Template = () => {
  const [state, setState] = useState({
    title: { title: "□에 알맞은 숫자를 써넣으시오." },
    contents: [
      { id: 1, title: '1 + 1 =', num1: 1, num2: 1, num3: 2 },
      { id: 2, title: '2 + 2 =', num1: 2, num2: 2, num3: 4 },
      { id: 3, title: '3 + 3 =', num1: 3, num2: 3, num3: 6 },
      { id: 4, title: '3 + 3 =', num1: 3, num2: 3, num3: 6 },
      { id: 5, title: '3 + 3 =', num1: 3, num2: 3, num3: 6 },
    ],
  });

  return (
    <StyledTemplate>
      <Title title={state.title.title}></Title>
      <Description></Description>
      <ContentList>
        <Content data={state.contents}/>
      </ContentList>
    </StyledTemplate>
  );
};

export default Template;
