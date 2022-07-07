import { Input, InputGroup, InputRightElement, Button, Heading, } from '@chakra-ui/react'
import { useState } from 'react'
import { TodoItem } from './TodoItems';
import { Grid, GridItem } from '@chakra-ui/react'
// import { v4 as uuidv4 } from 'uuid';
// import { TodoInput } from './TodoInput';
import { CompletedTask } from './CompletedTask';
import { DeletedTask } from './DeletedTask';
import { useEffect } from 'react';
import axios from "axios"
import { EditTodo } from './EditTodo';
import { Icon } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'



const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputList, setinputList] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const [completd, setCompletd] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [check, setCheck] = useState(false)

    useEffect(() => {
        getTodos();
        getCompleted();
        getDeleted();
    }, [check])

    const todosInstance = axios.create({
        // baseURL: "http://localhost:3001/",
        baseURL: "",
    })

    const getTodos = async () => {
        const res = await todosInstance.get(`/todos`);
        setinputList(res.data);
        setIsLoading(false);
        // Using fetch
        // const res = await fetch("/todos")
        // let data = await res.json()
        // console.log("res", data)
        // setinputList(data);
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
        setinputList([...inputList, data]);
        await todosInstance.post("/todos", data)
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

    // const handleDeleteTask = (item) => {
    //     setDeleted([...deleted, item])
    //     const deletedlist = inputList.filter((listItem) => listItem._id !== item._id);
    //     // setDeleted(deletedlist);
    //     setinputList(deletedlist);
    // }

    const handleDeleteTask = async (item) => {
        let id = item._id;
        let temp = {
            deletedstatus: true,
            completedstatus: false,
        }
        await todosInstance.patch(`/todos/${id}`, temp)
        // getTodos();
        setCheck(!check)
    }
    const handleCompletedTask = async (item) => {
        let id = item._id;
        let temp = {
            completedstatus: true,
            deletedstatus: false,
        }
        await todosInstance.patch(`/todos/${id}`, temp)
        // getTodos();
        setCheck(!check)
    }

    // const handleCompletedTask = (item) => {
    //     setCompletd([...completd, item])
    //     const updatedlist = inputList.filter((listItem) => listItem._id !== item._id);
    //     console.log("updated", updatedlist)
    //     setinputList(updatedlist);
    // }
    const handleInCompletedTask = (item) => {
        setinputList([...inputList, item])
        const updatedlist2 = completd.filter((listItem) => listItem._id !== item._id);
        setCompletd(updatedlist2);
    }

    const handleRemoveTask = (item) => {
        setinputList([...inputList, item])
        const updatedlist3 = deleted.filter((listItem) => listItem._id !== item._id);
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

        {/* todo Input Part  */}
        <InputGroup size='md' mt="1.5rem" mb={5}>
            <Input pr='4.5rem' placeholder='Enter Task'
                onChange={(e) => { setInputValue(e.target.value) }}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleAddTask}>
                    <Icon as={MdAdd} />
                </Button>
            </InputRightElement>
        </InputGroup>

        {/* <TodoInput handleAdd={handleAddTask} /> */}

        <div>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={4}>

                {/* Adding task */}
                <GridItem rowSpan={2} colSpan={1} h={600} bg='#4CACBC'>
                    <Heading size='md' mt="2" color="#06283D" textDecoration="underline" >Task To complete </Heading>
                    {inputList
                        .map((list) => (
                            <TodoItem
                                list={list}
                                key={list._id}
                                handleEditTask={handleEditTask}
                                handleCompletedTask={handleCompletedTask}
                                handleDeleteTask={handleDeleteTask}
                            />))}
                </GridItem>

                {/* Completed task */}
                <GridItem colSpan={1} bg='#6CC4A1'>
                    <Heading size='md' mt="2" color="#06283D" textDecoration="underline">Completed Task</Heading>
                    {completd.map((list) => (
                        <CompletedTask
                            list={list}
                            key={list._id}
                            handleInCompletedTask={handleInCompletedTask}
                        />))}
                </GridItem>

                {/* Deleted task */}
                <GridItem colSpan={1} bg='#F6E3C5'>
                    <Heading size='md' mt="2" color="#06283D" textDecoration="underline">Deleted Task</Heading>
                    {deleted.map((list) => (
                        <DeletedTask
                            list={list}
                            key={list._id}
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