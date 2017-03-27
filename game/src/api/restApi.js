var BaseApi = require('./baseApi');
var restService = require('../service/restService');

class RestApi extends BaseApi {

    async list(ctx, next) {
        ctx.body = await restService.getPlayers();
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
