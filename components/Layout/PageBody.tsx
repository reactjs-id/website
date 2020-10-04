import { Box } from '@chakra-ui/core'
import * as React from 'react'

const PageBody: React.FC = ({ children }) => {
  return (
    <Box as="section" px={[4, null, null, 8]}>
      <Box mx="auto" maxWidth="3xl">
        {children}
      </Box>
    </Box>
  )
}

export default PageBody
