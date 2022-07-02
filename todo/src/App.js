
import './App.css';
import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Todo } from './Components/Todo';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Heading>My Todo App</Heading>
        <Todo />
      </div>
    </ChakraProvider>
  );
}

export default App;
