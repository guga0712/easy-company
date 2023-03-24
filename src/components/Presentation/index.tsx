import { Flex, Heading, ScaleFade, Stack, useColorModeValue, keyframes, chakra, shouldForwardProp, calc, Image, Button, VStack, Divider } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FaShareAlt, FaCode, FaLaptop } from "react-icons/fa";
import { IoMdCube, IoMdRocket, IoMdTrendingUp } from "react-icons/io";
import Value, { ValueMain } from "../Value";
import imagemHome from "../../../public/imagemHome.png"

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
        >
            <Flex alignItems='center' direction={{ base: 'column', md: 'row' }} gap='40px' justifyContent={{ base: 'center' }} >

                <VStack gap='40px'>
                    <Heading fontSize='50px' textAlign='center' color={useColorModeValue('black', 'white')} fontWeight='800' >Facilitando caminhos.</Heading>
                    <Divider orientation='horizontal' borderWidth='2px' w='10%' borderColor='cyan.500' opacity='1' />
                    <Button
                        as='a'
                        w='180px'
                        href="#"
                        borderRadius='0'
                        p='30px'
                        bg='none'
                        border='3px solid'
                        borderColor='cyan.500'
                        boxShadow='inset 0 0 0 0 #00B5D8'
                        transition='0.5s'
                        _hover={{
                            boxShadow: 'inset 180px 0 0 0 #00B5D8',
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
        </Flex >
    )
}