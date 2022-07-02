import { Flex, Box, Heading, Button, ButtonGroup } from '@chakra-ui/react'


const TodoItem = ({ list, handleCompletedTask, handleDeleteTask, handleEditTask }) => {
    return <>
        <div >
            <Box >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box p='2'>
                        <Heading size='md'>{list.task}</Heading>
                    </Box>
                    {/* <Spacer w = "10px" /> */}
                    <ButtonGroup gap='2' p="4" >
                        <Button colorScheme='teal' onClick={() => handleDeleteTask(list)}>Delete</Button>
                        <Button colorScheme='teal' onClick={() => handleCompletedTask(list)}>Completed</Button>
                        <Button colorScheme='teal' onClick={() => handleEditTask(list)}>Edit</Button>
                    </ButtonGroup>
                </Flex>
            </Box>


        </div>
    </>
}

export { TodoItem }