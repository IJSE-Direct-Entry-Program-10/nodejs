import express, {json} from 'express';
import cors from 'cors';
import {router as customerRouter} from "./api/customer-router";

const app = express();
app.use(json());            // Middleware (JSON -> JS Object)
app.use(cors());            // Middleware
app.use('/pos/api/v1/customers', customerRouter);
app.listen(8080, () => console.log("Server has been started at 8080"));

/*
* npm i cors
* npm i -D @types/cors
*
* import cors from 'cors';
* app.use(cors());
* */