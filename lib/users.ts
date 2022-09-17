import { getDatabase } from "./database";

const getUsers = async () => {
    const database = await getDatabase()
    const users = database.get('SELECT * FROM users', [])
    return users
}

const getUserById = async (id) => {
    const database = await getDatabase()
    const user = database.get('SELECT * FROM users WHERE id = ?', [id])
    return user
}

const getUserByEmail = async (email) => {
    const database = await getDatabase()
    const user = database.get('SELECT * FROM users WHERE email = ?', [email])
    return user
}

export { 
    getUsers,
    getUserById,
    getUserByEmail
}