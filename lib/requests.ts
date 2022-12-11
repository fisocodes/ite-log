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
            where: {...query},
            include: {user: true}
        }
    )

    return requests
}

const createRequest = async (requestData) => {

    const request = await database.request.create(
        {
            data: {
                name: requestData.name,
                building: requestData.building,
                description: requestData.description,
                user: {
                    connect: {id: requestData.user}
                }
            }
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
            data: {
                name: query.name,
                building: query.building,
                description: query.description,
                userId: query.user.id,
                status: query.status
            }
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