
import './App.css';
import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Todo } from './Components/Todo';
import { Navbar } from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Login/Signup";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        {/* <div className="App"> */}
          <Route path={"/"} element={<Todo />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/signup"} element={<Signup />}></Route>
          {/* <Todo /> */}
        {/* </div> */}
      </Routes>
    </ChakraProvider >
  );
}

export default App;
