import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-size: 12px;
`;

const Image = styled.div`
	background-image: url(${props => props.bgUrl});
	height: 180px;
	background-size: cover;
	border-radius: 4px;
	background-position: center center;
	transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.7;
		}
	}
`;

const Title = styled.span`
	display: block;
	font-size: 12px;
	margin-bottom: 3px;
`;

const SeasonCount = styled.span`
	font-size: 10px;
	color: rgba(255, 255, 255, 0.5)
`;

const SeasonPoster = ({ airDate, id, imageUrl, name}) => (
		<Container>
			<ImageContainer>
				<Image
					bgUrl={imageUrl
						? `https://image.tmdb.org/t/p/w300${imageUrl}`
						: require("../assets/noPosterSmall.png")}
				/>

			</ImageContainer>
			<Title>{name}</Title>
		</Container>
);

export default SeasonPoster;