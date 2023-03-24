import { Flex, Heading, Text } from "@chakra-ui/react";
import { IoMdBriefcase, IoMdDesktop, IoMdPhotos, IoMdChatboxes, IoMdRocket, IoMdTrendingUp } from "react-icons/io";
import Service from "./service";

export default function Services() {
    return (
        <Flex
            h='100vh'
            maxW='100%'
            border='1px solid'
            justifyContent='center'
            alignItems='center'>
            <Flex
                w='80%'
                h='70%'
                border='1px solid blue'
                direction='column'
                gap='40px'
                alignItems='center'
                justifyContent='center'
            >
                <Heading fontWeight='800' fontSize='50px'>Serviços.</Heading>
                <Text textAlign='center' marginBottom='10px' fontWeight='800' color='#00B5D8'>NÓS TRABALHAMOS COM VOCÊ, NÃO PARA VOCÊ</Text>
                <Flex gap='20px'>
                    <Service icon={IoMdBriefcase} title={"Estratégia Digital"} />
                    <Service icon={IoMdPhotos} title={"Design & Conceito"} />
                    <Service icon={IoMdDesktop} title={"Consultorias"} />
                </Flex>
                <Flex gap='20px'>
                    <Service icon={IoMdChatboxes} title={"Facebook ADS"} />
                    <Service icon={IoMdChatboxes} title={"Google ADS"} />
                    <Service icon={IoMdChatboxes} title={"Otimização SEO"} />
                </Flex>
            </Flex>
        </Flex>
    );
}