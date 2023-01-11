/**
 * User ID API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '@prisma/client'

import { updateUser, deleteUser } from '@/prisma/users'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    switch(req.method){
        
        case 'PUT':
            
            const updatedUser: User = await updateUser(req.body)
            res.json(updatedUser)
            break
        
        case 'DELETE':

            const deletedUser: User = await deleteUser(typeof req.query.id === 'string' && req.query.id)
            res.json(deletedUser)
            break

        default:

            res.send('Method not available!...')

    }
    
}