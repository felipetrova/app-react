const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});
const handler = routes.getRequestHandler(app);

app.prepare().then(_ => {
    createServer(handler).listen(5000);
});