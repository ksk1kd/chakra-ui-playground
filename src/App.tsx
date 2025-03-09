import { Box, Button, HStack, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')

  return (
    <>
      <div className="container">
        <section>
          <Heading size="4xl">Virtual Color</Heading>
          <Box
            colorPalette="blue"
            bg={{ base: 'colorPalette.800', _hover: 'colorPalette.700' }}
          >
            Hover me
          </Box>
        </section>

        <section>
          <Heading size="4xl">Pseudo</Heading>
          <Box _hover={{ bg: 'mint' }}>Hover me</Box>
        </section>

        <section>
          <Heading size="4xl">Token</Heading>
          <Box bg="mint">Background color mint</Box>
        </section>

        <section>
          <Heading size="4xl">Recipe</Heading>
          <HStack>
            <Button size="xl">Click me</Button>
            <Button size="2xl">Click me</Button>
          </HStack>
        </section>

        <section>
          <Heading size="4xl">Input</Heading>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <p>{input}</p>
        </section>

        <section>
          <Heading size="4xl">Button</Heading>
          <HStack>
            <Button>Click me</Button>
            <Button>Click me</Button>
          </HStack>
        </section>
      </div>
    </>
  )
}

export default App
