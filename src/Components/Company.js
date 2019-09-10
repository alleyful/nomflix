import React from 'react';
import styled from 'styled-components';

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


const Company = ({production_companies: companies}) => (
	<Container>
		<Title>Production Companies</Title>
		<List>
			{companies && companies.length > 0 && companies.map(v =>
				<Item key={v.id}>
					<Image
						bgUrl={v.logo_path
							? `https://image.tmdb.org/t/p/w300${v.logo_path}`
							: require("../assets/noPosterSmall.png")}
					/>
					<SubName>{v.name}</SubName>
				</Item>
			)}
		</List>
	</Container>
);

export default Company;