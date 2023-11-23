import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Content from './Content';
import { useLocation } from 'react-router-dom'

const StyledTemplate = styled.div`
  background-color: #FFEBF1;
  min-height: 100vh;
  position: relative;
`;

const ContentList = styled.div`
  padding-top: 5vh; 
  padding-bottom: 0vh; 
  padding-left: 20vw; 
  padding-right: 20vw; 
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
    //extToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNTQ5OTI1LCJqdGkiOiIxY2MzNzI5YWQ3MjM0MDE2OGFjODI5OWNjMjE5MjA2MSIsInVzZXJfaWQiOjMwMTgsInByb2dyZXNzX3VybCI6Imh0dHBzOi8vYXBpLWVzcC1wcm94eS5lbGljZS5pby9kZWZhdWx0L3Byb2dyZXNzL2V4dGVybmFsP3Rva2VuPWV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYVdRaU9tNTFiR3dzSW5WelpYSmZhV1FpT2pFek5UYzFOamc0TENKdmNtZGhibWw2WVhScGIyNWZhV1FpT2pnM05Td2lZMjkxY25ObFgybGtJam80TVRFeE5Dd2liR1ZqZEhWeVpWOXdZV2RsWDJsa0lqbzNNall5TVRnNGZRLlVSSjU5dXV4YTN6d0pwaERYYkh6ZWFnOER2bGxwS2xXaDVaOTZZLW9jelkifQ.n7mYyElBsjHRQ0WX-DFSBZdJfRz6Qp7FUpamLD7FPnE",
  });

  //const location = useLocation();
  //const extTokenFromQuery = new URLSearchParams(location.search).get('extToken');
  //const extTokenFromQuery = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwNTQ5OTI1LCJqdGkiOiIxY2MzNzI5YWQ3MjM0MDE2OGFjODI5OWNjMjE5MjA2MSIsInVzZXJfaWQiOjMwMTgsInByb2dyZXNzX3VybCI6Imh0dHBzOi8vYXBpLWVzcC1wcm94eS5lbGljZS5pby9kZWZhdWx0L3Byb2dyZXNzL2V4dGVybmFsP3Rva2VuPWV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYVdRaU9tNTFiR3dzSW5WelpYSmZhV1FpT2pFek5UYzFOamc0TENKdmNtZGhibWw2WVhScGIyNWZhV1FpT2pnM05Td2lZMjkxY25ObFgybGtJam80TVRFeE5Dd2liR1ZqZEhWeVpWOXdZV2RsWDJsa0lqbzNNall5TVRnNGZRLlVSSjU5dXV4YTN6d0pwaERYYkh6ZWFnOER2bGxwS2xXaDVaOTZZLW9jelkifQ.n7mYyElBsjHRQ0WX-DFSBZdJfRz6Qp7FUpamLD7FPnE"


  // useEffect(() => {
  //   if (extTokenFromQuery) {
  //     setState((prev) => ({ ...prev, extToken: extTokenFromQuery }));
  //   }
  // }, [extTokenFromQuery]);

  return (
    <StyledTemplate>
      <Title title={state.title.title}></Title>
      <Description></Description>
      <ContentList>
        <Content data={state.contents}/>
      </ContentList>
    </StyledTemplate>
  );
};

export default Template;
