var BaseDao = require('./baseDao');

class RestDao extends BaseDao {

    async getPlayers() {
        var session = this.driver.session();
        return await session.run("MATCH (n:`拳皇`) RETURN n").then((result) => {
            session.close();
            return result.records;
        }).catch((err) => {
            this.logger.error(err);
            throw err;
        });
    }
}

module.exports = new RestDao();
