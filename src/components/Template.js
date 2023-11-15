import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Content from './Content';
import Button from './ui/Button';

const StyledTemplate = styled.div`
  background-color: #FFEBF1;
  min-height: 100vh;
  position: relative;
`;

const ContentList = styled.div`
  padding-left: 20vw;
  padding-top: 3vh;
  padding-right: 20vw;
  padding-bottom: 2vh;
`;

const Template = () => {
  const [state] = useState({
    title: { title: "□에 알맞은 숫자를 써넣으시오." },
    description: { desc: "문제 예시 적는곳" },
    contents: [
      { id: 1, title: '1 + 1 =', num1: 1, num2: 1, num3: 2 },
      { id: 2, title: '2 + 2 =', num1: 2, num2: 2, num3: 4 },
      { id: 3, title: '3 + 3 =', num1: 3, num2: 3, num3: 6 },
      { id: 4, title: '3 + 3 =', num1: 3, num2: 3, num3: 6 },
      { id: 5, title: '3 + 3 =', num1: 3, num2: 3, num3: 6 }
    ],
  });

  return (
    <StyledTemplate>
      <Title title={state.title.title}></Title>
      <Description desc={state.description.desc}></Description>
      <ContentList><Content data={state.contents}></Content></ContentList>
      <Button onClick={() => alert('Button Clicked')}>
        제출하기
      </Button>
    </StyledTemplate>
  );
}

export default Template;