import { Box, Flex, Heading, Text, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import Aos from "aos";
import { useEffect } from "react";
import { IconType } from "react-icons";

interface ValueProps {
    icon: IconType;
    title: string;
    resume: string;
}

export default function Value({ icon, title, resume }: ValueProps) {
    {
        return (
            <Box
                w='350px'
                h='350px'
                bg={useColorModeValue('#f6f6f6', '#101010')}
                padding='15px'
                color={useColorModeValue('black', 'white')}
                role='group'
                p='20px'
                _hover={{
                    bg: 'cyan.500',
                    color: 'white',
                    shadow: ' rgba(0, 0, 0, 0.5) 0px 8px 24px;'
                }}
                transition='0.5s'
                _first={{ color: 'cyan.500' }}
            >
                <Flex direction='column' gap='20px'>
                    <Icon as={icon} fontSize='50px' color='cyan.500' _groupHover={{ color: 'white', transition: '0.5s' }} p='5px' borderRadius='10px' />
                    <Heading fontSize={'24px'}>{title}</Heading>
                    <Flex w='15%' h='2px' bg='cyan.500' margin='-10px 0 0 0' _groupHover={{ bg: 'white', transition: '0.5s' }}></Flex>
                    <Text fontSize='16px' fontWeight='500'>{resume}</Text>
                </Flex>
            </Box >
        )
    }
}

export function ValueMain({ icon, title, resume }: ValueProps) {
    return (
        <Box
            w='350px'
            h='350px'
            bg='cyan.500'
            padding='15px'
            color='white'
            p='20px'
            shadow='rgba(0, 0, 0, 0.5) 0px 8px 24px;'
        >
            <Flex direction='column' gap='20px'>
                <HStack>
                    <Icon as={icon} color='white' fontSize='50px' p='5px' borderRadius='10px' />
                </HStack>
                <Heading fontSize={'24px'}>{title}</Heading>
                <Flex w='15%' h='2px' bg='white' margin='-10px 0 0 0' ></Flex>
                <Text fontSize='16px' fontWeight='500'>{resume}</Text>
            </Flex>
        </Box >
    )
}