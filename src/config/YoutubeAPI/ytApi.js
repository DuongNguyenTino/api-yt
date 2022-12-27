import axios from '../../config/axios.js';
import ytConfig from './ytConfig.js';

const getListHome = async ({ part, chart, pageToken }) => {
	if (pageToken !== undefined && pageToken !== '') {
		const response = await axios.get(ytConfig.getUrl('videos', { part, chart, pageToken }));
		return response;
	} else {
		const response = await axios.get(ytConfig.getUrl('videos', { part, chart }));
		return response;
	}
};

const getListCategory = async ({ part }) => {
	const response = await axios.get(ytConfig.getUrl('videoCategories', { part }));
	return response;
};

const getListVideoCategory = async ({ part, chart, pageToken, videoCategoryId }) => {
	if (pageToken !== undefined && pageToken !== '') {
		const response = await axios.get(
			ytConfig.getUrl('videos', { part, chart, pageToken, videoCategoryId })
		);
		return response;
	} else {
		const response = await axios.get(
			ytConfig.getUrl(`videos`, { part, chart, videoCategoryId })
		);
		return response;
	}
};

const searchResults = async ({ part, q, pageToken }) => {
	if (pageToken !== undefined && pageToken !== '') {
		const response = await axios.get(ytConfig.getUrl('search', { part, q, pageToken }));
		return response;
	} else {
		const response = await axios.get(ytConfig.getUrl('search', { part, q }));
		return response;
	}
};

const detailsVideo = async ({ part, id }) => {
	const response = await axios.get(ytConfig.getUrl('videos', { part, id }));
	return response;
};

const playlist = async ({ part, channelId, pageToken }) => {
	if (pageToken !== undefined && pageToken !== '') {
		const response = await axios.get(ytConfig.getUrl('playlists', { part, channelId, pageToken }));
		return response;
	} else {
		const response = await axios.get(ytConfig.getUrl('playlists', { part, channelId }));
		return response;
	}
};

const playlistItems = async ({ part, playlistId, pageToken }) => {
	if (pageToken !== undefined && pageToken !== '') {
		const response = await axios.get(ytConfig.getUrl('playlistItems', { part, playlistId, pageToken }));
		return response;
	} else {
		const response = await axios.get(ytConfig.getUrl('playlistItems', { part, playlistId }));
		return response;
	}
};

const channelDetails = async ({ part, id }) => {
	const response = await axios.get(ytConfig.getUrl('channels', { part, id }));
	return response;
};

export default {
	getListHome,
	getListCategory,
	getListVideoCategory,
	searchResults,
	detailsVideo,
	playlist,
	playlistItems,
	channelDetails,
};
