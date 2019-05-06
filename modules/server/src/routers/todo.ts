import * as Express from 'express'
import { Todo } from '@januswel/domain'

const router = Express.Router()

const todos = []

router.post('/', (req: Express.Request, res: Express.Response) => {
  console.log(req.body)
  const { title, detail } = req.body
  const result = Todo.factory(title, detail)
  todos.push(result)
  res.status(201).json(result)
})

router.get('/', (_: Express.Request, res: Express.Response) => {
  // TODO
  res.sendStatus(200)
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
