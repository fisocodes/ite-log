/**
 * Users page
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
import { Stack } from '@mantine/core'
import { Center } from '@mantine/core'
import { ScrollArea } from '@mantine/core'
import { Table } from '@mantine/core'
import { Loader } from '@mantine/core'
import { Button } from '@mantine/core'
import { Group } from '@mantine/core'
import { openContextModal } from '@mantine/modals'

//Custom components
import { userForm, deleteUserForm } from '../consts'

import useSWR from 'swr'

export default function Users(){
    
    const {isLoading, data: users, mutate} = useSWR(`${process.env.NEXT_PUBLIC_LOG_URL}/api/users`)
    
    return <Stack>
        <Title>Usuarios</Title>
        <Group>
            <Button variant='default' radius='xs' onClick={() => openContextModal({modal: 'new', title: userForm.label, innerProps:{form: userForm, onSuccess: ()=> {}}})}>Nuevo</Button>
        </Group>
        <ScrollArea>
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Rol</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th/>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && users.map(user => <tr key={user.id}>
                        <td>{user.role}</td>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>
                            <Group>
                                <Button variant='default' radius='xs' onClick={() => openContextModal({modal: 'edit', title: userForm.label, innerProps:{form: userForm, data: user, onSuccess: mutate}})}>Editar</Button>
                                <Button radius='xs' variant='outline' color='red' onClick={() => openContextModal({modal: 'delete', title: deleteUserForm.label, innerProps:{form: deleteUserForm, data: user, onSuccess: mutate}})}>Eliminar</Button>
                            </Group>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </ScrollArea>
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
    }else{

        const user = {
            role: null,
            ...session.user
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

    }

    
    
    return {
        props: {}
    }
}