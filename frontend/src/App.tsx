import './App.css'
import Routers from "./routes";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Routers />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
