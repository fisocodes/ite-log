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
import { useMantineTheme } from '@mantine/core'
import { Navbar } from '@mantine/core'
import { NavLink } from '@mantine/core'
import { Avatar } from '@mantine/core'
import { Title } from '@mantine/core'
import { Center } from '@mantine/core'
import { Stack } from '@mantine/core'

//Icons
import { IconUsers } from '@tabler/icons'
import { IconLogout } from '@tabler/icons'
import { IconLayoutDashboard } from '@tabler/icons'


export default function CustomNavbar(){

    const theme = useMantineTheme()
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
                <NavLink onClick={() => router.push('/')} active={router.pathname === '/'} variant='filled' label='Dasboard' icon={<IconLayoutDashboard/>}/>
                <NavLink onClick={() => router.push('/users')} active={router.pathname === '/users'} variant='filled' label='Usuarios' icon={<IconUsers/>}/>
            </Stack>
            <Stack spacing={0}>
                <NavLink onClick={() => signOut()} label='Cerrar sesión' color='red' active variant='light' icon={<IconLogout/>}/>
            </Stack>
        </Stack>
    </Navbar>
}