import { Link } from '@chakra-ui/react'
import { Stack, Spacer, Flex, Box, VStack, Text, Heading } from '@chakra-ui/react'

const Contact = () => {
  return (
    <Box role="contentinfo">
      <Heading as='h1' size='xl'>Contact</Heading> 
      <Text>Feel free to contact me at my email:</Text>
        <Heading as='h2' size='md'><Link href="mailto:boyceaubrey14@gmail.com" colorScheme="purple" isExternal>boyceaubrey14@gmail.com</Link></Heading>
    </Box>
  )
}

export default Contact;
