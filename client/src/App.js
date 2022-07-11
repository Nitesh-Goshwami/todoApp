
import './App.css';
import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Todo } from './Components/Todo';
import { Navbar } from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { SignIn } from './Components/Login/SignIn';
import { SignUp } from './Components/Login/Signup';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        {/* <div className="App"> */}
          <Route path={"/"} element={<Todo />}></Route>
          <Route path={"/signin"} element={<SignIn/>}></Route>
          <Route path={"/signup"} element={<SignUp/>}></Route>
        {/* </div> */}
      </Routes>
    </ChakraProvider >
  );
}

export default App;
