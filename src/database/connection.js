import sql from 'mssql'
import cfg from '../config'

const dbSettings = {
    user: cfg.dbUser,
    password: cfg.dbPass,
    server: cfg.dbServer,
    database: cfg.dbName,
    options: {
        encrypt: true,
        trustServerCertificate: true,
        cryptoCredentialsDetails: { // Esto no viene en el tutorial: https://stackoverflow.com/questions/61197858/nw-js-node-js-throws-ssl-routinesssl-choose-client-versionunsupported-proto
            minVersion: 'TLSv1'
        }
    }
}

export async function getConnection () {
    try {
        const conn = await sql.connect(dbSettings)
        return conn
    } catch (error) {
        console.error(error)
    }
}

export {sql}