import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import { Drawers } from './Drawers'

const Navbar = () => {
    return <div>
        <Flex minWidth='max-content' alignItems='center' gap='2' bg = "blue.800" m ="5px">
            <Box p='2'  display="flex">
                <Drawers/>
                <Heading size='md' mt = "7px" ml = "15px" color = "white">Todo App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='telegram' m ="5px">Sign Up</Button>
                <Button colorScheme='telegram' m ="5px">Log in</Button>
            </ButtonGroup>
        </Flex>
    </div>
}

export {Navbar}