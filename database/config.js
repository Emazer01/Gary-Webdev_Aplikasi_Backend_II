const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'gary_backend_2',
    port: 5432,
    password: 'postgres'
})

module.exports = databaseConfig