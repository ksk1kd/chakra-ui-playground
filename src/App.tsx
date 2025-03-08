import { Button, HStack, Heading } from '@chakra-ui/react'

function App() {
  return (
    <>
      <div className="container">
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
