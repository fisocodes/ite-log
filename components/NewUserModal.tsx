/**
 * New user modal component
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
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

export default ({opened, setOpened}) => {

    const [loadRegister, setLoadRegister] = useState(false)

    const form = useForm(
        {
            initialValues: {
                role: '',
                name: '',
                lastname: '',
                email: '',
                password: '',
                repeatPassword: ''
            },
            validate: {
                email: (value) => (/[a-zA-Z0-9]+@ite\.edu\.mx/.test(value) ? null : 'Correo inválido: Debe ser de tipo @ite.edu.mx')
            }
        }
    )

    const handleSubmit = async (values) => {

        setLoadRegister(true)

        const emailResponse = await axios(
            'http://localhost:3000/api/users',
            {
                params: {
                    email: values.email
                }
            }
        )

        const users = emailResponse.data
        if(users.length > 0){

            form.setErrors(
                {
                    email: 'El correo ya está en uso'
                }
            )

        }
        else if(values.password !== values.repeatPassword){

            form.setErrors(
                {
                    password: 'Las contraseñas no coinciden',
                    repeatPassword: ' '
                }
            )

        }else{

            const response = await axios.post(
                'http://localhost:3000/api/users',
                {
                    role: values.role,
                    name: values.name,
                    lastname: values.lastname,
                    email: values.email,
                    password: values.password
                }
            )

            setOpened(false)
            form.reset()
        }

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

    return <Modal opened={opened} onClose={() => setOpened(false)} centered withCloseButton={false} title={<Title order={4}>Nuevo usuario</Title>}>
        <Stack>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Stack>
                    <SegmentedControl data={segmentedControl} {...form.getInputProps('role')}/>
                    <TextInput required placeholder='Nombre' {...form.getInputProps('name')}/>
                    <TextInput required placeholder='Apellido' {...form.getInputProps('lastname')}/>
                    <TextInput required placeholder='usuario@ite.edu.mx' {...form.getInputProps('email')}/>
                    <PasswordInput required placeholder='Contraseña' {...form.getInputProps('password')}/>
                    <PasswordInput required placeholder='Repita contraseña' {...form.getInputProps('repeatPassword')}/>
                    <Button type='submit' loading={loadRegister}>Registrar</Button>
                </Stack>
            </form>
            <Button color='red' onClick={() => handleCancel()}>Cancelar</Button>
        </Stack>
    </Modal>
}