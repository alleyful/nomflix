import React from 'react';
import styled from 'styled-components';
import Section from 'Components/Section';
import SeasonPoster from "Components/SeasonPoster";

const Container = styled.div`

`;

const Title = styled.h1`
	font-size: 20px;
	margin-bottom: 10px
`;

const List = styled.ul`

`;

const Item = styled.li`
	float: left;
	margin: 0 10px 20px 10px;
`;

const Image = styled.div`
	background: rgba(255, 255, 255, 0.2) url(${props => props.bgUrl}) no-repeat center center/ 120px;
	height: 180px;
	width: 180px;
	border-radius: 10px;
	
`;

const SubName = styled.p`
	width: 180px;
	text-align: center;
	font-size: 16px;
	padding: 10px;
`;


const Season = ({seasons}) => (
	<Container>
		<Title>Seasons</Title>
		<List>
				<Section>
					{(seasons && seasons.length > 0) && seasons.map(tv => (
						<SeasonPoster
							key={tv.id}
							airDate={tv.air_date}
							id={tv.id}
							name={tv.name}
							imageUrl={tv.poster_path}
						/>
					))}
				</Section>
		</List>
	</Container>
);

export default Season;;