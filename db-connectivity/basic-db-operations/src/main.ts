import * as mysql from 'mysql';
import {Customer} from "./entity/customer";

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'dep10_pos',
    user: 'root',
    password: 'mysql'
});

connection.connect(err=> {
    if (err){
        console.log("Failed to connect to database");
        return;
    }

    console.log("Connection has been established");

    connection.query('SELECT * FROM customer', (err2,
                                                results: Array<Customer>)=>{
        if (err2){
            console.log("Failed to fetch customers");
            return;
        }

        console.log(results[0].name);

        connection.end();
    });
});

