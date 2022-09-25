/**
 * Database users methods
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//Custom libs
import { getDatabase } from "./database"
const database = getDatabase()

const getUsers = async (query) => {

    const users = await database.user.findMany(
        {
            where: {...query}               
        }
    )

    return users

}

const updateUser = async(query) => {
    
    const user = await database.user.update(
        {
            where: {
                id: query.id
            },
            data: query
        },
    )

    return user
}

const deleteUser = async (query) => {

    const user = await database.user.delete(
        {
            where: {...query}
        }
    )

    return user;
}

export {

    getUsers,
    updateUser,
    deleteUser,

}