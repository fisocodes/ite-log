/**
 * New user modal component
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

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

    const form = useForm({
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
    })

    const handleSubmit = async (values) => {

        console.log(values)

        if(values.password !== values.repeatPassword){
            form.setErrors(
                {
                    password: 'Las contraseñas no coinciden',
                    repeatPassword: ' '
                }
            )
        }
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
                    <Button type='submit'>Registrar</Button>
                </Stack>
            </form>
            <Button color='red' onClick={() => setOpened(false)}>Cancelar</Button>
        </Stack>
    </Modal>
}