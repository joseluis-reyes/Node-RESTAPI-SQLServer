import {config} from 'dotenv'
config();

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DBUSER || '',
    dbPass: process.env.DBPASS || '',
    dbServer: process.env.DBSERVER || 'localhost',
    dbName: process.env.DBNAME || '',
}