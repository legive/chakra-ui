
import { Flex } from  "@chakra-ui/react";
import './App.css'
import Header from './components/Header'
import NavigationLeft from './components/NavigationLeft'

function App() {
 

  return (
    <>
    <Flex direction="column">
     <Header/>
      <NavigationLeft/>
      </Flex>
    </>
  )
}

export default App
