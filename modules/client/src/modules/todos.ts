import { Todo, Todos } from '@januswel/domain'

import createReducer from './create-reducer'

export const ADD = 'todo/add'
export const UPDATE = 'todo/update'
export const REMOVE = 'todo/remove'
export const SET = 'todo/set'

type Types = typeof ADD | typeof UPDATE | typeof REMOVE | typeof SET

export const createInitialState = () => Todos.factory([])
export type State = ReturnType<typeof createInitialState>

export const add = (todo: Todo.Entity) => ({
  type: ADD as typeof ADD,
  payload: {
    ...todo,
  },
})

export const update = (id: number, todo: Todo.Values) => ({
  type: UPDATE as typeof UPDATE,
  payload: {
    id,
    data: todo,
  },
})

export const remove = (id: number) => ({
  type: REMOVE as typeof REMOVE,
  payload: {
    id,
  },
})

export const setTodos = (todos: Todos.Entity) => ({
  type: SET as typeof SET,
  payload: {
    todos,
  },
})

type AddAction = ReturnType<typeof add>
type UpdateAction = ReturnType<typeof update>
type RemoveAction = ReturnType<typeof remove>
type SetAction = ReturnType<typeof setTodos>
export type Action = AddAction | UpdateAction | RemoveAction | SetAction

export default createReducer<State, Types, Action>(createInitialState(), {
  [ADD]: (state, action: AddAction) => Todos.add(state, action.payload),
  [UPDATE]: (state, action: UpdateAction) => Todos.update(state, action.payload.id, action.payload.data),
  [REMOVE]: (state, action: RemoveAction) => Todos.remove(state, action.payload.id),
  [SET]: (_state, action: SetAction) => Todos.factory(action.payload.todos),
})
