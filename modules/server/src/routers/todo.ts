import * as Express from 'express'
import { Todo, Todos } from '@januswel/domain'

const router = Express.Router()

const todos = Todos.factory([])

router.post('/', (req: Express.Request, res: Express.Response) => {
  const { title, detail } = req.body
  const result = Todo.factory(title, detail)
  todos.push(result)
  res.status(201).json(result)
})

router.get('/', (req: Express.Request, res: Express.Response) => {
  const page = req.query.page || 1
  const n = req.query.n || 10

  const begin = (page - 1) * n
  const end = page * n - 1
  const result = todos.slice(begin, end)

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

router.delete('/:id', (_: Express.Request, res: Express.Response) => {
  // TODO
  res.sendStatus(200)
})

export default router
