import createReducer from './create-reducer'

export const SEND_REQUEST = 'network/send-request' as const
export const RECEIVE_RESPONSE = 'network/receive-request' as const

type Types = typeof SEND_REQUEST | typeof RECEIVE_RESPONSE

export type State = { readonly numofWaitings: number }
export const createInitialState = (): State => ({
  numofWaitings: 0,
})

export const sendRequest = () => ({
  type: SEND_REQUEST,
})
export const receiveResponse = () => ({
  type: RECEIVE_RESPONSE,
})

export type Action = ReturnType<typeof sendRequest> | ReturnType<typeof receiveResponse>

const ZERO_ORIGIN_OFFSET = 1
export default createReducer<State, Types, Action>(createInitialState(), {
  [SEND_REQUEST]: state => ({
    numofWaitings: state.numofWaitings + ZERO_ORIGIN_OFFSET,
  }),
  [RECEIVE_RESPONSE]: state => ({
    numofWaitings: state.numofWaitings - ZERO_ORIGIN_OFFSET,
  }),
})
