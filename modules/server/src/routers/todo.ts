import * as Express from 'express'
import { Todo, Todos } from '@januswel/domain'

import CONSTANTS from '../constants'

const {
  DEFAULTS,
  HTTP: { STATUS_CODE },
} = CONSTANTS

const router = Express.Router()

let todos = Todos.factory([])

router.post('/', (req: Express.Request, res: Express.Response) => {
  const { title, detail } = req.body
  const todo = Todo.factory(title, detail)
  todos = Todos.add(todos, todo)
  res.status(STATUS_CODE.CREATED).json(todo)
})

const ZERO_ORIGIN_OFFSET = 1
const calcurateRange = (page: number, n: number) => {
  const begin = (page - ZERO_ORIGIN_OFFSET) * n
  const end = page * n - ZERO_ORIGIN_OFFSET

  return {
    begin,
    end,
  }
}

router.get('/', (req: Express.Request, res: Express.Response) => {
  const page = req.query.page || DEFAULTS.INITIAL_PAGE
  const n = req.query.n || DEFAULTS.NUMOF_ITEMS_PER_PAGE

  const { begin, end } = calcurateRange(page, n)
  const result = Todos.slice(todos, begin, end)

  if (result.length === 0) {
    res.sendStatus(STATUS_CODE.NOT_FOUND)
    return
  }

  res.status(STATUS_CODE.OK).json(result)
})

router.get('/:id', (req: Express.Request, res: Express.Response) => {
  const id = parseInt(req.params.id, 10)

  try {
    const result = Todos.get(todos, id)
    res.status(STATUS_CODE.OK).json(result)
  } catch (e) {
    res.sendStatus(STATUS_CODE.NOT_FOUND)
  }
})

router.patch('/:id', (req: Express.Request, res: Express.Response) => {
  const id = parseInt(req.params.id, 10)
  const { title, detail } = req.body

  try {
    todos = Todos.update(todos, id, { title, detail })
    res.status(STATUS_CODE.OK).json(Todos.get(todos, id))
  } catch (e) {
    res.sendStatus(STATUS_CODE.BAD_REQUEST)
  }
})

router.delete('/:id', (req: Express.Request, res: Express.Response) => {
  const id = parseInt(req.params.id, 10)
  todos = Todos.remove(todos, id)

  res.sendStatus(STATUS_CODE.NO_CONTENT)
})

export default router
