import pg from 'pg';
import dotenv from 'dotenv';
import * as c from './config/config'

dotenv.config()

const { Pool } = pg;

const config = {
    host: c.config.host,
    database: c.config.database,
    user: c.config.username,
    password: c.config.password,
    port: c.config.port
}

const Client = new Pool(config);

export default Client