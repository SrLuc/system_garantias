const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgresql://garantias_care_user:G1wznfoUkmNC9UwyTAD3HwivjrmHWAJ3@dpg-csceqp0gph6c73bsa610-a.oregon-postgres.render.com/garantias_care",
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = { pool };