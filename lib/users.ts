/**
 * Database users methods
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//Bcrypt
const bcrypt = require('bcrypt')

//Custom libraries
import { getDatabase } from "./database";

const getUsers = async (query = {}) => {

    let queryString = ''
    let params = []

    if(Object.keys(query).length !== 0){

        queryString += 'WHERE '

        for(const param in query){

            queryString += `${param} = ? AND`
            params.push(query[param])

        }

        queryString = queryString.slice(0, -3)

    }

    const database = await getDatabase()
    const users = database.all(
        `SELECT * FROM users ${queryString}`,
        params
    )
    return users

}

const getUserById = async (id) => {

    const database = await getDatabase()
    const user = database.get(
        'SELECT * FROM users WHERE id = ?',
        [id]
    )
    return user

}

const getUserByEmail = async (email) => {

    const database = await getDatabase()
    const user = database.get(
        'SELECT * FROM users WHERE email = ?',
        [email]
    )
    return user

}

const createUser = async (user) => {

    const encryptedPassword = await bcrypt.hash(user.password, 12)

    const database = await getDatabase()
    const result = await database.run(
        'INSERT INTO users (role, name, lastname, email, password) VALUES(?,?,?,?,?)',
        [user.role, user.name, user.lastname, user.email, encryptedPassword]
    )

    return result

}

const deleteUserById = async (id) => {

    const database = await getDatabase()
    const result = await database.run(
        'DELETE FROM users WHERE id = ?',
        [id]
    )

    return result

}

const deleteUserByEmail = async (email) => {

    const database = await getDatabase()
    const result = await database.run(
        'DELETE FROM users WHERE email = ?',
        [email]
    )

    return result

}

export {

    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    deleteUserById,
    deleteUserByEmail

}