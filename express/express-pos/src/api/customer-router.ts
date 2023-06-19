import express from 'express';

export const customerRouter = express.Router();

customerRouter.get('/', (req, res)=>{
    res.send("<h1>Get All Customers</h1>");
});

customerRouter.post('/', (req, res)=>{
    res.send("<h1>Save Customer</h1>");
});

customerRouter.delete('/:customerId', (req, res)=>{
    res.send(`<h1>Delete Customer: ${req.params.customerId}</h1>`);
});

customerRouter.patch('/:customerId', (req, res)=>{
    res.send(`<h1>Update Customer: ${req.params.customerId}</h1>`);
});