import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  globalCss: {
    h2: {
      marginBlock: '20px',
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
