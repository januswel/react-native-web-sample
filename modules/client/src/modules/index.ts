import { combineReducers } from 'redux'

import todoReducer, { createInitialState as createTodoInitialState } from './todos'
import networkReducer, { createInitialState as createNetworkInitialState } from './network'
import errorReducer, { createInitialState as createErrorInitialState } from './error'

export type AppState = {
  readonly error: ReturnType<typeof createErrorInitialState>
  readonly todos: ReturnType<typeof createTodoInitialState>
  readonly network: ReturnType<typeof createNetworkInitialState>
}
export const createInitialState = (): AppState => ({
  error: createErrorInitialState(),
  todos: createTodoInitialState(),
  network: createNetworkInitialState(),
})

export default combineReducers<AppState>({
  error: errorReducer,
  todos: todoReducer,
  network: networkReducer,
})
