/**
 * Error page
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//Next
import { useRouter } from 'next/router'

//Mantine
import { Stack} from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { Button } from '@mantine/core'

//Icons
import { IconFaceIdError } from '@tabler/icons'

export default () => {

    const router = useRouter()
    const error = router.query.error

    return <Stack align='center' justify='center' style={{height: '90vh'}}>
        <IconFaceIdError color='red' size={50}/>
        {
            error === 'Verification' ?
            <>
                <Title>Error al ingresar</Title>
                <Text>El enlace de verificación no es válido.</Text>
                <Text>Ya ha sido usado o ha expirado.</Text>
            </>
            :
            <Title>Error al ingresar</Title>
        }
        <Button onClick={() => router.push('/signin')}>Ir a signin</Button>
    </Stack>
}