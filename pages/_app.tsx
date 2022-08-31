/*
    Custom app. This layout is applied to
    every page in the app
*/

import { useMantineTheme } from "@mantine/core"
import { useRouter } from "next/router"

import { MantineProvider } from "@mantine/core"
import { AppShell } from "@mantine/core"

import CustomHeader from "../components/CustomHeader"
import CustomNavbar from "../components/CustomNavbar"

export default function Log({Component, pageProps}){
    const theme = useMantineTheme()
    const router = useRouter()

    const isLogin = router.pathname === '/login'

    return <MantineProvider theme={{black: theme.colors.gray[9]}} withGlobalStyles withNormalizeCSS>
    <AppShell header={isLogin ? null : <CustomHeader/>} navbar={isLogin ? null : <CustomNavbar/>}>
        <Component {...pageProps}/>
    </AppShell> 
    </MantineProvider>
    
}