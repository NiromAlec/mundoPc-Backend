import mysql from "mysql2";

const DEFAULT_CONFIG: any = {
    host: '172.29.47.183',
    user: 'root',
    port: 3306,
    password: '1234',
    database: 'flutter'
}

const URL = process.env.DATABASE_URL ?? DEFAULT_CONFIG;
//* Podemos usar este siguiendo las buenas practicas de TS
//const connection = typeof URL === 'string' ? mysql.createConnection(URL) : mysql.createConnection(URL);
//* En caso contrario solamente usar el valor any en el DEFAULT_CONFIG
const connection = mysql.createConnection(URL);

export default connection.promise();
