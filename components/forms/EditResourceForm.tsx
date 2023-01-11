/**
 * New resource form
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 6, 2023
 */

import type { ContextModalProps } from '@mantine/modals'
import type { Form, FormField } from '@/types/form'

import { useForm } from '@mantine/form'
import { useState, useEffect } from 'react'

import { Stack, Group, Button, TextInput, PasswordInput, Select, SegmentedControl } from '@mantine/core'
import axios from 'axios'

import { buildings } from '@/consts/buildings'
import { roles } from '@/consts/roles'

export const EditResourceForm = ({context, id, innerProps}: ContextModalProps<{form: Form, data: any, onSuccess: Function}>) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_LOG_URL}/api/users`)
            setUsers(response.data)
        }

        getUsers()
    }, [])

    const mapFields: Function = (fields: FormField[]): Object => {
        const mappedFields = {}
        fields.forEach(field => mappedFields[field.key] = innerProps.data[field.key])
        return mappedFields
    }

    const form = useForm({
        initialValues: mapFields(innerProps.form.fields)
    })

    const handleSubmit: Function = async (values: Object) => {

        context.closeModal(id)

        const response = await axios.put(`${process.env.NEXT_PUBLIC_LOG_URL}${innerProps.form.apiEndpoint}/${innerProps.data.id}`, {...innerProps.data, ...values})
        innerProps.onSuccess()

        form.reset()

    }

    return <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
        <Stack>
            {innerProps.form.fields.map(field => {
                switch(field.type){
                    case 'text':
                        return <TextInput key={field.key} label={field.label} {...form.getInputProps(field.key)}/>
                    case 'password':
                        return <PasswordInput key={field.key} label={field.label} {...form.getInputProps(field.key)}/>
                    case 'building':
                        return <Select key={field.key} label={field.label} data={buildings.map(building => ({label: building, value: building}))} {...form.getInputProps(field.key)}/>
                    case 'role':
                        return <SegmentedControl key={field.key} data={roles.map(role => ({label: role.toUpperCase(), value: role}))} {...form.getInputProps(field.key)}/>
                    case 'user':
                        return <Select key={field.key} searchable label={field.label} data={users.map(user => ({label: `${user.name} ${user.lastname}`, value: user.id}))} {...form.getInputProps(field.key)}/>
                    case 'status':
                        return <SegmentedControl key={field.key} data={[{label: 'Pendiente', value: 'pending'}, {label: 'Finalizada', value: 'done'}]} {...form.getInputProps(field.key)}/>
                }
            })}
            <Group position='right'>
                <Button variant='default' compact radius='xs' onClick={() => context.closeModal(id)}>Cancelar</Button>
                <Button variant='outline' color='teal' type='submit' compact radius='xs'>Guardar</Button>
            </Group>
        </Stack>
    </form>
}