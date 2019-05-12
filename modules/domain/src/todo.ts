export interface Entity {
  readonly id: number
  readonly title: string
  readonly detail: string
  readonly createdAt: string
  readonly updatedAt: string
}

export interface Values {
  readonly title: string
  readonly detail: string
}

let number = 0

export const factory = (todo: Entity): Entity => todo

export const create = (todo: Values): Entity => {
  const now = new Date()
  return {
    id: ++number,
    title: todo.title,
    detail: todo.detail,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  }
}

export const change = (todo: Entity, values: Values): Entity => {
  const now = new Date()
  return {
    ...todo,
    ...values,
    updatedAt: now.toISOString(),
  }
}

export const changeTitle = (todo: Entity, title: string): Entity => {
  const now = new Date()
  return {
    ...todo,
    title,
    updatedAt: now.toISOString(),
  }
}

export const changeContent = (todo: Entity, detail: string): Entity => {
  const now = new Date()
  return {
    ...todo,
    detail,
    updatedAt: now.toISOString(),
  }
}
