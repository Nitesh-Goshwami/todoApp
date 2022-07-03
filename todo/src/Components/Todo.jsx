import { Input, InputGroup, InputRightElement, Button, Heading, } from '@chakra-ui/react'
import { useState } from 'react'
import { TodoItem } from './TodoItems';
import { Grid, GridItem } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
// import { TodoInput } from './TodoInput';
import { CompletedTask } from './CompletedTask';
import { DeletedTask } from './DeletedTask';
import { useEffect } from 'react';
import axios from "axios"
import { EditTodo } from './EditTodo';
// 1. Import
import { Icon } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'



const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputList, setinputList] = useState([]);
    // const [showAll, setShowAll] = useState(true);
    const [deleted, setDeleted] = useState([]);
    const [completd, setCompletd] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTodos();
    }, [])

    // const todosInstance = axios.create({
    //     // baseURL: "http://localhost:3001/",
    //     baseURL :"https://todoapp-nitesh.herokuapp.com/"
    // })

    const getTodos = async () => {
        // const res = await todosInstance.get(`todos`);
        const res = await fetch("http://todoapp-nitesh.herokuapp.com/todos")
        let data = await res.json()
        console.log("res", res)
        // setinputList(res.data);
        setinputList(data);
        setIsLoading(false);
    }
    // getTods();

    const handleAddTask = () => {
        const data = {
            id: uuidv4(),
            task: inputValue,
            status: false
        }
        setinputList([...inputList, data]);
        // await todosInstance.post("todos", data)
        getTodos();
        fetch("http://todoapp-nitesh.herokuapp.com/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            getTodos();
        });
    }

    const handleDeleteTask = (item) => {
        setDeleted([...deleted, item])
        const deletedlist = inputList.filter((listItem) => listItem.id !== item.id);
        // setDeleted(deletedlist);
        setinputList(deletedlist);
    }

    const handleCompletedTask = (item) => {
        setCompletd([...completd, item])
        const updatedlist = inputList.filter((listItem) => listItem.id !== item.id);
        setinputList(updatedlist);
    }
    const handleInCompletedTask = (item) => {
        setinputList([...inputList, item])
        const updatedlist2 = completd.filter((listItem) => listItem.id !== item.id);
        setCompletd(updatedlist2);
    }

    const handleRemoveTask = (item) => {
        setinputList([...inputList, item])
        const updatedlist3 = deleted.filter((listItem) => listItem.id !== item.id);
        setDeleted(updatedlist3);
    }
    const handleEditTask = () => {
        console.log("edit mode activated")
    }

    // const handleToggle = (id) => {
    //     const updatedTodo = inputList.map((item) =>
    //         item.id === id ? { ...item, status: !item.status } : item
    //     );
    //     setinputList(updatedTodo);
    // };
    return <>

        <InputGroup size='md' mt="1.5rem">
            <Input pr='4.5rem' placeholder='Enter Task'
                onChange={(e) => { setInputValue(e.target.value) }}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleAddTask}>
                <Icon as={MdAdd} />
                </Button>
            </InputRightElement>
        </InputGroup>
        <div>
            {/* <TodoInput handleAdd={handleAddTask} /> */}

            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} h={600} bg='blue.200'>
                    <Heading size='md'>Task To complete</Heading>
                    {inputList
                        // .filter((list) => showAll ? true : !showAll.status)
                        .map((list) => (
                            <TodoItem
                                list={list}
                                key={list.id}
                                // handleToggle={handleToggle}
                                handleEditTask={handleEditTask}
                                handleCompletedTask={handleCompletedTask}
                                handleDeleteTask={handleDeleteTask}
                            />))}
                </GridItem>
                <GridItem colSpan={1} bg='green.300'>
                    <Heading>Completed Task</Heading>
                    {completd.map((list) => (
                        <CompletedTask
                            list={list}
                            key={list.id}
                            handleInCompletedTask={handleInCompletedTask}
                        />))}
                </GridItem>
                <GridItem colSpan={1} bg='tomato'>
                    <Heading>Deleted Task</Heading>
                    {deleted.map((list) => (
                        <DeletedTask
                            list={list}
                            key={list.id}
                            handleRemoveTask={handleRemoveTask}
                        />))
                    }
                </GridItem>
            </Grid>
            {/* <EditTodo handleAdd = {handleAddTask}/> */}
        </div>
    </>

}
export { Todo }