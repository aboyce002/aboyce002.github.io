import { Link as ReactLink, useLocation } from 'react-router-dom';
import { Box, HStack, Spacer, Heading } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Box as="header" w="100%" role="contentinfo" sx={{ position: 'sticky', top: '0', }}>

      <HStack className="topHeader" p={5} px={20} spacing="100px" color="white" bgGradient="linear(to-r, black,#3C2AE2,#CA33FF)">
        <Box>
          <Link to='/' className="left logo">
            <Heading as='h4'>
              Aubrey Boyce
            </Heading>
          </Link>
        </Box>
        <Spacer/>
        <Box color={pathname === '/about' ? 'white' : '#EEE6E6'}>
        <Link as={ReactLink} to={{ pathname: "/about"}}>ABOUT</Link>
        </Box>
        <Box color={pathname === '/art' ? 'white' : '#EEE6E6'}>
        <Link as={ReactLink} to={{ pathname: "/art"}}>ART</Link>
        </Box>
        <Box color={pathname === '/contact' ? 'white' : '#EEE6E6'}>
        <Link as={ReactLink} to={{ pathname: "/contact"}}>CONTACT</Link>
        </Box>
        <Box>
        <Heading as='h3' size='lg'><Link href = "https://github.com/aboyce002" isExternal><GoMarkGithub/></Link></Heading>
        </Box>
      </HStack>
    </Box>
  );
}

export default Header;
