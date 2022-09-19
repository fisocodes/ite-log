/**
 * Users API endpoint
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 18, 2022
 */


//Next
import type { NextApiRequest } from "next"
import type { NextApiResponse } from "next"


//Custom libraries
import { getUsers } from "../../../lib/users"
import { createUser } from "../../../lib/users"

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'GET'){

        const users = await getUsers(req.query)
        res.json(users)

    }if(req.method === 'POST'){

        const result = await createUser(req.body)
        res.send(result)

    }
    else{

        res.send('Method not available!...')

    }
}