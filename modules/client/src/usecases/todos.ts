import { Dispatch } from 'redux'
import { Todo, Todos } from '@januswel/domain'

import { add, remove, set, update } from '../modules/todos'
import { receiveResponse, sendRequest } from '../modules/network'
import { setError } from '../modules/error'

const ENTRY_POINT = 'http://localhost:8080/todo'

interface FetchParameters {
  method: string
  headers: {
    [header: string]: string
  }
  body?: string
}
interface SyncParameters {
  url: string
  method: string
  dispatch: Dispatch
  body?: Object
  didReceiveResposne: (response: Response) => void
}

const sync = ({ url, method, dispatch, body, didReceiveResposne }: SyncParameters) => {
  dispatch(sendRequest())
  const parameters: FetchParameters = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }
  if (body != null) {
    parameters.body = JSON.stringify(body)
  }

  return fetch(url, parameters)
    .then(response => {
      if (didReceiveResposne != null) {
        didReceiveResposne(response)
      }
    })
    .catch(error => {
      dispatch(setError(error))
    })
    .finally(() => {
      dispatch(receiveResponse())
    })
}

const NOT_FOUND = 404
export const getSync = () => (dispatch: Dispatch) =>
  sync({
    url: ENTRY_POINT,
    method: 'GET',
    dispatch,
    didReceiveResposne: (response: Response) => {
      if (!response.ok && response.status !== NOT_FOUND) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
      response.json().then((todos: Todos.Entity) => {
        dispatch(set(todos))
      })
    },
  })

export const addSync = (todo: Todo.Values) => (dispatch: Dispatch) =>
  sync({
    url: ENTRY_POINT,
    method: 'POST',
    dispatch,
    body: todo,
    didReceiveResposne: (response: Response) => {
      if (!response.ok) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
      response.json().then((entity: Todo.Entity) => {
        dispatch(add(entity))
      })
    },
  })

export const updateSync = (id: number, todo: Todo.Values) => (dispatch: Dispatch) =>
  sync({
    url: `${ENTRY_POINT}/${id}`,
    method: 'PATCH',
    dispatch,
    body: todo,
    didReceiveResposne: (response: Response) => {
      if (!response.ok) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
      response.json().then(entity => {
        dispatch(update(id, entity))
      })
    },
  })

export const removeSync = (id: number) => (dispatch: Dispatch) =>
  sync({
    url: `${ENTRY_POINT}/${id}`,
    method: 'DELETE',
    dispatch,
    didReceiveResposne: (response: Response) => {
      if (!response.ok) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
      dispatch(remove(id))
    },
  })
