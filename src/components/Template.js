import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Content from './Content';
import Draggable from 'react-draggable';

const StyledTemplate = styled.div`
  background-color: #FFEBF1;
  min-height: 100vh;
  position: relative;
`;

const ContentList = styled.div`
  padding-top: 5vh; /* 위쪽 패딩 */
  padding-bottom: 10vh; /* 아래쪽 패딩 */
  padding-left: 20vw; /* 왼쪽 패딩 */
  padding-right: 20vw; /* 오른쪽 패딩 */
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
    isSubmitted: false, // 제출 여부를 나타내는 상태 변수
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
    // 각 Content의 답을 확인하고 채점
    const updatedContents = state.contents.map(content => {
      const textField1Value = content.textField1Value;
      const textField2Value = content.textField2Value;
      const textField3Value = content.textField3Value;

      // 채점 로직 작성
      const isCorrect = (
        parseInt(textField1Value) === content.num1 &&
        parseInt(textField2Value) === content.num2 &&
        parseInt(textField3Value) === content.num3 
      );

      console.log(`${content.id}: ${textField1Value}, ${textField2Value}, ${textField3Value}, ${isCorrect}`)

      return { ...content, isCorrect };
    });

    setState((prevState) => ({ ...prevState, contents: updatedContents, isSubmitted: true }));
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
        <Content data={state.contents} onInputChange={handleInputChange} isSubmitted={state.isSubmitted} />
      </ContentList>
      
    </StyledTemplate>
  );
};

export default Template;

