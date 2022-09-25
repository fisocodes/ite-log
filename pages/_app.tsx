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
                    || router.pathname === '/welcome' 
                    || router.pathname === '/verify' 
                    || router.pathname === '/error'

    return <SessionProvider session={session}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            {
                isLogin ?
                <AppShell>
                    <Component {...pageProps}/>
                </AppShell>
                :
                <AppShell header={<CustomHeader/>} navbar={<CustomNavbar/>}>
                    <Component {...pageProps}/>
                </AppShell>
            }
            
        </MantineProvider>
    </SessionProvider> 
    
}