/**
 * User form
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 11, 2023
 */

import type { Form } from '@/types/form'

export const requestForm: Form = {
    apiEndpoint: '/api/requests',
    label: 'Petición',
    fields: [
        {
            type: 'status',
            label: 'Estado',
            initialValue: 'pending',
            key: 'status'
        },
        {
            type: 'text',
            label: 'Nombre',
            initialValue: '',
            key: 'name'
        },
        {
            type: 'building',
            label: 'Edificio',
            initialValue: '100',
            key: 'building'
        },
        {
            type: 'text',
            label: 'Descripción',
            initialValue: '',
            key: 'description'
        },
        {
            type: 'user',
            label: 'Prestador',
            initialValue: '',
            key: 'userId'
        },
    ]
}

export const deleteRequestForm: Form = {
    apiEndpoint: '/api/requests',
    label: 'Eiminar petición'
}