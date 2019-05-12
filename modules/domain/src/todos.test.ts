/* eslint no-magic-numbers: off */

import * as Todo from './todo'
import * as Todos from './todos'

const TODOS = Todos.factory([
  {
    id: 1,
    title: '1',
    detail: 'sample',
    createdAt: '2019-05-12T23:19:00.000Z',
    updatedAt: '2019-05-12T23:19:00.000Z',
  },
  {
    id: 2,
    title: '2',
    detail: 'sample',
    createdAt: '2019-05-12T23:19:00.000Z',
    updatedAt: '2019-05-12T23:19:00.000Z',
  },
  {
    id: 3,
    title: '3',
    detail: 'sample',
    createdAt: '2019-05-12T23:19:00.000Z',
    updatedAt: '2019-05-12T23:19:00.000Z',
  },
])

describe('Todos', () => {
  describe('factory', () => {
    it('returns array of Todo', () => {
      const timeExpected = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/u

      expect(TODOS.length).toBe(3)

      const [actual] = TODOS
      expect(actual.title).toBe('1')
      expect(actual.detail).toBe('sample')
      expect(actual.createdAt).toEqual(expect.stringMatching(timeExpected))
      expect(() => new Date(actual.createdAt)).not.toThrow()
      expect(actual.updatedAt).toEqual(expect.stringMatching(timeExpected))
      expect(() => new Date(actual.updatedAt)).not.toThrow()
    })
  })

  describe('add', () => {
    it('returns array that has specified one in last', () => {
      expect(TODOS.length).toBe(3)
      const added = Todos.add(TODOS, Todo.create({ title: '4', detail: 'sample' }))
      expect(added.length).toBe(4)
    })
  })

  describe('slice', () => {
    it('returns an array of Todo that has specified range', () => {
      const one = Todos.slice(TODOS, 0, 1)
      expect(one.length).toBe(1)
      expect(one[0].title).toBe('1')

      const oneTwo = Todos.slice(TODOS, 0, 2)
      expect(oneTwo.length).toBe(2)
      expect(oneTwo[1].title).toBe('2')

      const two = Todos.slice(TODOS, 1, 2)
      expect(two.length).toBe(1)
      expect(two[0].title).toBe('2')

      const twoThree = Todos.slice(TODOS, 1, 3)
      expect(twoThree.length).toBe(2)
      expect(twoThree[1].title).toBe('3')
    })
  })

  describe('get', () => {
    it('returns specified Todo', () => {
      const todo = Todos.get(TODOS, 2)
      expect(todo.title).toBe('2')
    })
    it('throws error if specified id is not found', () => {
      expect(() => {
        Todos.get(TODOS, 5)
      }).toThrow()
      expect(() => {
        Todos.get(TODOS, -3)
      }).toThrow()
    })
  })

  describe('remove', () => {
    it('returns array that todo with specified id is removed', () => {
      expect(TODOS.length).toBe(3)
      const removed = Todos.remove(TODOS, TODOS[0].id)
      expect(removed.length).toBe(2)
    })
  })

  describe('update', () => {
    it('returns array that has changed attributes with specified values', () => {
      expect(TODOS[0].title).toBe('1')
      const updated = Todos.update(TODOS, TODOS[0].id, {
        title: 'updated',
        detail: TODOS[0].detail,
      })
      expect(updated[0].title).toBe('updated')
      expect(updated[0].detail).toBe('sample')
    })
    it('throws error if specified id is not found', () => {
      expect(() => {
        Todos.update(TODOS, 11, { title: 'this throw errors', detail: '' })
      }).toThrow()
      expect(() => {
        Todos.update(TODOS, -1, { title: 'this throw errors', detail: '' })
      }).toThrow()
    })
  })
})
