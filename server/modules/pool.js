const pg = require('pg');

//Setup PG to connect to DB this is all pretty standard
const Pool = pg.Pool;
const pool = new Pool({ 
    database: 'mathHistory', //name of the database, this can change
    host: 'localhost', //where is your database?
    port: '5432', //postgress thing
    max: 10, //how many queries can this pool handle at once
    idleTimeoutMillis: 30000 //30 seconds to try to connect - otherwise, cancel
});

pool.on('connect', () => {
    console.log('postgresql connected');
});

pool.on('error', (error) => {
    console.log('error with postgresql pool', error);   
});

module.exports = pool;