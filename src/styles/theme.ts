import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        initialColorModel: "light",
        useSystemColorMode: true,
    },
    fonts: {
        heading: 'Open Sans',
        body: 'Open Sans'
    }
})