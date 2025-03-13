import React from 'react'
import {Button} from '@mui/material'

export default function ButtonItem({text, color, bg})  {
  return (
    <Button variant='contained' sx={{background:
       bg, borderRadius: '25px', height: '40px', textTransform: 'capitalize', color: color, fontWeight: 500, '&:hover': {
                color: 'white',
                background: 'hsl(12, 88%, 59%)'
              }}}> {text} </Button>
  )
}
