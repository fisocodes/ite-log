/**
 * CRUD Users
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */

import type { User } from '@prisma/client'

import { prisma } from './database'
import bcrypt  from 'bcrypt'

/**
 * Create an user
 * @param {User} data New user data
 * @returns {User} Created user
 */
export const createUser = async (data: User): Promise<User> => {

    const createdUser: User = await prisma.user.create({
        data: {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: await bcrypt.hash(data.password, 12), //Encrypt password
            role: data.role
        }
    })

    return createdUser

}

/**
 * Read users
 * @param {Object} query Query to find users
 * @returns {User[]} Found users
 */
export const readUsers = async (query): Promise<User[]> => {

    const users: User[] = await prisma.user.findMany({
            where: {...query}               
    })

    return users
}

/**
 * Read user by email
 * @param {string} email User email 
 * @returns {User} Read user
 */
export const readUserByEmail = async (email: string): Promise<User> => {

    const user: User = await prisma.user.findUnique({
        where: {email: email}
    })

    return user
}

/**
 * Update an user
 * @param {User} data Updated data 
 * @returns {User} Updated user
 */
export const updateUser = async(data:User): Promise<User> => {

    console.log(data)
    
    const updatedUser: User = await prisma.user.update({
        where: {id: data.id},
        data: {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            role: data.role   
        }
    })
    
    return updatedUser
}

/**
 * Delete a user
 * @param {string} id User id 
 * @returns {User} Deleted user
 */
export const deleteUser = async (id: string): Promise<User> => {

    const deletedUser: User = await prisma.user.delete({
        where: {id: id}
    })

    return deletedUser
}