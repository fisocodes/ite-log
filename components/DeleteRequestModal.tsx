/**
 * Delete request modal
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

    const [loadDelete, setLoadDelete] = useState(false)

    const handleDeleteRequest = async () => {

        setLoadDelete(true)
        const response = await axios.delete(`http://localhost:3000/api/requests/${request.id}`)
        setOpened(false)
        setLoadDelete(false)
    }

    return <Modal opened={opened} centered onClose={() => setOpened(false)} title={<Title order={4}>Eliminar petición</Title>}>
        <Stack>
            <Text>
                ¿Está seguro que desea eliminar la siguiente petición?
                Se borrará toda su información y los registros relacionados a esta.
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
            <Button color='red' leftIcon={<IconClipboardX/>} onClick={() => handleDeleteRequest()} loading={loadDelete}>Eliminar</Button>
            <Button color='gray' onClick={() => setOpened(false)}>Cancelar</Button>
        </Stack>
    </Modal>
}