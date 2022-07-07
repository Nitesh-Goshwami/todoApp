import {
    Flex,
    Box,
    Heading,
    Button,
    ButtonGroup,
    List,
    ListItem,
    ListIcon,
    Spacer
} from '@chakra-ui/react';
import { useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { MdDelete, MdEdit, MdAddTask, MdCheckCircle } from 'react-icons/md'

const TodoItem = ({ list, handleCompletedTask, handleDeleteTask, handleEditTask }) => {
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
                                // onMouseEnter={() => setIsShown(true)}
                                // onMouseLeave={() => setIsShown(false)}
                                onClick={() => handleDeleteTask(list)}>{isShown ? <div>Delete</div> : <Icon as={MdDelete} />}</Button>
                            <Button
                                colorScheme='teal'
                                cursor="pointer"
                                // onMouseEnter={() => setIsShown(true)}
                                // onMouseLeave={() => setIsShown(false)}
                                onClick={() => handleCompletedTask(list)}>{isShown ? <div>Completed</div> : <Icon as={MdAddTask} />}</Button>
                            <Button
                                colorScheme='teal'
                                cursor="pointer"
                                // onMouseEnter={() => setIsShown(true)}
                                // onMouseLeave={() => setIsShown(false)}
                                onClick={() => handleEditTask(list)}>{isShown ? <div>Edit</div> : <Icon as={MdEdit} />}</Button>
                        </ButtonGroup>
                    </Flex>
                </Box>
            </ListItem>
        </List>
    </>
}

export { TodoItem }