import { Input, InputGroup, InputRightElement, Button, Heading, } from '@chakra-ui/react'
import { useState } from 'react'
import { TodoItem } from './TodoItems';
import { Grid, GridItem } from '@chakra-ui/react'
import { CompletedTask } from './CompletedTask';
import { DeletedTask } from './DeletedTask';
import { useEffect } from 'react';
import axios from "axios"
import { Icon } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'
import 'reactjs-popup/dist/index.css';
import "./todo.css";


const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputList, setinputList] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const [completd, setCompletd] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [check, setCheck] = useState(false);
    const [edited, setEdited] = useState()

    useEffect(() => {
        getTodos();
        getCompleted();
        getDeleted();
    }, [check])

    const todosInstance = axios.create({
        // baseURL: "http://localhost:3001",
        baseURL: "https://todoapp-nitesh.herokuapp.com",
        // baseURL: "",
    })

    const getTodos = async () => {
        const res = await todosInstance.get(`/todos`);
        setinputList(res.data);
        setIsLoading(true);

        // // Using fetch
        // const res = await fetch("https://todoapp-nitesh.herokuapp.com/todos", {
        //     method: "GET",
        //     headers: "Access-Control-Allow-Origin"
        // })
        // let data = await res.json()
        // console.log("res", data)
        // setinputList(data);
        // setIsLoading(true);
    }

    const getCompleted = async () => {
        const res = await todosInstance.get(`/todos/completed`);
        setCompletd(res.data);
    }
    const getDeleted = async () => {
        const res = await todosInstance.get(`/todos/deleted`);
        setDeleted(res.data);
    }


    const handleAddTask = async () => {
        const data = {
            // id: uuidv4(),
            task: inputValue,
            status: false
        }
        await todosInstance.post("/todos", data);
        setinputList([...inputList, data]);
        getTodos();

        // Using fetch
        // fetch("/todos", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }).then(() => {
        //     getTodos();
        // });
    }


    const handleDeleteTask = async (item) => {
        let id = item._id;
        let temp = {
            deletedstatus: true,
            completedstatus: false,
        }
        await todosInstance.patch(`/todos/${id}`, temp)
        getTodos();
        setCheck(!check)
    }
    const handleCompletedTask = async (item) => {
        let id = item._id;
        let temp = {
            completedstatus: true,
            deletedstatus: false,
        }
        await todosInstance.patch(`/todos/${id}`, temp)
        getTodos();
        setCheck(!check)
    }

    const handleEditInput = (e) => {
        setEdited(e.target.value)
        console.log(e.target.value);
    }
    const handleEditTask = async (item) => {
        let id = item._id;
        let temp = {
            task: edited,
        }
        await todosInstance.patch(`/todos/${id}`, temp)
        getTodos();
        setCheck(!check)
    }

    const handleRemoveTask = async (item) => {
        let id = item._id;
        await todosInstance.delete(`/todos/${id}`)
        getTodos();
        setCheck(!check)
    }

    const handleInCompletedTask = async (item) => {
        let id = item._id;
        let temp = {
            completedstatus: false,
            deletedstatus: false,
        }
        await todosInstance.patch(`/todos/${id}`, temp)
        getTodos();
        setCheck(!check)
    }


    // Without server impletementation of above functionalities

    // const handleCompletedTask = (item) => {
    //     setCompletd([...completd, item])
    //     const updatedlist = inputList.filter((listItem) => listItem._id !== item._id);
    //     console.log("updated", updatedlist)
    //     setinputList(updatedlist);
    // }
    // const handleDeleteTask = (item) => {
    //     setDeleted([...deleted, item])
    //     const deletedlist = inputList.filter((listItem) => listItem._id !== item._id);
    //     // setDeleted(deletedlist);
    //     setinputList(deletedlist);
    // }
    // const handleInCompletedTask = (item) => {
    //     setinputList([...inputList, item])
    //     const updatedlist2 = completd.filter((listItem) => listItem._id !== item._id);
    //     setCompletd(updatedlist2);
    // }
    // const handleRemoveTask = (item) => {
    //     setinputList([...inputList, item])
    //     const updatedlist3 = deleted.filter((listItem) => listItem._id !== item._id);
    //     setDeleted(updatedlist3);
    // }
    // const handleToggle = (id) => {
    //     const updatedTodo = inputList.map((item) =>
    //         item.id === id ? { ...item, status: !item.status } : item
    //     );
    //     setinputList(updatedTodo);
    // };

    return <>

        {/* todo Input Part  */}
        <InputGroup size='md' margin="auto" m={5} width="96%" alignItems="center">
            <Input pr='4.5rem' placeholder='Enter Task'
                onChange={(e) => { setInputValue(e.target.value) }}
            />
            <InputRightElement width='3.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleAddTask}>
                    <Icon as={MdAdd} />
                </Button>
            </InputRightElement>
        </InputGroup>

        {/* <TodoInput handleAdd={handleAddTask} /> */}

        <div>
            <Grid
                className="wrapper"
                h='200px'
                // templateRows='repeat(1, 1fr)'
                // templateColumns='repeat(3, 1fr)'
                gap={5}>

                {/* Adding task */}
                <GridItem colSpan={1} bg='#CFD2CF'>
                    <Heading size='md' color="#06283D" textDecoration="underline" bg="yellow.300" h="50px" p="2">In Progress</Heading>
                    {isLoading && inputList.map((list) => (
                        <TodoItem
                            list={list}
                            key={list._id}
                            handleEditTask={handleEditTask}
                            handleCompletedTask={handleCompletedTask}
                            handleDeleteTask={handleDeleteTask}
                            handleEditInput={handleEditInput}
                        />))}
                </GridItem>

                {/* Completed task */}
                <GridItem colSpan={1} bg='#CFD2CF'>
                    <Heading size='md' color="#06283D" textDecoration="underline" bg="green.300" h="50px" p="2">Completed Task</Heading>
                    {isLoading && completd.map((list) => (
                        <CompletedTask
                            list={list}
                            key={list._id}
                            handleInCompletedTask={handleInCompletedTask}
                        />))}
                </GridItem>

                {/* Deleted task */}
                <GridItem colSpan={1} bg='#CFD2CF'>
                    <Heading size='md' color="#06283D" textDecoration="underline" bg="red.200" h="50px" p="2">Deleted Task</Heading>
                    {isLoading && deleted.map((list) => (
                        <DeletedTask
                            list={list}
                            key={list._id}
                            handleRemoveTask={handleRemoveTask}
                        />))
                    }
                </GridItem>
            </Grid>
        </div>
    </>

}
export { Todo }