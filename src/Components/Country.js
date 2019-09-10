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
`;

const SubName = styled.p`
	font-size: 16px;
	padding: 10px;
`;

const Country = ({production_countries: countries, origin_country: country}) => (
	<Container>
		<Title>Production Countries</Title>
		<List>
			{country && country.length > 0 && (
				country.map((v, i) => (
					<Item key={`${v}-${i}`}>
						<SubName>{v}</SubName>
					</Item>
				))
			)}

			{(countries && countries.length > 0) && countries.map((v, i) =>
				<Item key={`${v.iso_3166_1}-${i}`}>
					<SubName>{`${v.iso_3166_1} / ${v.name}`}</SubName>
				</Item>
			)}
		</List>
	</Container>
);

export default Country;