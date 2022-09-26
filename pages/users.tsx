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
import { ScrollArea } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { Table } from '@mantine/core'
import { Loader } from '@mantine/core'

//Icons
import { IconUserMinus } from '@tabler/icons'
import { IconEdit } from '@tabler/icons'

//Custom components
import DeleteUserModal from '../components/DeleteUserModal'
import EditUserModal from '../components/EditUserModal'

//Axios
const axios = require('axios').default

export default function Users(){

    const [tableUsers, setTableUsers] = useState([])
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(false)

    const handleDeleteUser = (user) => {

        setUser(user)
        setOpenDelete(true)

    }

    const handleEditUser = (user) => {

        setUser(user)
        setOpenEdit(true)

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
        [openDelete, openEdit]
    )

    return <Stack>
        <Title>Usuarios</Title>
        <DeleteUserModal opened={openDelete} setOpened={setOpenDelete} user={user}/>
        <EditUserModal opened={openEdit} setOpened={setOpenEdit} user={user}/>
        {
            loader ?
            <Center>
                <Loader size='xl'/>
            </Center>
            :
            <ScrollArea>
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
                                            <ActionIcon variant='filled' onClick={() => handleEditUser(user)}>
                                                <IconEdit/>
                                            </ActionIcon>
                                        }
                                    </td>
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
            </ScrollArea>
        } 
    </Stack>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const session = await getSession(context)
    const user = {
        role: null,
        ...session.user
    }

    if(!session){
        return {
            redirect: {
                permanent: false,
                destination: '/signin',
            },
            props: {}
        }
    }

    if(user.role !== 'admin'){
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
            props: {}
        }
    }
    
    return {
        props: {}
    }
}