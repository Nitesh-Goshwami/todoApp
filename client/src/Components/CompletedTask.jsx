import { Flex, Box, Heading, Button, ButtonGroup, Spacer,Tooltip } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { MdAssignmentReturn } from 'react-icons/md';

const CompletedTask = ({ list, handleInCompletedTask }) => {
    return <>
        <div >
            <Box >
                <Flex minWidth='max-content' alignItems='center' gap='2' bg="#F5EDDC" borderRadius="10px" m="5">
                    <Box p='2'>
                        <Heading as = "h4" size='sm' color="#293462">{list.task}</Heading>
                    </Box>
                    <Spacer />
                    <ButtonGroup gap='1' p="2" >
                        <Tooltip label='Incomplete' fontSize='s' placement='top-end' hasArrow>
                            <Button
                                colorScheme='facebook'
                                cursor="pointer"
                                // onMouseEnter={() => setIsShown(true)}
                                // onMouseLeave={() => setIsShown(false)}
                                onClick={() => handleInCompletedTask(list)}><Icon as={MdAssignmentReturn} />
                            </Button>
                        </Tooltip>
                    </ButtonGroup>
                </Flex>
            </Box>
        </div>
    </>
}

export { CompletedTask }