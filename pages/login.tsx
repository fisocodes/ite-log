import { Center } from "@mantine/core"
import { Stack } from "@mantine/core"
import { Image } from "@mantine/core"
import { Title } from "@mantine/core"
import { Input } from "@mantine/core"
import { PasswordInput } from "@mantine/core"
import { Button } from "@mantine/core"

export default function Login(){
    return <Center p="xl">
        <Stack align="stretch" spacing="lg">
            <Title order={2} align="center">Soporte Técnico</Title>
            <Image width="45vh" src="https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png"/>
            <form>
                <Stack>
                    <Input placeholder="usuario@ite.edu.mx" type="email"/>
                    <PasswordInput placeholder="Contraseña"/>
                    <Button type="submit">Login</Button>
                </Stack>
            </form>
        </Stack>
    </Center>
}