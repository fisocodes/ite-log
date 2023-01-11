/**
 * Requests API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * Juanary 3, 2022
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import type { Request } from '@prisma/client'

import { createRequest, readRequests } from '@/prisma/requests'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    switch(req.method){

        case 'GET':

            const requests: Request[] = await readRequests(req.query)
            res.json(requests)
            break
        
        case 'POST':

            const request: Request = await createRequest(req.body)
            res.json(request)
            break

        default:

            res.send('Method not available!...')

    }
}