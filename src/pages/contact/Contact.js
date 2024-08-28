import { Box, Link, Flex, Heading, Image } from '@chakra-ui/react';
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Flex id="contact" display="block" textAlign="center" py="2%" w={["95%", "95%", "82%"]} m="auto">
        <Heading>Contact</Heading>
        <Box display={{base: "block", sm: "inline-block"}} py="1%">
            <Image w={["100%", "100%", "50%"]} float={{base: "top", sm: "left"}} py={["5%", 0]} alt="Contact image" src={require(`../../assets/images/undraw_newsletter_re_wrob.svg`).default} />
            <Box w={["100%", "100%", "50%"]} float={{base: "bottom", sm: "right"}}>
              <Heading size="md">Feel free to contact me at my email:</Heading>
              <Link fontSize="2xl" href="mailto:boyceaubrey14@gmail.com" isExternal>boyceaubrey14@gmail.com</Link>
            </Box>
        </Box>
      </Flex>
    </Fade>
  );
};

export default Contact;
