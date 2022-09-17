/**
 * Custom app
 * @author Oscar Figueroa
 * @version 1.0.0
 * September 16, 2022
 */

//Next
import { useRouter } from 'next/router'

//NextAuth
import { SessionProvider } from 'next-auth/react'

//Mantine
import { MantineProvider } from '@mantine/core'
import { AppShell } from '@mantine/core'

//Custom components
import CustomHeader from '../components/CustomHeader'
import CustomNavbar from '../components/CustomNavbar'

export default ({Component, pageProps: {session, ...pageProps}}) => {

    const router = useRouter()

    const isLogin = router.pathname === '/signin'

    return <SessionProvider session={session}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AppShell header={isLogin ? null : <CustomHeader/>} navbar={isLogin ? null : <CustomNavbar/>}>
                <Component {...pageProps}/>
            </AppShell> 
        </MantineProvider>
    </SessionProvider> 
    
}