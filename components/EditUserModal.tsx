/**
 * Edit user modal component
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//React
import { useState } from 'react'

//Axios
const axios = require('axios').default

//Mantine
import { useForm } from '@mantine/form'
import { Modal } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Title} from '@mantine/core'
import { SegmentedControl } from '@mantine/core';
import { TextInput } from '@mantine/core'
import { PasswordInput } from '@mantine/core'
import { Button } from '@mantine/core'

export default ({opened, setOpened, user}) => {

    const [loadRegister, setLoadRegister] = useState(false)

    const form = useForm(
        {
            initialValues: {
                role: user.role,
                name: user.name,
                lastname: user.lastname,
            },
            validate: {
                role: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Selecciona un rol'),
                name: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Ingresa un nombre'),
                lastname: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Ingresa un apellido')
            }
        }
    )

    const handleSubmit = async (values) => {

        setLoadRegister(true)

        const editedUser = {
            ...user,
            role: values.role,
            name: values.name,
            lastname: values.lastname
        }

        const response = await axios.put(`http://localhost:3000/api/users/${user.id}`, editedUser)
        
        setOpened(false)
        form.reset()

        setLoadRegister(false)
    }

    const handleCancel = () => {
        setOpened(false)
        form.reset()
    }

    const segmentedControl = [
        {
            label: 'Administrador',
            value: 'admin'
        },
        {
            label: 'Servicio',
            value: 'service'
        }
    ]

    return <Modal opened={opened} onClose={() => setOpened(false)} centered withCloseButton={false} title={<Title order={4}>Editar usuario</Title>}>
        <Stack>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Stack>
                    <SegmentedControl defaultValue={user.role} data={segmentedControl} {...form.getInputProps('role')}/>
                    <TextInput defaultValue={user.name} placeholder='Nombre' {...form.getInputProps('name')}/>
                    <TextInput defaultValue={user.lastname} placeholder='Apellido' {...form.getInputProps('lastname')}/>
                    <Button type='submit' loading={loadRegister}>Guardar</Button>
                </Stack>
            </form>
            <Button color='red' onClick={() => handleCancel()}>Cancelar</Button>
        </Stack>
    </Modal>
}