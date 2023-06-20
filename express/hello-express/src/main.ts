import express from 'express';
import mysqlPromise from 'promise-mysql';
import mysql from 'mysql';

const app = express();
const router = express.Router();

router.get("/api/v1/customers", async (req, res) => {
    const connection = await mysqlPromise.createConnection({
        host: 'localhost', port: 3306, database: 'dep10_pos', user: 'root', password: 'mysql'
    });
    const resultSet = await connection.query('SELECT * FROM customer');
    console.log("ABC");
    res.json(resultSet);
    connection.end();
});

router.get("/api/v2/customers", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost', port: 3306, database: 'dep10_pos', user: 'root', password: 'mysql'
    });
    connection.connect(() => {
        connection.query('SELECT * FROM customer', (resultSet) => {
            res.json(resultSet);
            connection.end();
        });
        console.log("ABC");
    });
});

app.use("/app", router);
app.listen(8080, () => console.log("Server has been started!"))
