import React from 'react';
import styled, { keyframes } from 'styled-components';
import Helmet from 'react-helmet';

const HeartBeat = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
`;

const Container = styled.div`
	height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const LodingHeart = styled.div`
	display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  transform-origin: 32px 32px;
`;

const InnerDiv = styled.div`
	top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: #fff;
  animation: ${HeartBeat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  
  &:after, &:before {
    content: " ";
	  position: absolute;
	  display: block;
	  width: 26px;
	  height: 26px;
	  background: #fff;
  }
  
  &:before {
    left: -17px;
    border-radius: 50% 0 0 50%;
  }
  
  &:after {
    top: -17px;
    border-radius: 50% 50% 0 0;
  }
`;

export default () => (
	<Container>
		<Helmet>
			<title>Loagind | Alleyflix</title>
		</Helmet>
		<LodingHeart>
			<InnerDiv></InnerDiv>
		</LodingHeart>
	</Container>
)