import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from "Components/Poster";

const Container = styled.div`
	padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
	loading
		? null
		: (
			<Container>
				{nowPlaying && nowPlaying.length > 0 && (
					<Section title="Now Playing">
						{nowPlaying.map(movie => (
							<Poster
								key={movie.id}
				        id={movie.id}
				        title={movie.title}
				        imageUrl={movie.poster_path}
				        rating={movie.vote_average}
				        year={movie.release_date.substring(0, 4)}
				        isMovie={true}
							/>
						))}
					</Section>
				)}

				{upcoming && upcoming.length > 0 && (
					<Section title="Upcoming Playing">
						{upcoming.map(movie => (
							<Poster
								key={movie.id}
								id={movie.id}
								title={movie.title}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}

				{popular && popular.length > 0 && (
					<Section title="Popular Playing">
						{popular.map(movie => (
							<Poster
								key={movie.id}
								id={movie.id}
								title={movie.title}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}

				{error && <Message color="#e74c3c" text={error} />}
			</Container>
		);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upcoming: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;