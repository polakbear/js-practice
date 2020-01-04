const url = 'http://www.omdbapi.com/';

const fetchMovieById = async (id) => {
	const response = await axios.get(url, {
		params: {
			apikey: key,
			i: id
		}
	});

	return response;
};

const fetchMovieByTitle = async (search) => {
	const response = await axios.get(url, {
		params: {
			apikey: key,
			s: search
		}
	});

	return response;
};
