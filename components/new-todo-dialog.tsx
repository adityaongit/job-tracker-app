/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'

import { useTaskStore } from '@/lib/store'

export default function NewTodoDialog() {
  const addTask = useTaskStore(state => state.addTask)
  const [isDialogOpen, setDialogOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const { title, description } = Object.fromEntries(formData)

    if (typeof title !== 'string' || typeof description !== 'string') return

    addTask(title, description)

    // Close the dialog after successfully adding a new job
    setDialogOpen(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='secondary'
          size='sm'
          onClick={() => setDialogOpen(true)}
        >
          ＋ Add New Job Application
        </Button>
      </DialogTrigger>
      {isDialogOpen && (
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Add New Application</DialogTitle>
            <DialogDescription>
              Don't forget to follow up with your Application
            </DialogDescription>
          </DialogHeader>
          <form
            id='todo-form'
            className='grid gap-4 py-4'
            onSubmit={handleSubmit}
          >
            <div className='grid grid-cols-4 items-center gap-4'>
              <Input
                id='title'
                name='title'
                placeholder='Company Name'
                className='col-span-4'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Input
                id='description'
                name='description'
                placeholder='Job Title'
                className='col-span-4'
              />
            </div>
          </form>
          <DialogFooter>
            <Button type='submit' size='sm' form='todo-form'>
              Add Job
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}