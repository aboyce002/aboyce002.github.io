import { Stack, Spacer, Flex, Box, VStack, Text, Heading, Grid, GridItem, Link, Image } from '@chakra-ui/react'
import i1 from '../../assets/art/ecqwteasvterdt2.png'
import i2 from '../../assets/art/gdfgtryhfgh2m.png'
import i3 from '../../assets/art/grygrty2.png'
import i4 from '../../assets/art/hjtydutyughj323f3.png'
import i5 from '../../assets/art/jygjgyjugyj5.png'
import i6 from '../../assets/art/kljhlkjhjklh32.png'

const Art = () => {
  const images = [
    i1, i2, i3, i4, i5, i6
  ];
  return (
    <Box role="contentinfo">
    <Box>
      <Heading as='h1' size='xl'>Art</Heading>
        <Grid
          h='600px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(6, 1fr)'
          gap={4}
          p={4}>

          {images.map((src) => (
          
            <GridItem
              as={Link}
              key={src}
              colSpan={2}
              w="100%"
              borderRadius="xl"
              bgImage={src}
              href={src}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              isExternal
            >
            </GridItem>
        ))}
      </Grid>
    </Box>
    <Box p={5}>
      <Text>For artwork-related inqueries, please send an email to  
      <Link href="mailto:boyceaubrey14@gmail.com" isExternal> boyceaubrey14@gmail.com</Link> or <Link href="https://kassinu.carrd.co" isExternal>check out my caard</Link></Text>
    </Box>
    </Box>
  )
}

export default Art;
