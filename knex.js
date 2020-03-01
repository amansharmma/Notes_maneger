const knex = require('knex') ({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Nav@gur1',
        database: 'thoughts'
    }
});

module.exports = knex;