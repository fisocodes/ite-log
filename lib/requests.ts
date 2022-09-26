/**
 * Database requests methods
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//Custom libs
import { getDatabase } from "./database"
const database = getDatabase()

const getRequests = async (query) => {

    const requests = database.request.findMany(
        {
            where: {...query}
        }
    )

    return requests
}

const createRequest = async (requestData) => {

    const request = await database.request.create(
        {
            data: {...requestData}
        }
    )

    return request

}

const updateRequest = async (query) => {
    
    const request = await database.request.update(
        {
            where: {
                id: query.id
            },
            data: query
        },
    )

    return request
}

const deleteRequest = async (query) => {

    const request = await database.request.delete(
        {
            where: {...query}
        }
    )

    return request;
}

export {

    getRequests,
    createRequest,
    updateRequest,
    deleteRequest,

}