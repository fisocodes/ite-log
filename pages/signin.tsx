/**
 * Sign in page
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */

import { useState } from 'react'
import { useRouter } from 'next/router'

import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'

import { useForm } from '@mantine/form'
import { Center, Stack, Image, Title, TextInput, PasswordInput, Button } from '@mantine/core'

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const session = await getSession(context)

    if(session){
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
            props: {}
        }
    }
    
    return {
        props: {}
    }
}

export default function SignInPage() {

    const router = useRouter()
    const [disabled, setDisabled] = useState(false)    
    const [loading, setLoading] = useState(false)    

    const form = useForm(
        {
            initialValues: {
                email: '',
                password: ''
            },
            validate: {
                email: (value) => (/[a-zA-Z0-9]+@ite\.edu\.mx/.test(value) ? null : 'Correo inválido: Debe ser de tipo @ite.edu.mx')
            }
        }
    )

    const handleSubmit = async (values) => {

        setDisabled(true)
        setLoading(true)
        
        const response = await signIn(
            'credentials',
            {
                redirect: false,
                callbackUrl: '/',
                email: values.email,
                password: values.password
            }
        )
        
        if(response.error){

            form.setErrors(
                {
                    email: 'Credenciales no válidas',
                    password: ' '
                }
            )

            setDisabled(false)
            setLoading(false)

        }else{
            router.push(response.url)
        }
    }
        
    return <Center p='xl'>
        <Stack align='stretch' spacing='lg'>
            <Title order={2} align='center'>Soporte Técnico</Title>
            <Image width="40vh" src='https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png'/>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Stack>
                    <TextInput required placeholder='usuario@ite.edu.mx' disabled={disabled} type='email' {...form.getInputProps('email')}/>
                    <PasswordInput required placeholder='Contraseña' disabled={disabled} {...form.getInputProps('password')}/>
                    <Button type='submit' loading={loading}>Verificar correo</Button>
                </Stack>
            </form>
        </Stack>
    </Center>
}