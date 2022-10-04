/**
 * Requests page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//React
import { useState } from 'react'
import { useEffect } from 'react'

//Next
import { GetServerSideProps } from 'next'

//NextAuth
import { getSession } from 'next-auth/react'
import { useSession } from 'next-auth/react'

//Mantine
import { Title } from '@mantine/core'
import { Stack } from '@mantine/core'
import { Group } from '@mantine/core'
import { Center } from '@mantine/core'
import { ScrollArea } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { Table } from '@mantine/core'
import { Loader } from '@mantine/core'
import { Button } from '@mantine/core'

//Icons
import { IconClipboardX } from '@tabler/icons'
import { IconEdit } from '@tabler/icons'
import { IconClipboardPlus } from '@tabler/icons'
import { IconClipboardCheck } from '@tabler/icons'

//Custom components
import NewRequestModal from '../components/NewRequestModal'
import DeleteRequestModal from '../components/DeleteRequestModal'
import FinishRequestModal from '../components/FinishRequestModal'

//Axios
const axios = require('axios').default

export default () => {

    const {data: session, status} = useSession()
    const [user, setUser] = useState(null)

    const [tableRequests, setTableRequests] = useState([])
    const [openNew, setOpenNew] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openFinish, setOpenFinish] = useState(false)
    const [request, setRequest] = useState({})
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        
        if(status == 'authenticated'){
            setUser(session.user)
        }
        
    }, [status])

    const handleDeleteRequest = (request) => {

        setRequest(request)
        setOpenDelete(true)

    }

    const handleEditRequest = (request) => {

        setRequest(request)
        setOpenEdit(true)

    }

    const handleFinishRequest = (request) => {

        setRequest(request)
        setOpenFinish(true)

    }

    //Update requests table
    useEffect(
        () => {
            
            setLoader(true)

            const getRequests = async () => {

                const response = await axios.get('http://10.4.4.59:3000/api/requests')
                const requests = response.data
                setTableRequests(requests)

            }

            getRequests()
            setLoader(false)

        },
        [openNew, openDelete, openEdit, openFinish]
    )

    return <Stack>
        <Title>Peticiones</Title>
        {
            loader ?
            <Center>
                <Loader size='xl'/>
            </Center>
            :
            <Stack>
                <Group position='right'>
                    <Button leftIcon={<IconClipboardPlus/>} onClick={() => setOpenNew(true)}>Nueva petición</Button>
                </Group>
                <NewRequestModal opened={openNew} setOpened={setOpenNew}/>
                <DeleteRequestModal opened={openDelete} setOpened={setOpenDelete} request={request}/>
                <FinishRequestModal opened={openFinish} setOpened={setOpenFinish} request={request}/>
                <Title order={3}>Pendientes</Title>
                <ScrollArea>
                    <Table striped highlightOnHover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Edificio</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableRequests.filter(request => request.status === 'pending').map(request => 
                                    <tr key={request.id}>
                                        <td>{new Date(request.date).toLocaleDateString('es-MX')}</td>
                                        <td>{request.building}</td>
                                        <td>{request.name}</td>
                                        <td>{request.description}</td>
                                        <td>
                                            {
                                                user?.role === 'admin' ?
                                                <ActionIcon color='green' variant='filled' onClick={() => handleFinishRequest(request)}>
                                                    <IconClipboardCheck/>
                                                </ActionIcon>
                                                :
                                                null
                                            }
                                        </td>
                                        <td>
                                            {
                                                user?.role === 'admin' ?
                                                <ActionIcon variant='filled' onClick={() => handleEditRequest(request)}>
                                                    <IconEdit/>
                                                </ActionIcon>
                                                :
                                                null
                                            }
                                        </td>
                                        <td>
                                            {
                                                user?.role === 'admin' ?
                                                <ActionIcon color='red' variant='filled' onClick={() => handleDeleteRequest(request)}>
                                                    <IconClipboardX/>
                                                </ActionIcon>
                                                :
                                                null
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </ScrollArea>
                <Title order={3}>Finalizadas</Title>
                <ScrollArea>
                    <Table striped highlightOnHover>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Edificio</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableRequests.filter(request => request.status === 'done').map(request => 
                                    <tr key={request.id}>
                                        <td>{new Date(request.date).toLocaleDateString('es-MX')}</td>
                                        <td>{request.building}</td>
                                        <td>{request.name}</td>
                                        <td>{request.description}</td>
                                        <td>
                                            {
                                                user?.role === 'admin' ?
                                                <ActionIcon color='red' variant='filled' onClick={() => handleDeleteRequest(request)}>
                                                    <IconClipboardX/>
                                                </ActionIcon>
                                                :
                                                null
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </ScrollArea>
            </Stack>
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