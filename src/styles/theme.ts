import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.800'
            }
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    }
}

export const theme = extendTheme({ config })