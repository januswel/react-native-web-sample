import * as Express from 'express'
import { Todo, Todos } from '@januswel/domain'

const router = Express.Router()

let todos = Todos.factory([])

router.post('/', (req: Express.Request, res: Express.Response) => {
  const { title, detail } = req.body
  const todo = Todo.factory(title, detail)
  todos = Todos.add(todos, todo)
  res.status(201).json(todo)
})

const calcurateRange = (page: number, n: number) => {
  const begin = (page - 1) * n
  const end = page * n - 1

  return {
    begin,
    end,
  }
}

router.get('/', (req: Express.Request, res: Express.Response) => {
  const page = req.query.page || 1
  const n = req.query.n || 10

  const { begin, end } = calcurateRange(page, n)
  const result = Todos.slice(todos, begin, end)

  if (result.length === 0) {
    res.sendStatus(404)
  }

  res.status(200).json(result)
})

router.get('/:id', (_: Express.Request, res: Express.Response) => {
  // TODO
  res.sendStatus(200)
})

router.patch('/:id', (_: Express.Request, res: Express.Response) => {
  // TODO
  res.sendStatus(200)
})

router.delete('/:id', (req: Express.Request, res: Express.Response) => {
  const id = req.params.id

  if (Todos.has(todos, id)) {
    res.sendStatus(400)
  }

  todos = Todos.remove(todos, id)

  res.sendStatus(204)
})

export default router
