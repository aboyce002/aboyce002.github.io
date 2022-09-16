import { Box, VStack, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
  <Box as="footer" position="absolute" left="0" bottom="0" right="0" role="contentinfo" w="100%" p={3} color="#303030" bg="#DDDDDD" sx={{ position: 'sticky', bottom: '0', }}>      
    <VStack spacing={0}>
      <Text className='footer'>© 2022 Aubrey Boyce</Text>
    </VStack>
  </Box>
  )
}

export default Footer;
