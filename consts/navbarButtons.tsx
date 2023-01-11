/**
 * Navbar buttons
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */

import { IconLayoutDashboard, IconClipboardText, IconUsers } from '@tabler/icons'

export interface NavbarButton {
    adminRequired: boolean,
    href: string,
    label: string,
    icon: JSX.Element
}

export const navbarButtons: NavbarButton[] = [
    {
        adminRequired: false,
        href: '/',
        label: 'Dashboard',
        icon: <IconLayoutDashboard/>
    },
    {
        adminRequired: false,
        href: '/requests',
        label: 'Peticiones',
        icon: <IconClipboardText/>
    },
    {
        adminRequired: true,
        href: '/users',
        label: 'Usuarios',
        icon: <IconUsers/>
    }
]