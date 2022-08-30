import { Card } from "@mantine/core"
import { Stack } from "@mantine/core"
import { Group } from "@mantine/core"
import { Title } from "@mantine/core"
import { Button } from "@mantine/core"

export default function Petition({data}){
    return <Card shadow="md">
        <Group position="apart">
            <Stack>
                <Group>
                    <Title order={3}>{data.name}</Title>
                    <Title order={3}>{data.location}</Title>
                </Group>
                    <Title order={6}>{data.description}</Title>
            </Stack>
            <Button>Finalizar</Button>
        </Group>
    </Card>
}