import {createPool} from 'mysql2/promise';

export const  pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'MYSQLUlises',
    port: 3306,
    database: 'shortflix'
});