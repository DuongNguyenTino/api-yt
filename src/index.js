import express from 'express';
import http from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import routes from './routes/index.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use(cookieParser());

app.use('/api', routes);

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`App listening on ${PORT}`);
});
