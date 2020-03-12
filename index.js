require('dotenv').config();
const server = require('./api/server.js');

// make the port be assigned by the server(HEROKU)
const port = process.env.PORT || 4000;
server.listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
