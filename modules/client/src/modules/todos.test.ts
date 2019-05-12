import { ADD, REMOVE, UPDATE, add, remove, update } from './todo'

describe('todo', () => {
  describe('add', () => {
    it('returns Action to tell "add a todo"', () => {
      const action = add({ title: 'foo', detail: 'bar' })
      expect(action).toEqual({
        type: ADD,
        payload: {
          todo: {
            title: 'foo',
            detail: 'bar',
          },
        },
      })
    })

    it('returns Action to tell "update the todo"', () => {
      const action = update(0, {
        title: 'foo',
        detail: 'bar',
      })
      expect(action).toEqual({
        type: UPDATE,
        payload: {
          id: 0,
          todo: {
            title: 'foo',
            detail: 'bar',
          },
        },
      })
    })

    it('returns Action to tell "remove the todo"', () => {
      const action = remove(0)
      expect(action).toEqual({
        type: REMOVE,
        payload: {
          id: 0,
        },
      })
    })
  })
})
