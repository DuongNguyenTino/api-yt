const baseUrl = process.env.BASE_URL;
const api_key = process.env.API_KEY;

const getUrl = (endpoint, params) => {
	const queryString = new URLSearchParams(params);
	return `${baseUrl}${endpoint}?${queryString}&maxResults=25&regionCode=VN&key=${api_key}`;
};

export default { getUrl };
