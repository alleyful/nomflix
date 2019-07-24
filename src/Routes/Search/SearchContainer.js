import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from 'api';

export default class extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: 'code',
		error: null,
		loading: false
	};

	handleSubmit = () => {
		const { searchTerm } = this.state;

		searchTerm !== '' && this.searchByTerm();
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;

		try {
			const {
				data: { results: movieResults }
			} = await moviesApi.search(searchTerm);
			const {
				data: { results: tvResults }
			} = await tvApi.search(searchTerm);

			this.setState({
				movieResults,
				tvResults
			})
		} catch {

		} finally {

		}
	};

	componentDidMount() {
		this.handleSubmit();
	}

	render() {
		const { movieResults, tvResults, searchTerm, error, loading } = this.state;

		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				error={error}
				loading={loading}
				handleSubmit={this.handleSubmit}
			/>
		)
	}
}