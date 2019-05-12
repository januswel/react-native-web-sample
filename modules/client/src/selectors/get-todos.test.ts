import { Todo } from '@januswel/domain'
import getTodos from './get-todos'
import store from '../store'
import { add } from '../modules/todos'

describe('isWaiting', () => {
  it('returns a flag indicates if the device is waiting or not', () => {
    expect(getTodos(store.getState())).toEqual([])
    store.dispatch(add(Todo.create({ title: 'a', detail: 'b' })))
    expect(getTodos(store.getState())).toEqual([
      {
        id: 1,
        title: 'a',
        detail: 'b',
        updatedAt: 'now',
      },
    ])
  })
})
