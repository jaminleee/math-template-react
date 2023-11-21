import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Content from './Content';
import Button from './ui/Button';
import Draggable from 'react-draggable';

const StyledTemplate = styled.div`
  background-color: #FFEBF1;
  min-height: 100vh;
  position: relative;
`;

const ContentList = styled.div`
  padding: 3vh 20vw;
`;

const StyledDraggableDiv = styled.div`
  background-color: skyblue;
  cursor: grab;
  padding: 10px;
  border-radius: 8px;
  position: absolute;
  z-index: 999;
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



  const handleDrag = (e, data) => {
    console.log('Drag Coordinates:', { x: data.x, y: data.y });
  };

    // ContentItem에서 호출되는 함수로 입력값을 받아옴
    const handleInputChange = ({ index, values }) => {
      setState((prevState) => {
        const updatedContents = [...prevState.contents];
        updatedContents[index] = { ...updatedContents[index], ...values };
        return { ...prevState, contents: updatedContents };
      });
    };
  

  const handleSubmission = () => {

    // handleInputChange 함수 호출
    state.contents.forEach((content, index) => {
      handleInputChange({
        index,
        values: {
          textField1Value: content.textField1Value,
          textField2Value: content.textField2Value,
          textField3Value: content.textField3Value,
        },
      });
    });

    
    // 각 Content의 답을 확인하고 채점
    state.contents.forEach(content => {
      const textField1Value = content.textField1Value;
      const textField2Value = content.textField2Value;
      const textField3Value = content.textField3Value;

      // 채점 로직 작성
      const isCorrect = (
        parseInt(textField1Value) === content.num1 &&
        parseInt(textField2Value) === content.num2 &&
        parseInt(textField3Value) === content.num3
      );

      console.log(`${content.id}==============================================`)
      console.log(`${content.id}번: ${textField1Value},${textField2Value},${textField3Value}`)
      console.log(`${content.id}번: ${content.num1},${content.num2},${content.num3}`)
      console.log(`${isCorrect ? '정답' : '오답'}`);
      console.log(`==============================================`)
    });

    alert('제출?');
  };



  return (
    <StyledTemplate>
      <Draggable onDrag={handleDrag}>
        <StyledDraggableDiv>드레그드롭</StyledDraggableDiv>
      </Draggable>
      <Title title={state.title.title}></Title>
      <Description></Description>
      <ContentList>
        <Content data={state.contents} onInputChange={handleInputChange} />
      </ContentList>
      <Button onClick={handleSubmission}>
        제출하기
      </Button>
    </StyledTemplate>
  );
}

export default Template;
