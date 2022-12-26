import express from 'express';
import homeController from '../Controllers/home.controller.js';

const router = express.Router();

router.get('/popular', homeController.getVideoPopular);
router.get('/search', homeController.searchVideo);
router.get('/videoCategory', homeController.getCategory);
router.get('/playlist', homeController.getPlaylist);
router.get('/playlistItems', homeController.getPlaylistItems);
router.get('/videoCategory/:videoCategoryId', homeController.getVideoCategory);
router.get('/video/:videoId', homeController.getDetailsVideo);
router.get('/channel/:channelId', homeController.getDetailsChannel);

export default router;
