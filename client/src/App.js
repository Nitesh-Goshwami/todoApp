
import './App.css';
import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Todo } from './Components/Todo';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
        <Navbar/>
      <div className="App">
        <Todo />
      </div>
    </ChakraProvider>
  );
}

export default App;
