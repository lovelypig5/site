var Service = require('./service');
var restDao = require('../dao/restDao');

class RestService extends Service {

    async getPlayers() {
        var records = await restDao.getPlayers();
        var result = [];
        records.forEach((record) => {
            result.push(record.get('n').properties);
        });
        return result;
    }

}

module.exports = new RestService();
