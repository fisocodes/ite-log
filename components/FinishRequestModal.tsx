/**
 * Finish request modal
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 25, 2022
 */

//React
import { useState } from 'react'

//Mantine
import { Stack } from '@mantine/core'
import { Grid } from '@mantine/core'
import { Modal } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { Button } from '@mantine/core'

//Icons
import { IconClipboardX } from '@tabler/icons'

//Axios
const axios = require('axios').default

export default ({opened, setOpened, request}) => {

    const [loadFinish, setLoadFinish] = useState(false)

    const handleFinishRequest = async () => {

        request.status = 'done'

        setLoadFinish(true)
        const response = await axios.put(`http://localhost:3000/api/requests/${request.id}`, request)
        setOpened(false)
        setLoadFinish(false)
    }

    return <Modal opened={opened} centered onClose={() => setOpened(false)} title={<Title order={4}>Finalizar petición</Title>}>
        <Stack>
            <Text>
                ¿Está seguro que desea marcar como finalizada la siguiente petición?
                La petición se será movida la sección de finalizadas.
            </Text>
            <Grid>
                <Grid.Col span={4}>
                    <Text weight={700}>Edificio:</Text>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text>{request.building}</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Text weight={700}>Nombre:</Text>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text>{request.name}</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Text weight={700}>Descripción</Text>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Text>{request.description}</Text>
                </Grid.Col>
            </Grid>
            <Button color='green' leftIcon={<IconClipboardX/>} onClick={() => handleFinishRequest()} loading={loadFinish}>Finalizar</Button>
            <Button color='gray' onClick={() => setOpened(false)}>Cancelar</Button>
        </Stack>
    </Modal>
}