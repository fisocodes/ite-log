/**
 * CRUD Requests
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */

import type { Request } from '@prisma/client'

import { prisma } from './database'

/**
 * Create a request
 * @param {Request} data New request data 
 * @returns {Request} Created request
 */
export const createRequest = async (data: Request): Promise<Request> => {

    const createdRequest: Request = await prisma.request.create({
        data: {
            user: {
                connect: {id: data.userId}
            },
            building: data.building,
            date: data.date,
            description: data.description,
            name: data.name,
        }
    })

    return createdRequest
}

/**
 * Read requests
 * @param {Object} query Query to find requests
 * @returns {Request[]} Found requests
 */
export const readRequests = async (query): Promise<Request[]> => {

    const requests: Request[] = await prisma.request.findMany({
            where: {...query},
            include: {
                user: true
            }             
    })

    return requests
}

/**
 * Update a request
 * @param {Request} data Updated request
 * @returns 
 */
export const updateRequest = async(data:Request): Promise<Request> => {
    
    const updatedRequest: Request = await prisma.request.update({
        where: {id: data.id},
        data: {
            building: data.building,
            date: data.date,
            description: data.description,
            name: data.name,
            status: data.status 
        }
    })
    
    return updatedRequest
}

/**
 * Delete a request
 * @param {string} id Request id
 * @returns {Request} Deleted request
 */
export const deleteRequest = async (id: string): Promise<Request> => {

    const deletedRequest: Request = await prisma.request.delete({
        where: {id: id}
    })

    return deletedRequest
}