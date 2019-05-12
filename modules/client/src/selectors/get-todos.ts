import { createSelector } from 'reselect'
import { Todo, Todos } from '@januswel/domain'

import { AppState } from '../modules'

const getTodos = (state: AppState) => state.todos

const MILLESECONDS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60
const HOURS_PER_DAY = 24
const TWO = 2

const HOUR = MILLESECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR
const TWO_DAYS = HOUR * HOURS_PER_DAY * TWO

const MONTH_OFFSET = 1

const buildAgoString = (datetime: string) => {
  const updatedAt = new Date(datetime)
  const delta = new Date().getTime() - updatedAt.getTime()

  if (delta < TWO_DAYS) {
    return `${Math.ceil(delta / HOUR)} hours`
  }
  return `${updatedAt.getFullYear()}/${updatedAt.getMonth() + MONTH_OFFSET}/${updatedAt.getDate()}`
}

export default createSelector(
  [getTodos],
  (todos: Todos.Entity) =>
    todos.map((todo: Todo.Entity) => ({
      id: todo.id,
      title: todo.title,
      detail: todo.detail,
      updatedAt: buildAgoString(todo.updatedAt),
    })),
)
