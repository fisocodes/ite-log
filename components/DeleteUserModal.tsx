/**
 * Delete user modal
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 18, 2022
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
import { IconUserMinus } from '@tabler/icons'

//Axios
const axios = require('axios').default

export default ({opened, setOpened, user}) => {

    const [loadDelete, setLoadDelete] = useState(false)

    const handleDeleteUser = async () => {

        setLoadDelete(true)
        const response = await axios.delete(`http://localhost:3000/api/users/${user.id}`)
        setOpened(false)
        setLoadDelete(false)
    }

    return <Modal opened={opened} centered onClose={() => setOpened(false)} title={<Title order={4}>Eliminar usuario</Title>}>
        <Stack>
            <Text>
                ¿Está seguro que desea eliminar al siguiente usuario?
                Se borrará toda su información y los registros relacionados a este.
            </Text>
            <Grid>
                <Grid.Col span={4}>
                    <Text weight={700}>Rol:</Text>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text>{user.role}</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Text weight={700}>Nombre:</Text>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text>{user.name}</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Text weight={700}>Apellido:</Text>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text>{user.lastname}</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Text weight={700}>Correo:</Text>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text>{user.email}</Text>
                </Grid.Col>
            </Grid>
            <Button color='red' leftIcon={<IconUserMinus/>} onClick={() => handleDeleteUser()} loading={loadDelete}>Eliminar</Button>
            <Button color='gray' onClick={() => setOpened(false)}>Cancelar</Button>
        </Stack>
    </Modal>
}