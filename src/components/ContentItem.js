import React from 'react';
import styled from 'styled-components';

const ContentItemWrapper = styled.div`
  background-color: #F1F9FC;
  text-align: start;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 3vh;
  margin-bottom: 3vh;
  border-radius: 0.5vw;
  padding: 1vh 2vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh;
`;

const Textfield = styled.input`
  margin-left: 1vw;
  margin-right: 1vw;
  height: 3vh;
  width: 4vw;
  border-radius: 0.5vw;
  border: 0.2vw solid #D4D8D9;
  padding: 0.5vh;
  font-size: 1.2em;
  outline: none;
  text-align: center;
`;

const IdTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const IdNumber = styled(IdTitle)`
  position: absolute;
  font-size: 1rem;
`;

const Circle = styled.div`
  position: absolute;
  width: calc(1em / 0.7);
  height: calc(1em / 0.7);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 0.5vw solid ${props => props.circleColor || 'rgba(0, 0, 0, 0)'}; 
  top: 0;
  left: 0;
`;

const DiagonalLine = styled.div`
  width: 5px;
  height: 50px;
  position: absolute;
  background-color: ${props => props.lineColor || 'rgba(0, 0, 0, 0)'};
  transform: rotate(45deg);
  border-radius: 0.5vw;
`;


const ContentItem = ({ index, title, circleColor, lineColor }) => (
  <ContentItemWrapper>
    <Circle circleColor={circleColor}>
    <IdNumber>{index + 1}.</IdNumber>
    <DiagonalLine lineColor={lineColor}></DiagonalLine>
    </Circle>
    
    
    <TextFieldWrapper>
      <IdTitle>{title}</IdTitle>
      <Textfield type="text" />
      <IdTitle>+</IdTitle>
      <Textfield type="text" />
    </TextFieldWrapper>
    <TextFieldWrapper>
      <IdTitle>=</IdTitle>
      <Textfield type="text" />
    </TextFieldWrapper>
  </ContentItemWrapper>
);

export default ContentItem;
