import React, { useState } from 'react';
import styled from 'styled-components';

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
  top: 1vh;
  left: 1vw;
`;

const IdNumber = styled(IdTitle)`
  position: absolute;
  font-size: 1rem;
`;

const ContentItem = ({ index, title, circleColor, lineColor, onInputChange, isCorrect }) => {
  const [textFieldValues, setTextFieldValues] = useState(['', '', '']);

  // 텍스트 필드 값이 변경될 때 호출되는 함수
  const handleInputChange = () => {
    // 부모 컴포넌트로 입력값 전달
    onInputChange({
      index,
      values: {
        textField1Value: textFieldValues[0],
        textField2Value: textFieldValues[1],
        textField3Value: textFieldValues[2],
      },
    });
  };

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
    handleInputChange();
  };

  return (
    <ContentItemWrapper>
        <IdNumber>{index + 1}.</IdNumber>
      <TextFieldWrapper>
        <IdTitle>{title}</IdTitle>
        {[0, 1].map(i => (
          <React.Fragment key={i}>
            <Textfield
              type="text"
              value={textFieldValues[i]}
              onChange={e => handleTextFieldChange(e, i)}
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
        />
      </TextFieldWrapper>
    </ContentItemWrapper>
  );
};

export default ContentItem;
