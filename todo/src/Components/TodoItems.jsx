import {
    Flex,
    Box,
    Heading,
    Button,
    ButtonGroup,
    List,
    ListItem,
    ListIcon,
    Spacer,
    Input
} from '@chakra-ui/react';
import { useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { MdDelete, MdEdit, MdAddTask, MdCheckCircle } from 'react-icons/md';
import Popup from 'reactjs-popup';

const TodoItem = ({ list, handleCompletedTask, handleDeleteTask, handleEditTask,handleEditInput }) => {
    const [isShown, setIsShown] = useState(false);
    return <>
        <List spacing={3}>
            <ListItem>
                <Box >
                    <Flex minWidth='max-content' alignItems='center' gap='1'>
                        {/* <Box p='2'> */}
                        <ListIcon mr="1" as={MdCheckCircle} color='green.500' />
                        <Heading size='md' color="#293462">{list.task}</Heading>
                        {/* </Box> */}
                        <Spacer />
                        <ButtonGroup gap='2' p="4" >
                            <Button
                                colorScheme='teal'
                                cursor="pointer"
                                onClick={() => handleDeleteTask(list)}><Icon as={MdDelete} /></Button>
                            <Button
                                colorScheme='teal'
                                cursor="pointer"
                                onClick={() => handleCompletedTask(list)}><Icon as={MdAddTask} /></Button>
                            <Popup trigger={
                                <Button
                                    colorScheme='teal'
                                    cursor="pointer">
                                    <Icon as={MdEdit} />
                                </Button>}
                                position="right center" display="flex">
                                <Input pr='4.5rem' placeholder='Edit Task'
                                onChange={(e) => handleEditInput(e)}
                                />
                                <Button
                                    position="right"
                                    colorScheme='teal'
                                    cursor="pointer"
                                    onClick={() => handleEditTask(list)}>Save</Button>
                            </Popup>
                        </ButtonGroup>
                    </Flex>
                </Box>
            </ListItem>
        </List>
    </>
}

export { TodoItem }