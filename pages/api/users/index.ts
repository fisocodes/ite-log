/**
 * Users API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '@prisma/client'

import { readUsers, createUser } from '@/prisma/users'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    switch(req.method){

        case 'POST':

            const createdUser: User = await createUser(req.body)
            res.json(createdUser)
            break

        case 'GET':

            const users: User[] = await readUsers(req.body)
            res.json(users)
            break

        default:

            res.send('Method not available!...')

    }
}