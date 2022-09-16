import { Container } from '@chakra-ui/react'

const Main = (props) => {
  return (
    <Container className='main' textAlign='center' height='100%' py={4} px={10} bg='#E8EBEE' width="calc(80vw)" maxWidth="calc(80vw)" color="#505050">
      {props.children}
    </Container>
  )
}

export default Main;
