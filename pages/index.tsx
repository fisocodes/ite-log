/*
    Index page. This page is shown when
    accesing to /
*/

import { Stack } from '@mantine/core'
import { Title } from '@mantine/core'
import { Pagination } from '@mantine/core'

export default function Home(props){
    return <Title>Home</Title>
}

export async function getServerSideProps(context) {
    
    const session = true

    if(!session){
        return {
            redirect : {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props:{sess: session}
    }
}