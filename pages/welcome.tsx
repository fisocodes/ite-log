/**
 * Welcome page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//Next
import { useRouter } from 'next/router'

//NextAuth
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

//Mantine
import { useForm } from '@mantine/form'
import { Center } from '@mantine/core'
import { Stack } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { TextInput } from '@mantine/core'
import { Button } from '@mantine/core'

//Axios
const axios = require('axios').default

export default () => {

    const {data: session, status} = useSession()
    const router = useRouter()

    const form = useForm(
        {
            initialValues: {
                name: '',
                lastname: ''
            },
            validate: {
                name: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Ingresa un nombre'),
                lastname: (value) => (/^(?!\s*$).+/.test(value) ? null : 'Ingresa un apellido')
            }
        }
    )

    const handleSubmit = async (values) => {
        
        if(status === 'authenticated'){

            const user = session.user

            const updatedUser = {
                id: null,
                ...user,
                name : values.name,
                lastname : values.lastname,
            }

            const response = await axios.put(`http://10.4.4.59:3000/api/users/${updatedUser.id}`, updatedUser)
            console.log(response.data)

            if(response.error){
                signOut()
            }else{
                router.push('/')
            }
        }

    }

    return <Center style={{height: '90vh'}}>
        <Stack>
            <Title order={3} align='center'>Bienvenido al soporte técnico del Instituto Tecnológico de Ensenada</Title>
            <Text>
                Para finalizar tu registro, por favor ingresa tu nombre y tu apellido.
                Estos datos podrás modificarlos después si así lo deseas.
            </Text>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Stack>
                    <TextInput placeholder='Nombre' {...form.getInputProps('name')}/>
                    <TextInput placeholder='Apellido' {...form.getInputProps('lastname')}/>
                    <Button type='submit'>Finalizar registro</Button>
                </Stack>
            </form>
        </Stack>
    </Center> 
}