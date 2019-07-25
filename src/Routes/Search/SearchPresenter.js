import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from "Components/Section";
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
	padding: 0 20px;
`;

const Form = styled.form`
	margin-bottom: 50px;
`;

const Input = styled.input`
	all: unset;
	font-size: 28px;
	width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, loading, error, handleSubmit, updateTerm }) => (
	<Container>
		<Form onSubmit={handleSubmit}>
			<Input placeholder="Search Movies or TV Shows..."
			       value={searchTerm}
			       onChange={updateTerm}/>
		</Form>

		{loading ? <Loader/> : (
			<>
				{movieResults && movieResults.length > 0 && (
					<Section title="Movie Results">
						{movieResults.map(movie => (
							<Poster
								key={movie.id}
								id={movie.id}
								title={movie.title}
								mageUrl={movie.poster_path}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}

				{tvResults && tvResults.length > 0 && (
					<Section title="TV Results">
						{tvResults.map(show => (
							<Poster
								key={show.id}
								id={show.id}
								title={show.name}
								imageUrl={show.poster_path}
								rating={show.vote_average}
								year={show.first_air_date.substring(0, 4)}
							/>
						))}
					</Section>
				)}
			</>
		)}

		{error && <Message color="#e74c3c" text={error}/>}

		{movieResults &&
		tvResults &&
		tvResults.length === 0 &&
		movieResults.length === 0 && (
			<Message text={`Nothing Found: ${searchTerm}`} color="#95afc0"></Message>
		)}
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;