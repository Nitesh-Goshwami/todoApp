import { Flex, Box, Heading, Button, ButtonGroup, Spacer, Tooltip } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'
import { useState } from 'react'

const DeletedTask = ({ list, handleRemoveTask }) => {
    const [isShown, setIsShown] = useState(false);
    return <>
        <div >
            <Box >
                <Flex minWidth='max-content' alignItems='center' gap='2' bg="#F5EDDC" borderRadius="10px" m="5">
                    <Box p='2'>
                        <Heading as = "h4" size='sm' color="#293462">{list.task}</Heading>
                    </Box>
                    <Spacer />
                    <ButtonGroup gap='1' p="2">
                        <Tooltip label='Permanent Delete' fontSize='s' placement='top-end' hasArrow>
                            <Button
                                colorScheme='facebook'
                                cursor="pointer"
                                // onMouseEnter={() => setIsShown(true)}
                                // onMouseLeave={() => setIsShown(false)}
                                onClick={() => handleRemoveTask(list)}><Icon as={MdDeleteOutline} />
                            </Button>
                        </Tooltip>
                    </ButtonGroup>
                </Flex>
            </Box>
        </div>
    </>
}

export { DeletedTask }