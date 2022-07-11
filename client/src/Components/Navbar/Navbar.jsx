import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import { Drawers } from './Drawers';
import { Link } from "react-router-dom"

const Navbar = () => {
    return <div>
        <Flex minWidth='max-content' alignItems='center' gap='2' bg="blue.800" m="5px">
            <Box p='2' display="flex">
                <Drawers />
                <div>
                    <Link to="/">
                        <Heading size='md' mt="7px" ml="15px" color="white">Todo App</Heading>
                    </Link>
                </div>

            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Link to="/signup">
                    <Button colorScheme='telegram' m="5px">Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button colorScheme='telegram' m="5px">Log in</Button>
                </Link>
                {/* <Button colorScheme='telegram' m ="5px">Sign Up</Button> */}
                {/* <Button colorScheme='telegram' m ="5px">Log in</Button> */}
            </ButtonGroup>
        </Flex>
    </div>
}

export { Navbar }