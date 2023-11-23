import React, { useState } from 'react';
import styled from 'styled-components';
import img_correct from '../assets/img_correct.png'
import img_notCorrect from '../assets/img_notCorrect.png'

const ContentItemWrapper = styled.div`
  background-color: #F1F9FC;
  text-align: start;
  margin: 3vh 10vw;
  border-radius: 0.5vw;
  padding: 1vh 2vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const ImageWrapper = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 4.6rem; /* Set the width of the image */
  height: 4.1rem; /* Set the height of the image */
  position: absolute;
  top: 0;
  left: 0;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh;
`;

const Textfield = styled.input`
  margin: 0 1vw;
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
  top: 30%;
  left: 45%;
`;

const IdNumber = styled(IdTitle)`
  position: relative;
  font-size: 1rem;
`;

const ContentItem = ({ index, title, num1, num2, num3, isSubmitted }) => {
  const [textFieldValues, setTextFieldValues] = useState(['', '', '']);
  


  // 텍스트 필드 값이 변경될 때 호출되는 함수 (재사용 가능한 부분)
  const handleTextFieldChange = (e, index) => {
    const value = e.target.value;
    console.log(`TextField ${index + 1}:`, value);
    // 해당 텍스트 필드의 값만 업데이트
    setTextFieldValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };


  const isCorrect =
    parseInt(textFieldValues[0]) === num1 &&
    parseInt(textFieldValues[1]) === num2 &&
    parseInt(textFieldValues[2]) === num3;

  return (
    <ContentItemWrapper>
      <ImageWrapper src={isSubmitted ? (isCorrect ? img_correct : img_notCorrect) : ''} alt="Result" >
        <IdNumber>{index + 1}.</IdNumber>
      </ImageWrapper>
      <TextFieldWrapper>
        <IdTitle>{title}</IdTitle>
        {[0, 1].map(i => (
          <React.Fragment key={i}>
            <Textfield
              type="text"
              value={textFieldValues[i]}
              onChange={e => handleTextFieldChange(e, i)}
              isCorrect={isCorrect}
              isSubmitted={isSubmitted}
              disabled={isSubmitted}
            />
            {i === 0 && <IdTitle>+</IdTitle>}
          </React.Fragment>
        ))}
      </TextFieldWrapper>

      <TextFieldWrapper>
        <IdTitle>=</IdTitle>
        <Textfield
          type="text"
          value={textFieldValues[2]}
          onChange={e => handleTextFieldChange(e, 2)}
          isCorrect={isCorrect}
          isSubmitted={isSubmitted}
          disabled={isSubmitted}
        />
      </TextFieldWrapper>
    </ContentItemWrapper>
  );
};

export default ContentItem;
