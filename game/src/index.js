const logger = require('./logger');
const Koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');
// const filters = require('./filters');
const apis = require('./api');
const app = new Koa();

// filters.forEach((filter) => {
//     if (filter.route) {
//         app.all(filter.route, filter.filter);
//     } else {
//         app.use(filter.filter);
//     }
// })

app.use((ctx, next) => {
    logger.info('%s %s', ctx.req.method, ctx.req.url);
    next();
});

apis.forEach((api) => {
    var method = api.method || 'get';
    router[method](api.route, api.func);
})
app.use(router.routes());
// server static file
app.use(serve('../assets/dist'));

app.listen(3000, () => {
    logger.info(`Backend service listening on port 3000!`);
});
