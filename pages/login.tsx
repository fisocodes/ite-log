/*
    Login page.This page is shown when
    there's not session available
*/

import { useForm } from "@mantine/form"

import { Center } from "@mantine/core"
import { Stack } from "@mantine/core"
import { Image } from "@mantine/core"
import { Title } from "@mantine/core"
import { TextInput } from "@mantine/core"
import { PasswordInput } from "@mantine/core"
import { Button } from "@mantine/core"

export default function Login(){

    /**
     * Hook for handling form
     */
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/[a-zA-Z0-9]+@ite\.edu\.mx/.test(value) ? null : 'Correo inválido: Debe ser de tipo @ite.edu.mx')
        }
    })

    return <Center p="xl">
        <Stack align="stretch" spacing="lg">
            <Title order={2} align="center">Soporte Técnico</Title>
            <Image width="40vh" src="https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png"/>
            <form onSubmit={form.onSubmit(values => console.log(values))}>
                <Stack>
                    <TextInput required placeholder="usuario@ite.edu.mx" type="email" {...form.getInputProps('email')}/>
                    <PasswordInput required placeholder="Contraseña" {...form.getInputProps('password')}/>
                    <Button type="submit">Login</Button>
                </Stack>
            </form>
        </Stack>
    </Center>
}