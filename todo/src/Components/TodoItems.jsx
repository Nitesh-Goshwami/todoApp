import {
    Flex,
    Box,
    Heading,
    Button,
    ButtonGroup,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { MdDelete, MdEdit, MdAddTask, MdCheckCircle } from 'react-icons/md'

const TodoItem = ({ list, handleCompletedTask, handleDeleteTask, handleEditTask }) => {
    return <>
        <List spacing={3}>
            <ListItem>
                <Box >
                    <Flex minWidth='max-content' alignItems='center' gap='1'>
                        {/* <Box p='2'> */}
                        <ListIcon mr ="1" as={MdCheckCircle} color='green.500' />
                        <Heading size='md'>{list.task}</Heading>
                        {/* </Box> */}
                        {/* <Spacer w = "10px" /> */}
                        <ButtonGroup gap='2' p="4" >
                            <Button colorScheme='teal' onClick={() => handleDeleteTask(list)}><Icon as={MdDelete} /></Button>
                            <Button colorScheme='teal' onClick={() => handleCompletedTask(list)}><Icon as={MdAddTask} /></Button>
                            <Button colorScheme='teal' onClick={() => handleEditTask(list)}><Icon as={MdEdit} /></Button>
                        </ButtonGroup>
                    </Flex>
                </Box>
            </ListItem>
        </List>
    </>
}

export { TodoItem }