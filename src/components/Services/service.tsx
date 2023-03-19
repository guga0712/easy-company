import { Box, Flex, Heading, Text, HStack, Icon, useColorModeValue, VStack } from "@chakra-ui/react";
import Aos from "aos";
import { ReactFragment, ReactNode, useEffect } from "react";
import { IconType } from "react-icons";
import { JsxElement } from "typescript";

interface ServiceProps {
    icon: IconType;
    title: string;
    resume: string;
    delay: number;
}

export default function Service({ icon, title, resume, delay }: ServiceProps) {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    {
        return (
            <Box
                w='300px'
                h='350px'
                // border='1px solid green'
                borderRadius='20px'
                // bg={useColorModeValue('cyan.300', 'cyan.500')}
                bg='cyan.400'
                padding='15px'
                // color={useColorModeValue('cyan.800', 'white')}
                color='white'
                data-aos="fade-up"
                data-aos-delay={delay}
            >
                <Flex direction='column' gap='10px'>
                    <HStack>
                        <Icon as={icon} color='white' fontSize='50px' bg='cyan.600' p='10px' borderRadius='10px' />
                        <Heading fontSize={'23px'}>{title}</Heading>
                    </HStack>
                    <Text fontSize='20px' fontWeight='500'>{resume}</Text>
                </Flex>
            </Box >
        )
    }
}