import Column from './column'
import NewTodoDialog from './new-todo-dialog'

export default function Columns() {
  return (
    <div>
      <NewTodoDialog />

      <section className='mt-10 flex gap-6 lg:gap-12'>
        <Column title='Applied' status='TODO' />
        <Column title='Interview' status='IN_PROGRESS' />
        <Column title='Offer' status='DONE' />
        <Column title='Rejected' status='REJECTED' />
      </section>
    </div>
  )
}
