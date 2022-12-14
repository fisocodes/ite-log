/**
 * Index page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//Next
import { GetServerSideProps } from 'next'

//NextAuth
import { getSession } from 'next-auth/react'

//Mantine
import { Title } from '@mantine/core'

export default () => {
    return <Title>Home</Title>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                permanent: false,
                destination: '/signin',
            },
            props: {}
        }
    }
    
    return {
        props: {}
    }
}