/**
 * Created by 凯洪 on 2016/8/14.
 */

/* 连接数据库实例 */
var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});
