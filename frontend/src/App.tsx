import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Routers from "./routes";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Routers />
      </div>
    </ChakraProvider>
  )
}

export default App
