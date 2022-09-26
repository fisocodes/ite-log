/**
 * Requests API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 18, 2022
 */

//Next
import type { NextApiRequest } from 'next'
import type { NextApiResponse } from 'next'

//Custom libraries
import { getRequests } from '../../../lib/requests'
import { createRequest } from '../../../lib/requests'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    switch(req.method){

        case 'GET':

            const requests = await getRequests(req.query)
            res.json(requests)
            break
        
        case 'POST':

            const request = await createRequest(req.body)
            res.json(request)
            break

        default:

            res.send('Method not available!...')

    }
}