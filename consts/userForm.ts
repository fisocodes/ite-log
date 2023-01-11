/**
 * User form
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 6, 2023
 */

import type { Form } from '@/types/form'

export const userForm: Form = {
    apiEndpoint: '/api/users',
    label: 'Usuario',
    fields: [
        {
            type: 'role',
            label: 'Rol',
            initialValue: 'service',
            key: 'role'
        },
        {
            type: 'text',
            label: 'Nombre',
            initialValue: '',
            key: 'name'
        },
        {
            type: 'text',
            label: 'Apellido',
            initialValue: '',
            key: 'lastname'
        },
        {
            type: 'text',
            label: 'Correo',
            initialValue: '',
            key: 'email'
        },
        {
            type: 'password',
            label: 'Contraseña',
            initialValue: '',
            key: 'password'
        },
    ]
}

export const deleteUserForm: Form = {
    apiEndpoint: '/api/users',
    label: 'Eiminar usuario'
}