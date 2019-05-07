import * as Todo from './todo'

export type Entity = Array<Todo.Entity>
type Seeds = Array<Todo.Values>

export const factory = (seeds: Seeds): Entity => seeds.map(seed => Todo.factory(seed.title, seed.detail))
export const add = (todos: Entity, todo: Todo.Entity): Entity => {
  if (0 < todos.filter(item => item.id === todo.id).length) {
    throw new Error(`id ${todo.id} is already exists`)
  }
  return [...todos, todo]
}
export const slice = (todos: Entity, begin: number, end: number): Entity => todos.slice(begin, end)
export const get = (todos: Entity, id: number): Todo.Entity => {
  const result = todos.find(todo => todo.id === id)
  if (result == null) {
    throw new Error(`id ${id} is not found`)
  }
  return result
}
export const remove = (todos: Entity, id: number): Entity => todos.filter(todo => todo.id !== id)

const NOT_FOUND = -1
export const update = (todos: Entity, id: number, values: Todo.Values): Entity => {
  const targetIndex = todos.findIndex(item => item.id === id)
  if (targetIndex === NOT_FOUND) {
    throw new Error(`todo with specified id ${id} is not found`)
  }
  return todos.map((item, index) => {
    if (index === targetIndex) {
      return Todo.change(item, values)
    }
    return item
  })
}
