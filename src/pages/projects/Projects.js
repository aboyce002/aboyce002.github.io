import { Box, Button, Flex, Heading, HStack, Image, Link, SimpleGrid, VStack } from '@chakra-ui/react'
import { Fade } from "react-reveal";
import { projects } from "../../portfolioInfo";

const Projects = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Flex id="projects" display="block" textAlign="center" py="2%" w={["95%", "95%", "82%"]} m="auto">
        <Heading>Projects</Heading>
        <Box display={{base: "block", sm: "inline-block"}} py="1%">
          <Image w={["0%", "100%", "50%"]} float={{base: "top", sm: "left"}} py={["2%", 0]} alt="Projects image" src={require(`../../assets/images/undraw_personal_website_re_c8dv.svg`).default} />
          <SimpleGrid w={["100%", "100%", "45%"]} float={{base: "bottom", sm: "right"}} columns={[1, 1, 1]}>
            {projects.data.map((project, i) => {
              return (
                <VStack key={i}>
                  <Image
                    title={project.title}
                    src={project.thumbnail_image}
                    alt={project.title}
                  />
                  <Heading size="lg">{project.title}</Heading>
                  <Heading size="md">{project.description}</Heading>
                  <Heading size="md">Technologies used: {project.technologies}</Heading>
                  <Link href={project.misc_link} isExternal>
                    <Button colorScheme="purpleButton">Visit Website</Button>
                  </Link>
                  <HStack>
                    <Link href={project.frontend_link} isExternal>
                      <Button colorScheme="whiteButton">Frontend Code</Button>
                    </Link>
                    <Link href={project.backend_link} isExternal>
                      <Button colorScheme="whiteButton">Backend Code</Button>
                    </Link>
                  </HStack>
                </VStack>
              )
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Fade>
  );
};

export default Projects;
