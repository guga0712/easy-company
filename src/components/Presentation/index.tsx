import { Flex, Heading, ScaleFade, Stack, useColorModeValue, keyframes, chakra, shouldForwardProp, calc } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FaShareAlt, FaCode, FaLaptop } from "react-icons/fa";
import Value from "../Value";

export default function Presentation() {
    const Animation = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    });
    return (
        <Flex
            py={{ base: 0 }}
            px={{ base: 4 }}
            h={{ base: 'fit-content', md: '90vh' }}
            overflow='hidden'
            bg={useColorModeValue('white', 'black')}
            justifyContent='center'
            alignItems='center'
            border='1px solid red'
        >
            <Animation
                animate={{
                    // scale: [0, 1],
                    translate: ['200%', '0%'],
                    opacity: [0, 1]
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Value icon={FaShareAlt} title={"Future Vision."} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." delay={200} />
                    <Value icon={FaCode} title={"Product Design."} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." delay={400} />
                    <Value icon={FaLaptop} title={"Inovative Solutions."} resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu odio, vestibulum sed tempus et, molestie in dui. Mauris eget gravida ex. Aliquam erat volutpat. Cras sodales elementum nisl vel euismod." delay={600} />
                </Stack>
            </Animation>
        </Flex>
    )
}