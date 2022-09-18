/**
 * Users page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//React
import { useState } from 'react'

//Next
import { GetServerSideProps } from 'next'

//NextAuth
import { getSession } from 'next-auth/react'

//Mantine
import { Title } from '@mantine/core'
import { Stack } from '@mantine/core'
import { Group } from '@mantine/core'
import { Button } from '@mantine/core'
import { Table } from '@mantine/core'

//Icons
import { IconUserPlus } from '@tabler/icons'

//Custom components
import NewUserModal from '../components/NewUserModal'

//Custom lib
import { getUsers } from '../lib/users';

export default function Users({users}){

    const [openNew, setOpenNew] = useState(false)

    return <Stack>
        <Title>Usuarios</Title>
        <Group>
           <Button leftIcon={<IconUserPlus/>} onClick={() => setOpenNew(true)}>Nuevo</Button> 
        </Group>
        <NewUserModal opened={openNew} setOpened={setOpenNew}/>
        <Table striped highlightOnHover>
            <thead>
                <tr>
                    <th>Rol</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => 
                        <tr key={user.id}>
                            <td>{user.role}</td>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </Stack>
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

    const users = await getUsers()
    
    return {
        props: {users: users}
    }
}