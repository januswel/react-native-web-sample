/* eslint no-magic-numbers: off */

import { ADD, REMOVE, SET, UPDATE, add, remove, set, update } from './todos'
import { Todo, Todos } from '@januswel/domain'

describe('todo', () => {
  describe('add', () => {
    it('returns Action to tell "set todos"', () => {
      const action = set(
        Todos.factory([Todo.create({ title: 'foo', detail: 'bar' }), Todo.create({ title: 'sample', detail: 'buz' })]),
      )
      expect(action.type).toBe(SET)
      expect(action.payload.todos.length).toBe(2)

      const [first] = action.payload.todos
      expect(first.id).toBe(1)
      expect(first.title).toBe('foo')
      expect(first.detail).toBe('bar')
      expect(first.createdAt).toBe(first.updatedAt)
    })

    it('returns Action to tell "add a todo"', () => {
      const action = add(Todo.create({ title: 'foo', detail: 'bar' }))
      expect(action.type).toBe(ADD)
      expect(action.payload.todo.id).toBe(3)
      expect(action.payload.todo.title).toBe('foo')
      expect(action.payload.todo.detail).toBe('bar')
      expect(action.payload.todo.createdAt).toBe(action.payload.todo.updatedAt)
    })

    it('returns Action to tell "update the todo"', () => {
      const action = update(
        4,
        Todo.create({
          title: 'foo',
          detail: 'bar',
        }),
      )
      expect(action.type).toBe(UPDATE)
      expect(action.payload.id).toBe(4)
      expect(action.payload.todo.id).toBe(4)
      expect(action.payload.todo.title).toBe('foo')
      expect(action.payload.todo.detail).toBe('bar')
      expect(action.payload.todo.createdAt).toBe(action.payload.todo.updatedAt)
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
