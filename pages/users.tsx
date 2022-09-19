/**
 * Users page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//React
import { useState } from 'react'
import { useEffect } from 'react'

//Next
import { GetServerSideProps } from 'next'

//NextAuth
import { getSession } from 'next-auth/react'

//Mantine
import { Title } from '@mantine/core'
import { Stack } from '@mantine/core'
import { Center } from '@mantine/core'
import { Group } from '@mantine/core'
import { Button } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { Table } from '@mantine/core'
import { Loader } from '@mantine/core'

//Icons
import { IconUserPlus } from '@tabler/icons'
import { IconUserMinus } from '@tabler/icons'

//Custom components
import NewUserModal from '../components/NewUserModal'
import DeleteUserModal from '../components/DeleteUserModal'

//Custom lib
import { getUsers } from '../lib/users';

//Axios
const axios = require('axios').default

export default function Users(){

    const [tableUsers, setTableUsers] = useState([])
    const [openNew, setOpenNew] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [userDelete, setUserDelete] = useState({})
    const [loader, setLoader] = useState(false)

    const handleDeleteUser = (user) => {

        setUserDelete(user)
        setOpenDelete(true)

    }

    //Update users table
    useEffect(
        () => {
            
            setLoader(true)

            const getUsers = async () => {

                const response = await axios.get('http://localhost:3000/api/users')
                const users = response.data
                setTableUsers(users)

            }

            getUsers()
            setLoader(false)

        },
        [openNew, openDelete]
    )

    return <Stack>
        <Title>Usuarios</Title>
        <Group>
           <Button leftIcon={<IconUserPlus/>} onClick={() => setOpenNew(true)}>Nuevo</Button> 
        </Group>
        <NewUserModal opened={openNew} setOpened={setOpenNew}/>
        <DeleteUserModal opened={openDelete} setOpened={setOpenDelete} user={userDelete}/>
        {
            loader ?
            <Center>
                <Loader size='xl'/>
            </Center>
            :
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
                        tableUsers.map(user => 
                            <tr key={user.id}>
                                <td>{user.role}</td>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        <ActionIcon color='red' variant='filled' onClick={() => handleDeleteUser(user)}>
                                            <IconUserMinus/>
                                        </ActionIcon>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        } 
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
    
    return {
        props: {}
    }
}