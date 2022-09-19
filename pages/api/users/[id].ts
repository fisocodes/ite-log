/**
 * User ID API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 18, 2022
 */


//Next
import type { NextApiRequest } from "next"
import type { NextApiResponse } from "next"

//Custom libraries
import { getUserById } from "../../../lib/users"
import { deleteUserById } from "../../../lib/users"

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'GET'){

        const user = await getUserById(req.query.id)
        res.json(user)

    }if(req.method === 'DELETE'){

        const result = await deleteUserById(req.query.id)
        res.send(result)

    }else{

        res.send('Method not available!...')

    }
    
}