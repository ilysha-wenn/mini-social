const server = require('./server');
const config = require('./config');
const db = require('./db');

db.start(config);
const app = server.init(config);
server.start(config, app);