/**
 * Request ID API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import type { Request } from '@prisma/client'

import { updateRequest, deleteRequest } from '@/prisma/requests'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    switch(req.method){
        
        case 'PUT':
            
            const updatedRequest: Request = await updateRequest(req.body)
            res.json(updatedRequest)
            break
        
        case 'DELETE':

            const deletedRequest: Request = await deleteRequest(typeof req.query.id === 'string' && req.query.id)
            res.json(deletedRequest)
            break

        default:

            res.send('Method not available!...')

    }
    
}