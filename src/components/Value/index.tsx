import { Box, Flex, Heading, Text, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import Aos from "aos";
import { useEffect } from "react";
import { IconType } from "react-icons";

interface ValueProps {
    icon: IconType;
    title: string;
    resume: string;
    delay: number;
}

export default function Value({ icon, title, resume, delay }: ValueProps) {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    {
        return (
            <Box
                w='350px'
                h='350px'
                bg={useColorModeValue('#f6f6f6', '#101010')}
                padding='15px'
                color={useColorModeValue('black', 'white')}
                data-aos="fade-up"
                data-aos-delay={delay}
                p='20px'
            >
                <Flex direction='column' gap='10px'>
                    <HStack>
                        <Icon as={icon} color='cyan.500' fontSize='50px' p='5px' borderRadius='10px' />
                    </HStack>
                    <Heading fontSize={'20px'}>{title}</Heading>
                    <Text fontSize='17px' fontWeight='500'>{resume}</Text>
                </Flex>
            </Box >
        )
    }
}