/**
 * Delete user modal
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 18, 2022
 */

//React
import { useState } from 'react'

//Mantine
import { useForm } from '@mantine/form'
import { Stack } from '@mantine/core'
import { Modal } from '@mantine/core'
import { Title } from '@mantine/core'
import { Select } from '@mantine/core'
import { TextInput } from '@mantine/core'
import { Textarea } from '@mantine/core'
import { Button } from '@mantine/core'

//Icons


//Axios
const axios = require('axios').default

export default ({opened, setOpened}) => {

    const [loadSave, setLoadSave] = useState(false)

    const form = useForm(
        {
            initialValues: {
                building: '100',
                name: '',
                description: ''
            },
            validate: {
                building: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Selecciona un edificio'),
                name: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Ingresa un nombre'),
                description: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Escribe una descripción'),
            }
        }
    )

    const handleSubmit = async (values) => {

        setLoadSave(true)

        const request = {
            ...values
        }

        const response = await axios.post('http://localhost:3000/api/requests', request)
        
        setOpened(false)
        form.reset()

        setLoadSave(false)
    }

    const handleCancel = () => {
        setOpened(false)
        form.reset()
    }

    const buildingsSelect = [
        {
            label: '100',
            value: '100'
        },
        {
            label: '200',
            value: '200'
        },
        {
            label: '300',
            value: '300'
        },
        {
            label: '400',
            value: '400'
        },
        {
            label: '500',
            value: '500'
        },
        {
            label: '600',
            value: '600'
        },
        {
            label: 'Centro de información',
            value: 'CI'
        },
    ]

    return <Modal opened={opened} centered onClose={() => setOpened(false)} title={<Title order={4}>Nueva petición</Title>}>
        <Stack>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Stack>
                    <Select placeholder='Edificio' defaultValue='100' data={buildingsSelect} {...form.getInputProps('building')}/>
                    <TextInput placeholder='Nombre' {...form.getInputProps('name')}/>
                    <Textarea placeholder='Descripción' {...form.getInputProps('description')}/>
                    <Button type='submit' loading={loadSave}>Guardar</Button>
                </Stack>
            </form>
            <Button color='red' onClick={() => handleCancel()}>Cancelar</Button>
        </Stack>
    </Modal>
}