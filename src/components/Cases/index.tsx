import { Flex, useColorModeValue, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";

export default function Cases() {
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
            id='cases'
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
                <Heading fontWeight='800' fontSize='50px'>Cases.</Heading>
                <Carousel />
            </Flex>
        </Flex>
    );
}