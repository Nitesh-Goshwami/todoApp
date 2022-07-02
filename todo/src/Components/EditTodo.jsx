import { useState } from 'react'
import { Input, InputGroup, InputRightElement, Button} from '@chakra-ui/react'

const EditTodo = ({ handleAdd }) => {
    const [inputValue, setInputValue] = useState("");
    return <>
        <InputGroup
            size='md'
            mt="1.5rem">
            <Input
                pr='4.5rem'
                h = "3rem"
                placeholder='Enter Task'
                value={inputValue}
                onChange={e => { setInputValue(e.target.value) }}
            />
            <InputRightElement width='4.5rem'>
                <Button
                    h='1.75rem'
                    size='sm'
                    // onClick={handleAdd(inputValue)}
                    >
                    Add
                </Button>
            </InputRightElement>
        </InputGroup>
    </>
}

export { EditTodo }