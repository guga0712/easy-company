import { Flex, Heading, Stack, useColorModeValue, Image, Button, VStack, Divider } from "@chakra-ui/react";
import { IoMdCube, IoMdRocket, IoMdTrendingUp } from "react-icons/io";
import Value, { ValueMain } from "../Value";

export default function Presentation() {
    return (
        <Flex
            py={{ base: 40, md: 4 }}
            px={{ base: 4 }}
            h={{ base: 'fit-content', md: '90vh' }}
            overflow='hidden'
            bg={useColorModeValue('white', 'black')}
            justifyContent='center'
            alignItems='center'
            direction='column'
            gap='50px'
            id='us'
        >
            <Flex alignItems='center' direction={{ base: 'column', md: 'row' }} gap='40px' justifyContent={{ base: 'center' }} >

                <VStack gap='40px'>
                    <Heading fontSize='50px' textAlign='center' color={useColorModeValue('black', 'white')} fontWeight='800' >Facilitando caminhos.</Heading>
                    <Divider orientation='horizontal' borderWidth='2px' w='10%' borderColor='#6B07D2' opacity='1' />
                    <Button
                        as='a'
                        w='180px'
                        href="#"
                        borderRadius='0'
                        p='30px'
                        bg='none'
                        border='3px solid'
                        borderColor='#6B07D2'
                        boxShadow='inset 0 0 0 0 #6B07D2'
                        transition='0.5s'
                        transitionTimingFunction='ease-in-out'
                        _hover={{
                            boxShadow: 'inset 180px 0 0 0 #6B07D2',
                            color: 'white'
                        }}
                    >Contate nos</Button>
                </VStack>
                <Image src='/imagemHome.png'></Image>
            </Flex>
            <Stack direction={{ base: 'column', md: 'row' }} gap='40px'>
                <ValueMain icon={IoMdTrendingUp} title={"Future Vision."} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." />
                <Value icon={IoMdCube} title={"Product Design."} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." />
                <Value icon={IoMdRocket} title={"Inovative Solutions."} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." />
            </Stack>
        </Flex>
    )
}