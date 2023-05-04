import { Flex, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { IoMdBriefcase, IoMdDesktop, IoMdPhotos, IoMdChatboxes, IoMdRocket, IoMdTrendingUp } from "react-icons/io";
import Service from "./service";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <Flex
            h='100vh'
            maxW='100%'
            justifyContent='center'
            alignItems='center'
            bg={useColorModeValue('white', 'black')}
            id='services'
        >
            <Flex
                data-aos="fade-up"
                data-aos-duration="1000"
                w='80%'
                h='70%'
                direction='column'
                gap='40px'
                alignItems='center'
                justifyContent='center'
            >
                <Heading fontWeight='800' fontSize='50px'>Serviços.</Heading>
                <Text textAlign='center' marginBottom='20px' fontWeight='800' color='#00B5D8'>NÓS TRABALHAMOS COM VOCÊ, NÃO PARA VOCÊ</Text>
                <Flex direction={{ base: 'column' }} gap='20px'>
                    <Flex gap='20px' direction={{ base: 'column', md: 'row' }} mt='0' >
                        <Service icon={IoMdBriefcase} title={"Estratégia Digital"} />
                        <Service icon={IoMdPhotos} title={"Design & Conceito"} />
                        <Service icon={IoMdDesktop} title={"Consultorias"} />
                    </Flex>
                    <Flex gap='20px' marginTop='0' direction={{ base: 'column', md: 'row' }}>
                        <Service icon={IoMdChatboxes} title={"Facebook ADS"} />
                        <Service icon={IoMdChatboxes} title={"Google ADS"} />
                        <Service icon={IoMdChatboxes} title={"Otimização SEO"} />
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    );
}