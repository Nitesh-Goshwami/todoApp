import { Flex,  Box, Heading, Button, ButtonGroup } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { MdDeleteOutline} from 'react-icons/md'
// import { useState } from 'react'

const DeletedTask = ({ list,  handleRemoveTask }) => {
    return <>
        <div >
            <Box >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box p='2'>
                        <Heading size='md'>{list.task}</Heading>
                    </Box>
                    {/* <Spacer w = "10px" /> */}
                    <ButtonGroup gap='2' p="4" >
                        <Button colorScheme='teal' onClick={() => handleRemoveTask(list)}><Icon as={MdDeleteOutline} /></Button>
                       
                    </ButtonGroup>
                </Flex>
            </Box>


        </div>
    </>
}

export { DeletedTask }