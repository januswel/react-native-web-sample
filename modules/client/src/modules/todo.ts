import { Todo, Todos } from '@januswel/domain'

import createReducer from './create-reducer'

export const ADD = 'todo/add'
export const UPDATE = 'todo/update'
export const REMOVE = 'todo/remove'

type Types = typeof ADD | typeof UPDATE | typeof REMOVE

export const createInitialState = () =>
  Todos.factory([
    {
      title: 'sample todo',
      detail: 'this is sample',
    },
  ])
export type State = ReturnType<typeof createInitialState>

export const add = (todo: Todo.Values) => ({
  type: ADD as typeof ADD,
  payload: {
    todo,
  },
})

export const update = (id: number, todo: Todo.Values) => ({
  type: UPDATE as typeof UPDATE,
  payload: {
    id,
    todo,
  },
})

export const remove = (id: number) => ({
  type: REMOVE as typeof REMOVE,
  payload: {
    id,
  },
})

type AddAction = ReturnType<typeof add>
type UpdateAction = ReturnType<typeof update>
type RemoveAction = ReturnType<typeof remove>
export type Action = AddAction | UpdateAction | RemoveAction

export default createReducer<State, Types, Action>(createInitialState(), {
  [ADD]: (state, action: AddAction) => Todos.add(state, action.payload.todo),
  [UPDATE]: (state, action: UpdateAction) => Todos.update(state, action.payload.id, action.payload.todo),
  [REMOVE]: (state, action: RemoveAction) => Todos.remove(state, action.payload.id),
})
