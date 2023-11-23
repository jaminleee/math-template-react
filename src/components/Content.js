import React, { useState } from 'react';
import styled from 'styled-components';
import ContentItem from './ContentItem';
import Button from './ui/Button';

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 1vw 1vw 0 0;
  border-top: 0.6vw solid #FFC6D7; /* 위에만 테두리 */
  border-left: 0.6vw solid #FFC6D7; /* 왼쪽에만 테두리 */
  border-right: 0.6vw solid #FFC6D7; /* 오른쪽에만 테두리 */
  max-height: 71vh;
  max-width: 70vw;
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

const Content = ({ data }) => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
 
  const handleSubmit = () => {
    if (!isResetting) {
      setIsSubmitted(true);
      setIsResetting(true);
      alert('제출하시겠습니까?');
    } else {
      // Handle reset logic here
      setIsSubmitted(false);
      setIsResetting(false);
      alert('다시 풀겠습니까?');
    }
  };

  return (
    <ContentWrapper>
      {data.map((item, index) => (
        <ContentItem
          key={item.id}
          index={index}
          title={item.title}
          num1={item.num1}
          num2={item.num2}
          num3={item.num3}
          isSubmitted={isSubmitted}
        />
      ))}
      <Button onClick={handleSubmit}>
      {isResetting ? '다시 풀기' : '제출하기'}
    </Button>
    </ContentWrapper>
  );
};

export default Content;
