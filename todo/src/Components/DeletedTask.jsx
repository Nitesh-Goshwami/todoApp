import { Flex, Box, Heading, Button, ButtonGroup, Spacer } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'
import { useState } from 'react'

const DeletedTask = ({ list, handleRemoveTask }) => {
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
                            onClick={() => handleRemoveTask(list)}>{isShown ? <div>Remove</div> : <Icon as={MdDeleteOutline} />}</Button>

                    </ButtonGroup>
                </Flex>
            </Box>
        </div>
    </>
}

export { DeletedTask }