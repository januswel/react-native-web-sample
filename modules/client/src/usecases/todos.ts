import { Dispatch } from 'redux'
import { Todo, Todos } from '@januswel/domain'

import { Action, add, remove, setTodos, update } from '../modules/todos'
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
    body: JSON.stringify(action.payload),
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

export const getSync = () => (dispatch: Dispatch) => {
  dispatch(sendRequest())
  return fetch(ENTRY_POINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then(response => {
      if (!response.ok) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
      response.json().then((todos: Todos.Entity) => {
        dispatch(setTodos(todos))
      })
    })
    .catch(error => {
      dispatch(setError(error))
    })
    .finally(() => {
      dispatch(receiveResponse())
    })
}

export const addSync = (todo: Todo.Values) => (dispatch: Dispatch) => {
  dispatch(sendRequest())
  return fetch(ENTRY_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(todo),
  })
    .then(response => {
      if (!response.ok) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
      response.json().then((entity: Todo.Entity) => {
        dispatch(add(entity))
      })
    })
    .catch(error => {
      dispatch(setError(error))
    })
    .finally(() => {
      dispatch(receiveResponse())
    })
}

export const updateSync = (id: number, todo: Todo.Values) => (dispatch: Dispatch) =>
  sync(dispatch, `${ENTRY_POINT}/${id}`, 'PATCH', update(id, todo))

export const removeSync = (id: number) => (dispatch: Dispatch) => {
  dispatch(sendRequest())
  return fetch(`${ENTRY_POINT}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then(response => {
      if (!response.ok) {
        response.text().then(text => {
          dispatch(setError(new Error(text)))
        })
      }
      dispatch(remove(id))
    })
    .catch(error => {
      dispatch(setError(error))
    })
    .finally(() => {
      dispatch(receiveResponse())
    })
}
