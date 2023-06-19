import mysql from 'promise-mysql';

export class DatabaseConnectionPool {
    private static instance: DatabaseConnectionPool;
    private readonly pool;

    private constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            port: 3306,
            database: 'dep10_pos',
            user: 'root',
            password: 'mysql',
            connectionLimit: 10
        });
    }

    static getInstance(): DatabaseConnectionPool {
        return (!DatabaseConnectionPool.instance) ?
            DatabaseConnectionPool.instance = new DatabaseConnectionPool() :
            DatabaseConnectionPool.instance;
    }

    getPool() {
        return this.pool;
    }
}

