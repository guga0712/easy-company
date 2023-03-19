import { Flex, Heading, HStack, Text, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaAccessibleIcon, FaCode, FaLaptop, FaLaptopCode, FaShareAlt } from "react-icons/fa";
import Service from "./service";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {

    return (
        <Flex
            py={{ base: 4 }}
            px={{ base: 20 }}
            direction='column'
            alignItems='center'
            gap='20px'
        >
            <Heading>Nossos Serviços</Heading>
            <Text textAlign='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod. Ut semper turpis vel pellentesque varius. Integer eleifend est id risus ullamcorper facilisis. Sed vitae lobortis enim. Nulla a justo tristique, dictum sem at, finibus lectus. Etiam nisi massa, ultrices eget condimentum sed, hendrerit vel enim.</Text>
            <Stack direction={{ base: "column", lg: "row" }} gap='20px'>
                <Service icon={FaShareAlt} title={"Marketing Digital"} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." delay={200} />
                <Service icon={FaCode} title={"Confecção de site"} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." delay={400} />
                <Service icon={FaLaptop} title={"Mídias Sociais"} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." delay={600} />
            </Stack>
        </Flex>
    )
}