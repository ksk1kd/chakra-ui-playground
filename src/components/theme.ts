import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react'

const buttonRecipe = defineRecipe({
  variants: {
    size: {
      '2xl': {
        fontSize: 'xl',
        px: 6,
        py: 1,
      },
    },
  },
})

const customConfig = defineConfig({
  globalCss: {
    h2: {
      marginBlock: '20px',
    },
  },
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {
      colors: {
        mint: {
          DEFAULT: { value: 'oklch(0.72 0.11 178)' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
