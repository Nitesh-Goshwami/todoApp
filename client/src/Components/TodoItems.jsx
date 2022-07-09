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
    Input,
    Tooltip
} from '@chakra-ui/react';
// import { useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { MdDelete, MdEdit, MdAddTask, MdCheckCircle } from 'react-icons/md';
import Popup from 'reactjs-popup';

const TodoItem = ({ list, handleCompletedTask, handleDeleteTask, handleEditTask, handleEditInput }) => {
    // const [isShown, setIsShown] = useState(false);
    return <>
        <List spacing={3} bg="#F5EDDC" borderRadius="10px" m="5">
            <ListItem>
                <Box >
                    <Flex minWidth='max-content' alignItems='center' gap='1'>
                        {/* <Box p='2'> */}
                        <ListIcon mr="1" as={MdCheckCircle} color='green.500' />
                        <Heading as="h4" size='sm' color="#293462" >{list.task}</Heading>
                        {/* </Box> */}
                        <Spacer />
                        <ButtonGroup gap='1' p="2" >
                            <Tooltip label='Delete' fontSize='s' placement='top-end' hasArrow>
                                <Button
                                    colorScheme='facebook'
                                    cursor="pointer"
                                    onClick={() => handleDeleteTask(list)}><Icon as={MdDelete} /></Button>
                            </Tooltip>
                            <Tooltip label='Completed' fontSize='sx' placement='top-end' hasArrow>
                                <Button
                                    colorScheme='facebook'
                                    cursor="pointer"
                                    onClick={() => handleCompletedTask(list)}><Icon as={MdAddTask} /></Button>
                            </Tooltip>
                            {/* <Tooltip label='Edit' fontSize='md' placement='top-end' hasArrow> */}
                            <Popup trigger={
                                <Button
                                    colorScheme='facebook'
                                    cursor="pointer">
                                    <Icon as={MdEdit} />
                                </Button>
                            }
                                position="right center" width= "500">
                                <div style={{ height : "100px",backgroundColor:"#495C83" }}>
                                    <Input pr='4.5rem' placeholder='Edit Task' backgroundColor="#EAF6F6"
                                        onChange={(e) => handleEditInput(e)} />
                                    <Button
                                        position="right"
                                        colorScheme='yellow'
                                        cursor="pointer"
                                        onClick={() => handleEditTask(list)}>Save
                                    </Button>
                                </div>
                            </Popup>
                            {/* </Tooltip> */}
                        </ButtonGroup>
                    </Flex>
                </Box>
            </ListItem>
        </List>
    </>
}

export { TodoItem }