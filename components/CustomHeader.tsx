/**
 * Custom header component
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//Mantine
import { useMantineTheme } from '@mantine/core'
import { Header } from '@mantine/core'
import { Title } from '@mantine/core'
import { Group } from '@mantine/core'

import Image from 'next/image'

export default function CustomHeader(){

    const theme = useMantineTheme()

    return <Header height={60} p='sm'>
        <Group position='apart'>
            <Title order={3} color='blue'>Servicio Técnico</Title>
            <Group>
                <Image height={40} width={40} src='https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png'/>
                <Title order={3} color='blue'>Instituto Tecnológico de Ensenada</Title>
            </Group>
        </Group>
    </Header>
}