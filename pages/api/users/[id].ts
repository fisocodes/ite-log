/**
 * User ID API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 18, 2022
 */

//Next
import type { NextApiRequest } from 'next'
import type { NextApiResponse } from 'next'

//Custom libs
import { updateUser } from '../../../lib/users'
import { deleteUser } from '../../../lib/users'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    switch(req.method){
        
        case 'PUT':
            
            const updatedUser = await updateUser(req.body)
            res.json(updatedUser)
            break
        
        case 'DELETE':

            const deletedUser = await deleteUser(req.query)
            res.json(deletedUser)
            break

        default:

            res.send('Method not available!...')

    }
    
}