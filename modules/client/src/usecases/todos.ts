import { Dispatch } from 'redux'
import { Todo } from '@januswel/domain'

import { Action, add, remove, update } from '../modules/todos'
import { receiveResponse, sendRequest } from '../modules/network'
import { setError } from '../modules/error'

const sync = (dispatch: Dispatch, url: string, method: string, action: Action) => {
  dispatch(sendRequest())
  dispatch(action)
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(action),
  })
    .then(response => {
      if (!response.ok) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
    })
    .catch(error => {
      dispatch(setError(error))
    })
    .finally(() => {
      dispatch(receiveResponse())
    })
}

const ENTRY_POINT = 'http://localhost:8080/todo'

export const addSync = (todo: Todo.Values) => (dispatch: Dispatch) => sync(dispatch, ENTRY_POINT, 'POST', add(todo))

export const updateSync = (id: number, todo: Todo.Values) => (dispatch: Dispatch) =>
  sync(dispatch, `${ENTRY_POINT}/${id}`, 'PATCH', update(id, todo))

export const removeSync = (id: number) => (dispatch: Dispatch) =>
  sync(dispatch, `${ENTRY_POINT}/${id}`, 'DELETE', remove(id))
