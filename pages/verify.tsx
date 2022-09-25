/**
 * Verifiy page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//Next
import { useRouter } from 'next/router'

//Mantine
import { Stack } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { ActionIcon } from '@mantine/core'

//Icons
import { IconBrandGmail } from '@tabler/icons'

export default () => {

    const router = useRouter()

    return <Stack align='center' justify='center' style={{height: '90vh'}}>
        <Title>Revisa tu correo</Title>
        <Text>Revisa tu bandeja de entrada. Se te ha enviado con correo de verificación.</Text>
        <ActionIcon variant='filled' size={100} color='red' onClick={() => router.push('https://mail.google.com/')}>
            <IconBrandGmail size={100}/>
        </ActionIcon>
    </Stack>
}