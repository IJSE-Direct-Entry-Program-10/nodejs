import mysql, {Pool} from 'promise-mysql';

let datasource: Pool;

async function initPool(){
    datasource = await mysql.createPool({
        host: 'localhost',
        port: 3306,
        database: 'dep10_pos',
        user: 'root',
        password: 'mysql',
        connectionLimit: 10
    });
}

initPool().then(async ()=>{
    await getAllCustomers();
    datasource.end();
});

async function getAllCustomers(){
    const resultSet = await datasource.query("SELECT * FROM customer");
    console.log(resultSet);
}

async function saveCustomer(name:string, address:string, contact:string) {
    const result = await datasource.query('INSERT INTO customer (name, address, contact) VALUES (?, ?, ?)',
        [name, address, contact]);
    console.log({
        id: result.insertId,
        name, address, contact
    });
}

async function updateCustomer(id: number, name: string, address: string, contact: string){
    const result = await datasource.query("UPDATE customer SET name =?, address=?, contact=? WHERE id=?",
        [name, address, contact, id]);
    console.log("affectedRows: ", result.affectedRows);
    console.log("changedRows: ", result.changedRows);
}

async function deleteCustomer(id: number) {
    const result = await datasource.query('DELETE FROM customer WHERE id=?', [id]);
    console.log(result.affectedRows === 1 ? "Customer has been deleted": "No customer record found");
}

// deleteCustomer(61);
// updateCustomer(59, 'Ruwan', 'Galle', '078-45678912');
// saveCustomer('Kasun', 'Panadura', '085-1234568');
// getAllCustomers();

/* Typescript Union Types */
// let x:string | number | boolean = 10;


