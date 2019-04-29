export interface Entity {
  readonly id: number
  readonly title: string
  readonly content: string
}

export interface Values {
  readonly title: string
  readonly content: string
}

let number = 0

export const factory = (title: string, content: string): Entity => ({
  id: ++number,
  title,
  content,
})

export const change = (todo: Entity, values: Values): Entity => ({
  ...todo,
  ...values,
})

export const changeTitle = (todo: Entity, title: string): Entity => ({
  ...todo,
  title,
})

export const changeContent = (todo: Entity, content: string): Entity => ({
  ...todo,
  content,
})
