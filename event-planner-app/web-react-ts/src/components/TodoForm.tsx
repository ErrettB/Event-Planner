import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { empty } from '@apollo/client'
import TodoList from './TodoList'
import { IToDo } from '../Interfaces'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function TodoForm() {
  const [task, setTask] = useState('')
  const [deadline, setDeadline] = useState(new Date())
  const [toDos, setToDos] = useState<IToDo[]>([])
  const [modalButton, setModalButton] = useState(false)
  const [deadlineButton, setDeadlineButton] = useState(false)
  const [rerender, setRerender] = useState(false)

  const addToDo = (): any => {
    const newTask = { nameToDo: task }
    setToDos([newTask, ...toDos])
    setModalButton(!modalButton)

    console.log(toDos)
  }

  const handleDeadline = (): any => {
    setDeadline(deadline)
  }

  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    }
  }

  const handleChangeDeadline = (event: Date): void => {
    setDeadline(event)
    console.log(event)
  }

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<ToDoInputs>()

  const handleClose = () => {
    setModalButton(false)
  }
  const handleDeadlineButton = () => {
    setDeadlineButton(!deadlineButton)
  }

  return (
    <div>
      <Button variant="contained" onClick={() => setModalButton(!modalButton)}>
        Create new To-Do
      </Button>

      <DatePicker
        selected={deadline}
        onChange={(event: Date) => setDeadline(event)}
      />

      {modalButton && (
        <Dialog
          fullWidth
          maxWidth="md"
          open={modalButton}
          onClose={handleClose}
        >
          <form>
            <DialogContent>
              <TextField
                fullWidth
                id="outlined-basic"
                label="What do you need to-do?"
                onChange={handleChangeTask}
                name="task"
                value={task}
              ></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeadlineButton}> Create a Deadline</Button>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={addToDo}>
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
      <div>
        {toDos.map((todo: IToDo, key: number) => {
          return <TodoList key={key} task={todo} />
        })}
      </div>
    </div>
  )
}
