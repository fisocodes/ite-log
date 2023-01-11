/**
 * Requests page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//Next
import { GetServerSideProps } from 'next'
import type { User } from '@prisma/client'

//NextAuth
import { getSession } from 'next-auth/react'

//Mantine
import { Title } from '@mantine/core'
import { Stack } from '@mantine/core'
import { Group } from '@mantine/core'
import { ScrollArea } from '@mantine/core'
import { Table } from '@mantine/core'
import { Button } from '@mantine/core'

//Custom components
import { requestForm, deleteRequestForm } from '../consts'

import { openContextModal } from '@mantine/modals'

import useSWR from 'swr'

export default ({user}: {user: User}) => {

    const {isLoading, data: requests, mutate} = useSWR(`${process.env.NEXT_PUBLIC_LOG_URL}/api/requests`)

    return <Stack>
        <Title>Peticiones</Title>
        <Group>
            <Button variant='default' radius='xs' onClick={() => openContextModal({modal: 'new', title: requestForm.label, innerProps:{form: requestForm, onSuccess: mutate}})}>Nuevo</Button>
        </Group>
        <Title order={3}>Pendientes</Title>
        <ScrollArea>
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Fecha</th><th>Edificio</th><th>Nombre</th><th>Prestador</th><th>Descripción</th><th/>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && requests.filter(request => request.status === 'pending').map(request => <tr key={request.id}>
                        <td>{new Date(request.date).toLocaleDateString()}</td>
                        <td>{request.building}</td>
                        <td>{request.name}</td>
                        <td>{`${request.user.name} ${request.user.lastname}`}</td>
                        <td>{request.description}</td>
                        <td>
                            <Group>
                                {user.role === 'admin' && <Button variant='default' radius='xs' onClick={() => openContextModal({modal: 'edit', title: requestForm.label, innerProps:{form: requestForm, data: request, onSuccess: mutate}})}>Editar</Button>}
                                {user.role === 'admin' && <Button radius='xs' variant='outline' color='red' onClick={() => openContextModal({modal: 'delete', title: deleteRequestForm.label, innerProps:{form: deleteRequestForm, data: request, onSuccess: mutate}})}>Eliminar</Button>}
                            </Group>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </ScrollArea>
        <Title order={3}>Pendientes</Title>
        <ScrollArea>
            <Table striped highlightOnHover>
                <thead>
                    <tr>
                        <th>Fecha</th><th>Edificio</th><th>Nombre</th><th>Prestador</th><th>Descripción</th><th/>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && requests.filter(request => request.status === 'done').map(request => <tr key={request.id}>
                        <td>{new Date(request.date).toLocaleDateString()}</td>
                        <td>{request.building}</td>
                        <td>{request.name}</td>
                        <td>{`${request.user.name} ${request.user.lastname}`}</td>
                        <td>{request.description}</td>
                        <td>
                            <Group>
                                {user.role === 'admin' && <Button variant='default' radius='xs' onClick={() => openContextModal({modal: 'edit', title: requestForm.label, innerProps:{form: requestForm, data: request, onSuccess: mutate}})}>Editar</Button>}
                                {user.role === 'admin' && <Button radius='xs' variant='outline' color='red' onClick={() => openContextModal({modal: 'delete', title: deleteRequestForm.label, innerProps:{form: deleteRequestForm, data: request, onSuccess: mutate}})}>Eliminar</Button>}
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
    }
    
    return {
        props: {user: session.user}
    }
}