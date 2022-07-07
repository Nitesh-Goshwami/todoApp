import { Flex, Box, Heading, Button, ButtonGroup, Spacer } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { MdAssignmentReturn } from 'react-icons/md';
import { useState } from 'react'

const CompletedTask = ({ list, handleInCompletedTask }) => {
    const [isShown, setIsShown] = useState(false);
    return <>
        <div >
            <Box >
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box p='2'>
                        <Heading size='md' color="#293462">{list.task}</Heading>
                    </Box>
                    <Spacer />
                    <ButtonGroup gap='2' p="4" >
                        <Button
                            colorScheme='teal'
                            cursor="pointer"
                            // onMouseEnter={() => setIsShown(true)}
                            // onMouseLeave={() => setIsShown(false)}
                            onClick={() => handleInCompletedTask(list)}>{isShown ? <div>Incomplete</div> : <Icon as={MdAssignmentReturn} />}</Button>

                    </ButtonGroup>
                </Flex>
            </Box>
        </div>
    </>
}

export { CompletedTask }