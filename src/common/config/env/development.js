'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
    db: {
        type: "mysql",
        log_sql: false,
        log_connect: true,
        adapter: {
            mysql: {
                host: "127.0.0.1",
                port: "",
                database: "pizzaCms", //数据库名称
                user: "root", //数据库帐号
                password: "huabinglan@@227", //数据库密码
                prefix: "pz_",
                encoding: "utf8"
            },
            mongo: {

            }
        }
    }
};
