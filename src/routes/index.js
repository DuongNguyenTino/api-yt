import express from 'express';
import homeRoute from './home.route.js';

const router = express.Router();

router.use('/', homeRoute);

export default router;
