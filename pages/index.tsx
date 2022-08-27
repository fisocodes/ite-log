import { Stack } from '@mantine/core';
import { Title } from '@mantine/core';
import { Pagination } from '@mantine/core';

import Petition from '../components/Petition';

const data = [
    {
        location: '200',
        description: 'Formatear computadora',
        name: 'Oscar Tirado'
    },
    {
        location: '300',
        description: 'No tiene internet',
        name: 'Sara Hernández'
    },
    {
        location: '100',
        description: 'Cambiar nodo',
        name: 'Alma Temis'
    },
    {
        location: '600',
        description: 'Instalar office',
        name: 'Ulises Romeo'
    },
]

export default function Home(){
    return <Stack>
        <Title order={1}>Pendientes</Title>
        {data.map(petition => <Petition data={petition}/>)}
        <Pagination total={10} position="center"/>
    </Stack>
}