
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import header from '../img/header.jpg'; // Importa la imagen


function Header() {
  return (
    <Box
     
      p={4}
      color="white"
      bgImage={`url(${header})`} // Usa la URL de la imagen importada
      bgSize="cover"
      bgPosition="center"
      w="1000px"
      h="400px" // Altura del encabezado
      
    >
         <Heading  m={20} size="md">DOMINA EL TERRERO</Heading>
      <Flex alignItems="center" justifyContent="center" direction="row" gap={10} >
        <Button colorScheme='white' variant='outline'  w={200}>VER DETALLES</Button>
        <Button colorScheme='white' variant='outline'  w={200}>VER VIDEOS</Button>
      </Flex>

      
    </Box>
  );
}

export default Header;

