/**
 * Database connection
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

import { Database } from 'sqlite-async'

const getDatabase = async () => {
    const database = await Database.open(`${process.env.DATABASE_ROUTE}`)
    return database
}

export { getDatabase }


