import React from 'react'
import FlashCards from './page'
import { Box } from '@mui/material'

const LayoutSavedFlashCards = () => {
  return (
    <Box sx={{ background: "linear-gradient(to bottom, #FFCBA4, #FFE8D6) ", padding:2}}>
      <FlashCards/>
    </Box>
  )
}

export default LayoutSavedFlashCards
