import express from 'express';

export const itemRouter = express.Router();

itemRouter.get('/', (req, res) => {
    res.send("<h1>Get All Items</h1>");
});

itemRouter.post('/', (req, res) => {
    res.send("<h1>Save Item</h1>");
});

itemRouter.delete('/:itemCode', (req, res) => {
    res.send(`<h1>Delete Item: ${req.params.itemCode}</h1>`);
});

itemRouter.patch('/:itemCode', (req, res) => {
    res.send(`<h1>Update Item: ${req.params.itemCode}</h1>`);
});