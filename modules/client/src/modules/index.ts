import { combineReducers } from 'redux'

import todoReducer, { createInitialState as createTodoInitialState } from './todo'
import networkReducer, { createInitialState as createNetworkInitialState } from './network'
import errorReducer, { createInitialState as createErrorInitialState } from './error'

export type AppState = {
  readonly error: ReturnType<typeof createErrorInitialState>
  readonly todo: ReturnType<typeof createTodoInitialState>
  readonly network: ReturnType<typeof createNetworkInitialState>
}
export const createInitialState = (): AppState => ({
  error: createErrorInitialState(),
  todo: createTodoInitialState(),
  network: createNetworkInitialState(),
})

export default combineReducers<AppState>({
  error: errorReducer,
  todo: todoReducer,
  network: networkReducer,
})
