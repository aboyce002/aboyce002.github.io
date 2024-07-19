import { Heading, Image, Stack, Flex, VStack, Spacer } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex id="about" justifyContent="center" bg="blueTheme.500" alignItems="center">
      <Stack alignItems="center" direction={{base: "column", lg: "row"}} w={["95%", "95%", "82%"]} spacing="0" py="3%">
        <VStack w={["100%", "90%", "90%", "50%"]} align="start" textAlign="start" spacing={5} pt="5%" pb="10%">
          <Heading size="2xl" variant="mainHeading">
            Aubrey Boyce
          </Heading>*
          <Heading as="i" size="md" variant="subHeading">
            Full-stack Software Developer
          </Heading>
          <Heading variant="bodyHeading">
            Hello! I'm Aubrey, and I currently work as a full-stack software developer.
          </Heading>
          <Heading variant="bodyHeading">
            Though I code for a living, I love creating art in my free time.
          </Heading>
        </VStack>
        <Image w={["100%", "90%", "90%", "50%"]} alt="About image" src={require(`../../assets/images/undraw_working_late_re_0c3y.svg`).default} />
      </Stack>
    </Flex>
  );
};

export default About;
