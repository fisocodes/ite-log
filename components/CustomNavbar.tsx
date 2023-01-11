/**
 * Custom navbar component
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

import { useSession } from 'next-auth/react'

import { signOut } from 'next-auth/react'

import { Navbar, NavLink, Avatar, Title, Stack } from '@mantine/core'
import { IconLogout } from '@tabler/icons'
import NavbarButton from './NavbarButton'
import { navbarButtons } from '../consts'


export default function CustomNavbar(){

    const {data: session} = useSession()

    return <Navbar width={{ base: 200 }}>
        <Stack justify='space-between' style={{height: '100%'}} pb='xl' pt='xl'>
            <Stack spacing='xs' align='center'>
                <Avatar size={125} radius={100}>
                    {`${session?.user?.name[0].toUpperCase()}${session?.user?.lastname[0].toUpperCase()}`}
                </Avatar>
                <Title order={4}>{`${session?.user?.name} ${session?.user?.lastname}`}</Title>
                {navbarButtons.map(button => button.adminRequired ? session?.user?.role === 'admin' ? <NavbarButton key={button.href} data={button}/> : null : <NavbarButton key={button.href} data={button}/>)}
            </Stack>
            <NavLink onClick={() => signOut()} label='Cerrar sesión' color='red' active variant='subtle' icon={<IconLogout/>}/>
        </Stack>
    </Navbar>
}