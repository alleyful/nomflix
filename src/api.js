import axios from 'axios';

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "9c2f7620f58e09b9bb21245b8260a9ed",
		language: "en-US"
	}
});

export default api;