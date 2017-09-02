const koa = require('koa');
const path = require("path");
const server = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/router');
const log4js = require('log4js');
const logger = log4js.getLogger();
const templating = require('./common/templating');

const app = new koa();
const isProduction = process.env.NODE_ENV === 'production';

app.use(templating('web', {
    noCache: !isProduction,
    watch: !isProduction
}));
app.use(server(path.join(__dirname, '..', 'web')));

app.use(bodyParser());
app.use(router.routes());

app.listen(3001, () => {
    logger.info(`listen in http://127.0.0.1:3001`)
});
