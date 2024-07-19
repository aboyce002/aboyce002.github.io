import { Flex, Heading, SimpleGrid, Image, Tooltip, VStack, Grid, Box } from '@chakra-ui/react';
import { Fade } from "react-reveal";
import { skills } from "../../portfolioInfo";

const Skills = () => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <Flex id="skills" display="block" textAlign="center" py="2%" m="auto">
        <Heading>Skills</Heading>
        <Box display={{base: "block", sm: "inline-block"}} py="1%">
          <Image w={["100%", "100%", "50%"]} float={{base: "top", sm: "left"}} py={["5%", 0]} alt="Skills image" src={require(`../../assets/images/undraw_designer_life_re_6ywf.svg`).default} />
          <VStack w={["100%", "100%", "50%"]} float={{base: "bottom", sm: "right"}} spacing="15px">
            {skills.data.map((skill, i) => {
              return (
                <Grid key={i} gridTemplateColumns={['auto', 'auto', 'auto', '150px auto']} gap="5" alignItems="center">
                  <Heading key={"stack" + i} size="lg">{skill.title}</Heading>
                  <SimpleGrid key={"grid" + i} columns={[3, 4, 4, 4, 4, 5]} spacing={7}>
                    {skill.skillList.map((skillItem, i) => {
                      return (
                        <Tooltip
                          key={"tooltip " + i}
                          label={skillItem.skillTitle}
                          aria-label={skillItem.skillTitle}>
                          <Image
                            key={"image " + i}
                            minW={["80px"]}
                            src={skillItem.image}
                            alt={skillItem.text}
                          />
                        </Tooltip>
                      )
                    })}
                  </SimpleGrid>
                </Grid>
              )
            })}
          </VStack>
        </Box>
      </Flex>
    </Fade>
  );
};

export default Skills;
