/**
 * Database connection
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//Prisma
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getDatabase =  () => {
    return prisma
}

export { getDatabase }


