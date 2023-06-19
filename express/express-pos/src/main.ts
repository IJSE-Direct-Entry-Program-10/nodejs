import express from 'express';
import {customerRouter} from "./api/customer-router";
import {itemRouter} from "./api/item-router";
import {orderRouter} from "./api/order-router";
import {DatabaseConnectionPool} from "./db/dbcp";

let datasource;
async function init(){
    try{
        /* Initialize connection pool */
        datasource = await DatabaseConnectionPool.getInstance().getPool();
        /* Trying to obtain a connection from pool */
        const connection = await datasource.getConnection();
        connection.release();
    }catch (e){
        console.error(e);
        return;
    }
    const app = express();
    app.use('/pos/api/v1/customers', customerRouter);
    app.use('/pos/api/v1/items', itemRouter);
    app.use('/pos/api/v1/orders', orderRouter);
    app.listen(8080, () => console.log("Server has been started at 8080"));
}
init();
export {datasource};