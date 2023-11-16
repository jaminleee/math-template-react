import React from 'react';
import styled from 'styled-components';

const DescriptionItem = styled.div`
  background-color: #F1F9FC;
  text-align: start;
  margin-left: 30.5vw;
  margin-right: 30.5vw;
  margin-top: 2vh;
  border-radius: 0.5vw;
  padding: 1vh 2vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh;
`;

const Text = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const PlaceholderText = styled.span`
  color: #FF0000;
  height: 3vh;
  width: 4vw;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 0.5vw;
  border: 0.2vw solid #D4D8D9;
  padding:0.5vw; /* 텍스트와 테두리 사이 간격 추가 */
  text-align: center;
  margin-left: 1vw;
  margin-right: 1vw;
  background-color: white;
`;

const Description = (props) => {
  return (
    <DescriptionItem>
      <TextWrapper>
        <Text>500 + 300 =</Text>
        <PlaceholderText>500</PlaceholderText>
        <Text>+</Text>
        <PlaceholderText>300</PlaceholderText>
      </TextWrapper>
      <TextWrapper>
        <Text>=</Text>
        <PlaceholderText>800</PlaceholderText>
      </TextWrapper>
    </DescriptionItem>
  );
};

export default Description;
