import * as Todo from './todo'

export type Entity = Array<Todo.Entity>
type Seeds = Array<Todo.Values>

export const factory = (seeds: Seeds) => seeds.map(seed => Todo.factory(seed.title, seed.content))
export const add = (todos: Entity, todo: Todo.Entity) => {
  if (0 < todos.filter(item => item.id === todo.id).length) {
    throw new Error(`id ${todo.id} todo is already exists`)
  }
  return [...todos, todo]
}
export const remove = (todos: Entity, id: number) => todos.filter(todo => todo.id !== id)
export const update = (todos: Entity, id: number, values: Todo.Values) => {
  const targetIndex = todos.findIndex(item => item.id === id)
  if (targetIndex == -1) {
    throw new Error(`todo with specified id ${id} is not found`)
  }
  return todos.map((item, index) => {
    if (index === targetIndex) {
      return Todo.change(item, values)
    }
    return item
  })
}