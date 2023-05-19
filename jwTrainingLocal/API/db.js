const mysql = require('mysql2/promise');
const credentials = {
    host: 'localhost',
    user: 'root',
    password: 'Hearthstone99',
    database: 'jw1448_jwTrainingDatabase'
};

const pool = mysql.createPool(credentials);

async function query(sql, params) {
    const connection = await pool.getConnection();
    try {
        const [results, ] = await connection.execute(sql, params);
        return results;
    } finally {
        connection.release(); // Release the connection back to the pool
    }
}

module.exports = {
    query
};
