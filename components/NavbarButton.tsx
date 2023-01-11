/**
 * Navbar button component
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */

import type { NavbarButton } from '../consts'

import { useRouter } from 'next/router'

import { NavLink } from '@mantine/core'

export default function NavbarButton({data}: {data: NavbarButton}) {

    const {push, pathname} = useRouter()

    return <NavLink variant='filled' sx={{transition: '0.25s'}} label={data.label} icon={data.icon} onClick={() => push(data.href)} active={pathname === data.href}/>

}