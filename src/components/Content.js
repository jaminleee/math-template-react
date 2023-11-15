import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 1vw;
  border: 0.6vw solid #FFC6D7;
  max-height: 60vh;
  max-width: 60vw;
  overflow-y: scroll;
  overflow-x: hidden;

  /* 스크롤바 전체 스타일 */
  &::-webkit-scrollbar {
    width: 0.5vw;
  }

  /* 스크롤바 핸들(바) 스타일 */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 1vw;
  }
`;

const ContentItem = styled.div`
  background-color: #F1F9FC;
  text-align: start;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 3vh;
  margin-bottom: 3vh;
  border-radius: 0.5vw;
  padding: 1vh 2vw; /* 상하 1vh, 좌우 2vw 패딩 추가 */
  display: flex;
  align-items: center;
  flex-direction: column; /* 세로 방향으로 아이템을 배치 */
  position: relative; /* 가상 요소의 위치를 설정하기 위해 상대 위치 지정 */
`;

const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh; /* 두 번째 줄과의 간격 조절 */
`;

const Textfield = styled.input`
  margin-left: 1vw;
  margin-right: 1vw;
  height: 3vh;
  width: 4vw; /* 텍스트 필드의 크기를 동일하게 조절 */
  border-radius: 0.5vw;
  border: 0.2vw solid #D4D8D9;
  padding: 0.5vh; /* 내용과 경계 사이의 간격을 추가 */
  font-size: 1.2em; /* 원하는 글씨 크기로 설정 */
  outline: none;
  text-align: center;
`;

const IdTitle = styled.span`
  font-weight: bold; /* Bold 효과 추가 */
  font-size: 1rem; /* 원하는 글씨 크기로 설정 */
`;

const IdNumber = styled(IdTitle)`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem; /* ID의 크기를 크게 조절 */
  margin: 0.5vw; /* ID와 Content 간격 조절 */
`;

const Content = (props) => {
  const dataList = props.data.map((item,index) => (
    <ContentItem key={item.id}>
      <IdNumber>{index + 1}.</IdNumber>
      <TextFieldWrapper>
        <IdTitle>{item.title}</IdTitle>
        <Textfield type="text" />
        <IdTitle>+</IdTitle>
        <Textfield type="text" />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <IdTitle>=</IdTitle>
        <Textfield type="text" />
      </TextFieldWrapper>
    </ContentItem>
  ));

  return <ContentWrapper>{dataList}</ContentWrapper>;
};

export default Content;
