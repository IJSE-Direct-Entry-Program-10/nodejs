import express from 'express';
import mysql from 'promise-mysql';

const app = express();
const router = express.Router();

router.get("/api/v1/customers", async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'dep10_pos',
        user: 'root',
        password: 'mysql'
    });
    const resultSet = await connection.query('SELECT * FROM customer');
    res.json(resultSet);
    connection.end();
});

app.use("/app", router);
app.listen(8080, () => console.log("Server has been started!"))
