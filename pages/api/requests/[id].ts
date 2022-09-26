/**
 * Request ID API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//Next
import type { NextApiRequest } from 'next'
import type { NextApiResponse } from 'next'

//Custom libs
import { updateRequest } from '../../../lib/requests'
import { deleteRequest } from '../../../lib/requests'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    switch(req.method){
        
        case 'PUT':
            
            const updatedRequest = await updateRequest(req.body)
            res.json(updatedRequest)
            break
        
        case 'DELETE':

            const deletedRequest = await deleteRequest(req.query)
            res.json(deletedRequest)
            break

        default:

            res.send('Method not available!...')

    }
    
}