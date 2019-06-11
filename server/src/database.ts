import { createPool } from 'mysql2/promise';
import keys from './keys';


export const connect = async () => {
    const connection = await createPool(keys.database);
    return connection;
}