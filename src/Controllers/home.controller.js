import ytApi from '../config/YoutubeAPI/ytApi.js';
import tokenMiddleware from '../middlewares/token.middleware.js';

const getVideoPopular = async (req, res) => {
	try {
		const { part, chart, pageToken } = req.query;
		const response = await ytApi.getListHome({
			part: part,
			chart: chart,
			pageToken: pageToken ? pageToken : '',
		});
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

const getCategory = async (req, res) => {
	try {
		const { part } = req.query;
		const response = await ytApi.getListCategory({ part: part });
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

const getVideoCategory = async (req, res) => {
	try {
		const { part, chart, pageToken } = req.query;
		const { videoCategoryId } = req.params;
		const response = await ytApi.getListVideoCategory({
			part: part,
			chart: chart,
			pageToken: pageToken ? pageToken : '',
			videoCategoryId: videoCategoryId,
		});
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

const searchVideo = async (req, res) => {
	try {
		const { part, q, pageToken } = req.query;
		const response = await ytApi.searchResults({
			part: part,
			q: q,
			pageToken: pageToken,
		});
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

const getPlaylist = async (req, res) => {
	try {
		const { part, channelId } = req.query;
		const response = await ytApi.playlist({
			part: part,
			channelId: channelId,
		});
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

const getDetailsVideo = async (req, res) => {
	try {
		const { videoId } = req.params;
		const { part } = req.query;
		const response = await ytApi.detailsVideo({
			part: part,
			id: videoId,
		});
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

const getPlaylistItems = async (req, res) => {
	try {
		const { part, playlistId } = req.query;
		const response = await ytApi.playlistItems({
			part: part,
			playlistId: playlistId,
		});
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

const getDetailsChannel = async (req, res) => {
	try {
		const { channelId } = req.params;
		const { part } = req.query;
		const response = await ytApi.channelDetails({
			part: part,
			id: channelId,
		});
		return res.status(200).json(response);
	} catch {
		res.status(400).json({ message: 'Bad Request !' });
	}
};

export default {
	getVideoPopular,
	getCategory,
	getVideoCategory,
	searchVideo,
	getDetailsVideo,
	getPlaylist,
	getPlaylistItems,
	getDetailsChannel,
};
