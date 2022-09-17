import type { NextApiRequest } from "next"
import type { NextApiResponse } from "next"

import { getUsers } from "../../../lib/users"

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'GET'){
        const users = await getUsers()
        res.json(users)
    }else{
        res.send('Method not available!...')
    }
    
}