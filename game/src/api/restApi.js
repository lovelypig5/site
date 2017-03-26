var BaseApi = require('./baseApi');
// var restService = require('../service/restService');

class RestApi extends BaseApi {

    async list(ctx, next) {
        ctx.body = {
            a: 1
        }
    }
}

var restApi = new RestApi();

module.exports = [
    {
        method: 'get',
        route: '/api/list',
        func: restApi.list
    }
];
