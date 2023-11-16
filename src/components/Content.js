import React from 'react';
import styled from 'styled-components';
import ContentItem from './ContentItem';

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

const Content = (props) => {
  const dataList = props.data.map((item, index) => (
    <ContentItem key={item.id} index={index} title={item.title} circleColor="rgba(0, 0, 0, 0)" lineColor="rgba(0, 0, 0, 0)"/>
  ));

  return (
        <ContentWrapper>{dataList}</ContentWrapper>
  );
};

export default Content;
