import { Flex } from '@chakra-ui/react';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import Projects from '../../pages/projects/Projects';
import Skills from '../../pages/skills/Skills';

const Main = () => {
  return (
    <Flex minH="100vh" direction="column" alignItems='center'>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Flex>
  );
};

export default Main;
