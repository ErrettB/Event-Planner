import { Box, Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { IToDo } from '../Interfaces'

interface Props {
  task: IToDo
}

export default function TodoList({ task }: Props) {
  return (
    <Box bgcolor="#FFFFFF">
      <h3>{task.nameToDo}</h3>
    </Box>
  )
}
