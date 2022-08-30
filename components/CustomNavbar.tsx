import { Navbar } from "@mantine/core"
import { NavLink } from "@mantine/core"

export default function CustomNavbar(){
    return <Navbar width={{base: 250}}>
        <NavLink label="Peticiones"/>
        <NavLink label="Finalizados"/>
    </Navbar>
}