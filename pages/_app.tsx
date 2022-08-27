import { useMantineTheme } from "@mantine/core";

import { MantineProvider } from "@mantine/core";
import { AppShell } from "@mantine/core";
import CustomHeader from "../components/CustomHeader";

export default function Log({Component, pageProps}){
    const theme = useMantineTheme();

    return <MantineProvider theme={{black: theme.colors.gray[9]}} withGlobalStyles withNormalizeCSS>
        <AppShell header={<CustomHeader/>}>
            <Component {...pageProps}/>
        </AppShell> 
    </MantineProvider>
    
}