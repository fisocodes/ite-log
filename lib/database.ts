import { Database } from 'sqlite-async'

const getDatabase = async () => {
    const database = await Database.open(`${process.env.DATABASE_ROUTE}`)
    return database
}

export { getDatabase }


