export interface Entity {
  readonly title: string
  readonly content: string
}

export const factory = (title: string, content: string): Entity => ({
  title,
  content,
})

export const changeTitle = (todo: Entity, title: string): Entity => ({
  ...todo,
  title,
})

export const changeContent = (todo: Entity, content: string): Entity => ({
  ...todo,
  content,
})
