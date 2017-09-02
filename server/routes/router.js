const router = require('koa-router')();
const log4js = require('log4js');
const log = log4js.getLogger();
const request = require("request");
const querytring = require("querystring");

router.get('/', async (ctx, next) => {
    await next();
    ctx.render('index.html',);
});

router.post('/getArticle/a', async (ctx, next) => {
    await next();
    let result = await new Promise((resolve) =>{
        request('https://suggest.taobao.com/sug?' + querytring.stringify(ctx.request.body), (error, response, body) => {
            log.info('body:', body);
            log.info('body:', querytring.stringify(ctx.request.body));
            resolve(body);
        });
    });
    ctx.body = result;

});

module.exports = router;
