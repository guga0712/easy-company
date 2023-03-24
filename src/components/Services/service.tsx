import { Box, Heading, Icon, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ServiceProps {
    icon: IconType;
    title: string;
}

export default function Service({ icon, title }: ServiceProps) {
    return (
        <Box
            w='300px'
            h='100px'
            bg='#F6F6F6'
            role='group'
            transition='0.3s'
            _hover={{
                bg: '#00B5D8',
                color: 'white'
            }}
            overflow='hidden'
        >
            <Flex
                alignItems='center'
                h='100%'
                gap='20px'
            >
                <Icon as={icon} color='rgba(255,255,255,0.3)' fontSize='0px' transform='translate(-30%,0)' opacity='0' _groupHover={{ fontSize: '50px', opacity: '1' }} transition='0.7s' transitionTimingFunction='cubic-bezier(0.17, 0.67, 0, 1.01)' />
                <Heading fontSize='20px' >{title}</Heading>
            </Flex>
        </Box>
    )
}