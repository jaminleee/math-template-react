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
  font-size: 1rem;
`;

const IdNumber = styled(IdTitle)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  margin: 0.5vw;
`;

const ContentItem = ({ index, title }) => (
  <ContentItemWrapper>
    <IdNumber>{index + 1}.</IdNumber>
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
