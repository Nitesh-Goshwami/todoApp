import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Icon,
    useDisclosure,
    ListItem, List
} from '@chakra-ui/react'
import { useRef } from 'react'
import { MdMenu, MdHome,MdTask,MdDelete,MdOutlineTask } from 'react-icons/md';


const Drawers = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return <div>
        <Button ref={btnRef} colorScheme='telegram' onClick={onOpen}>
            <Icon as={MdMenu} />
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='left'
            colorScheme='telegram'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>My Todo App</DrawerHeader>
                <DrawerBody>
                    <List spacing={5} >
                        <ListItem display= "flex" gap = {2} fontWeight = "bold">
                            <Icon font-size="24px" as={MdHome} />  <div>Home</div>
                        </ListItem>
                        <ListItem display= "flex" gap = {2} fontWeight = "bold">
                            <Icon font-size="24px" as={MdOutlineTask} />  <div>In Progress Task</div>
                        </ListItem>
                        <ListItem display= "flex" gap = {2} fontWeight = "bold">
                            <Icon font-size="24px" as={MdTask} />  <div>Completed Task</div>
                        </ListItem>
                        <ListItem display= "flex" gap = {2} fontWeight = "bold">
                            <Icon font-size="24px" as={MdDelete} />  <div>Deleted Task</div>
                        </ListItem>
                    </List>
                </DrawerBody>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>


    </div>
}

export { Drawers }