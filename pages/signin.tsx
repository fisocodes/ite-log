/**
 * Sign in page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//React
import { useState } from 'react'

//Next
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

//NextAuth
import { getSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'

//Mantine
import { useForm } from '@mantine/form'
import { Center } from '@mantine/core'
import { Stack } from '@mantine/core'
import { Image } from '@mantine/core'
import { Title } from '@mantine/core'
import { TextInput } from '@mantine/core'
import { Button } from '@mantine/core'

export default () => {

    const router = useRouter()
    const [loadSubmit, setLoadSubmit] = useState(false)    

    const form = useForm(
        {
            initialValues: {
                email: '',
            },
            validate: {
                email: (value) => (/[a-zA-Z0-9]+@ite\.edu\.mx/.test(value) ? null : 'Correo inválido: Debe ser de tipo @ite.edu.mx')
            }
        }
    )

    const handleSubmit = async (values) => {

        setLoadSubmit(true)
        
        const response = await signIn(
            'email',
            {
                redirect: false,
                callbackUrl: '/',
                email: values.email,
            }
        )
        
        if(response.error){
            console.log(response.error)
            form.setErrors(
                {
                    email: 'Correo no válido',
                }
            )
        }else{
            router.push(response.url)
        }

        setLoadSubmit(false)
    }
        
    return <Center p='xl'>
        <Stack align='stretch' spacing='lg'>
            <Title order={2} align='center'>Soporte Técnico</Title>
            <Image width="40vh" src='https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png'/>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Stack>
                    <TextInput required placeholder='usuario@ite.edu.mx' type='email' {...form.getInputProps('email')}/>
                    <Button type='submit' loading={loadSubmit}>Verificar correo</Button>
                </Stack>
            </form>
        </Stack>
    </Center>
}

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