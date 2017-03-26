var neo4j = require('neo4j-driver').v1,
    logger = require('../logger'),
    utils = require('../utils'),
    MESSAGES = require('../config/message'),
    ERRORS = require('../error');

class BaseDao {

    constructor() {
        this.logger = logger;
        this.MESSAGES = MESSAGES;
        this.ERRORS = ERRORS;
        this.driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "Abcd1234_"));
        this.ajaxModel = utils.ajaxModel;
    }

}

module.exports = BaseDao;
