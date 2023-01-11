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
import { ModalsProvider } from '@mantine/modals'
import { AppShell } from '@mantine/core'
import { SWRConfig } from 'swr'

//Custom components
import CustomHeader from '../components/CustomHeader'
import CustomNavbar from '../components/CustomNavbar'
import { NewResourceForm } from '../components'
import { EditResourceForm } from '../components'
import { DeleteResourceForm } from '../components'


export default ({Component, pageProps: {session, ...pageProps}}) => {

    const {pathname} = useRouter() 

    return <SessionProvider session={session}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <ModalsProvider modalProps={{centered: true, overlayBlur: 2, overlayOpacity: 0.35, closeOnClickOutside: false, size: 'lg'}} modals={{new: NewResourceForm, edit: EditResourceForm, delete: DeleteResourceForm}}>
                {<AppShell header={pathname !== '/signin' && <CustomHeader/>} navbar={pathname !== '/signin' && <CustomNavbar/>}>
                    <SWRConfig value={{fetcher: (resource, init) => fetch(resource, init).then(res => res.json()), revalidateOnMount: true}}>
                        <Component {...pageProps}/>
                    </SWRConfig>
                </AppShell>}
            </ModalsProvider>
        </MantineProvider>
    </SessionProvider> 
    
}