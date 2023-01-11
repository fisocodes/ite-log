/**
 * New resource form
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 6, 2023
 */

import type { ContextModalProps } from '@mantine/modals'
import type { Form, FormField } from '@/types/form'

import { useForm } from '@mantine/form'

import { Stack, Group, Button, Text } from '@mantine/core'
import axios from 'axios'

import { buildings } from '@/consts/buildings'
import { roles } from '@/consts/roles'

export const DeleteResourceForm = ({context, id, innerProps}: ContextModalProps<{form: Form, data: any, onSuccess: Function}>) => {

    const handleSubmit: Function = async (values: Object) => {

        context.closeModal(id)

        const response = await axios.delete(`${process.env.NEXT_PUBLIC_LOG_URL}${innerProps.form.apiEndpoint}/${innerProps.data.id}`)
        innerProps.onSuccess()

    }

    return <Stack>
        <Text>
            ¿Está seguro que desea eliminar este registro? Los datos y la información relacionada será borrada.
        </Text>
        <Group position='right'>
            <Button variant='default' compact radius='xs' onClick={() => context.closeModal(id)}>Cancelar</Button>
            <Button variant='outline' color='red' onClick={() => handleSubmit()} compact radius='xs'>Eliminar</Button>
        </Group>
    </Stack>
}