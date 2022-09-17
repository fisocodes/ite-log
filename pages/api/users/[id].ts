import type { NextApiRequest } from "next"
import type { NextApiResponse } from "next"

import { getUserById } from "../../../lib/users"

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'GET'){
        const user = await getUserById(req.query.id)
        res.json(user)
    }else{
        res.send('Method not available!...')
    }
    
}