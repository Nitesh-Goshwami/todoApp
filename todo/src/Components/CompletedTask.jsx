import { Flex, Box, Heading, Button, ButtonGroup } from '@chakra-ui/react'
// import { useState } from 'react'

const CompletedTask = ({ list, handleInCompletedTask }) => {
    return <>
        <div >
            <Box >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box p='2'>
                        <Heading size='md'>{list.task}</Heading>
                    </Box>
                    {/* <Spacer w = "10px" /> */}
                    <ButtonGroup gap='2' p="4" >
                        <Button colorScheme='teal' onClick={() => handleInCompletedTask(list)}>InComplete</Button>
                    </ButtonGroup>
                </Flex>
            </Box>


        </div>
    </>
}

export { CompletedTask }