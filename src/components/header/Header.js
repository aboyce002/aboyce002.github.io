import { HashLink as ReactLink } from 'react-router-hash-link';
import { HStack, Menu, MenuButton, MenuItem, MenuList, IconButton, Show, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { FaGithub } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <Flex
      w="100%"
      p={5}
      justifyContent={{base: "right", lg: "center"}}
      bg="themeColors.100"
      variant="lightStyle"
      sx={{ position: 'sticky', top: '0', zIndex: '2' }}>
      <HStack spacing={[0, 5, 10, 10, 10]}>

        {/* menu for mobile */}
        <Show below='lg'>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<BiMenu />}
              variant='ghost'
              fontSize={35}
            />
            <MenuList>
              <MenuItem><Link as={ReactLink} smooth to="#about">About</Link></MenuItem>
              <MenuItem><Link as={ReactLink} smooth to="#skills">Skills</Link></MenuItem>
              <MenuItem><Link as={ReactLink} smooth to="#projects">Projects</Link></MenuItem>
              <MenuItem><Link as={ReactLink} smooth to="#contact">Contact</Link></MenuItem>
              <MenuItem><Link as={ReactLink} to={require(`../../assets/resume/Aubrey Boyce Resume.pdf`)}target="_blank">Resume</Link></MenuItem>
              <MenuItem><Link href="https://github.com/aboyce002" isExternal>Github</Link></MenuItem>
            </MenuList>
          </Menu>
        </Show>

        {/* header bar for desktop */}
        <Show above='lg'>
          <Link as={ReactLink}
            smooth
            to="#about"
            variant="lightStyle">
            About
          </Link>
          <Link as={ReactLink}
            smooth
            to="#skills"
            variant="lightStyle">
            Skills
          </Link>
          <Link as={ReactLink}
            smooth
            to="#projects"
            variant="lightStyle">
            Projects
          </Link>
          <Link as={ReactLink}
            smooth
            to="#contact"
            variant="lightStyle">
            Contact
          </Link>
          <Link as={ReactLink}
            to={require(`../../assets/resume/Aubrey Boyce Resume.pdf`)}
            target="_blank"
            variant="lightStyle">
            Resume
          </Link>
          <Link
            href="https://github.com/aboyce002"
            variant="lightStyle"
            isExternal>
            <FaGithub />
          </Link>
        </Show>
      </HStack>
    </Flex>
  );
};

export default Header;
