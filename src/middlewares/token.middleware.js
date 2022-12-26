import jwt from 'jsonwebtoken';

const tokenDecode = (req) => {
	try {
		const bearerHeader = req.headers['authorization'];
		if (bearerHeader) {
			const token = bearerHeader.split(' ')[1];

			return jwt.verify(token, process.env.TOKEN_SECRET);
		}

		return false;
	} catch {
		return false;
	}
};

export default { tokenDecode };
