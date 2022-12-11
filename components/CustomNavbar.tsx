/**
 * Custom navbar component
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//React
import { useEffect } from 'react'
import { useState } from 'react'

//Next
import { useRouter } from 'next/router'

//NextAuth
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

//Mantine
import { Navbar } from '@mantine/core'
import { NavLink } from '@mantine/core'
import { Avatar } from '@mantine/core'
import { Title } from '@mantine/core'
import { Center } from '@mantine/core'
import { Stack } from '@mantine/core'
import { Divider } from '@mantine/core'

//Icons
import { IconUsers } from '@tabler/icons'
import { IconLogout } from '@tabler/icons'
import { IconLayoutDashboard } from '@tabler/icons'
import { IconClipboardText } from '@tabler/icons'


export default function CustomNavbar(){

    const router = useRouter()
    const {data: session, status} = useSession()
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        
        if(status == 'authenticated'){
            setUser(session.user)
        }
        
    }, [status])

    return <Navbar width={{ base: 200 }}>
        <Stack justify='space-between' style={{height: '100%'}} pb='xl' pt='xl'>
            <Stack spacing='xs'>
                <Center>
                    <Stack align='center'>
                        <Avatar size={125} radius={100}>
                            {`${user?.name[0].toUpperCase()}${user?.lastname[0].toUpperCase()}`}
                        </Avatar>
                        <Title order={4}>{`${user?.name} ${user?.lastname}`}</Title>
                    </Stack>
                </Center>
                <Divider/>
                <NavLink onClick={() => router.push('/')} active={router.pathname === '/'} variant='filled' label='Dashboard' icon={<IconLayoutDashboard/>}/>
                <NavLink onClick={() => router.push('/requests')} active={router.pathname === '/requests'} variant='filled' label='Peticiones' icon={<IconClipboardText/>}/>
                {
                    user?.role === 'admin' ?
                    <NavLink onClick={() => router.push('/users')} active={router.pathname === '/users'} variant='filled' label='Usuarios' icon={<IconUsers/>}/>
                    :
                    null
                }
            </Stack>
            <Stack spacing='xs'>
                <Divider/>
                <NavLink onClick={() => signOut()} label='Cerrar sesión' color='red' active variant='subtle' icon={<IconLogout/>}/>
            </Stack>
        </Stack>
    </Navbar>
}