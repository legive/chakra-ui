
import { Box, VStack, Link, Button, Heading } from "@chakra-ui/react";
import header from '../img/header.jpg'; // Importa la imagen
//import { ChevronRightIcon } from "@chakra-ui/icons";

function VerticalMenu() {


  return (
    
      <Box 
       bgImage={`url(${header})`} // Usa la URL de la imagen importada
       bgSize="cover"
       bgPosition="center"
       w="300px"
       h="400px"
       color="white"
       mt={10}
      >
        <Heading  m={20} size="md">DOMINA EL TERRERO</Heading>
        <VStack spacing={2} align="stretch" m={50}>
                <Link href="#" _hover={{ textDecoration: "none" }}>
                <Button colorScheme='white' variant='outline' w={200}>VER DETALLES</Button>
                </Link>
                <Link href="#" _hover={{ textDecoration: "none" }}>
                <Button colorScheme='white' variant='outline'  w={200}>VER VIDEOS</Button>
                </Link>
                </VStack>
     
     
             
            
    </Box>
  );
}

export default VerticalMenu;

