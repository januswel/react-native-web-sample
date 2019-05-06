import * as Todo from './todo'
import * as Todos from './todos'

describe('Todos', () => {
  describe('factory', () => {
    it('returns array of Todo', () => {
      const todos = Todos.factory([
        {
          title: 'setup Jest',
          content: 'install jest, ts-jest, @type/jest',
        },
        {
          title: 'write tests',
          content: 'see Jest documents',
        },
      ])
      expect(todos.length).toBe(2)
      expect(todos[0].title).toBe('setup Jest')
      expect(todos[1].content).toBe('see Jest documents')
    })
  })
  describe('add', () => {
    it('returns array that has specified one in last', () => {
      const todos = Todos.factory([
        {
          title: '1',
          content: 'sample',
        },
        {
          title: '2',
          content: 'sample',
        },
      ])
      expect(todos.length).toBe(2)
      const added = Todos.add(todos, Todo.factory('3', 'sample'))
      expect(added.length).toBe(3)
    })
  })
  describe('remove', () => {
    it('returns array that todo with specified id is removed', () => {
      const todos = Todos.factory([
        {
          title: '1',
          content: 'sample',
        },
        {
          title: '2',
          content: 'sample',
        },
      ])
      expect(todos.length).toBe(2)
      const removed = Todos.remove(todos, todos[0].id)
      expect(removed.length).toBe(1)
    })
  })
  describe('update', () => {
    it('returns array that has changed attributes with specified values', () => {
      const todos = Todos.factory([
        {
          title: '1',
          content: 'sample',
        },
        {
          title: '2',
          content: 'sample',
        },
      ])
      expect(todos[0].title).toBe('1')
      const updated = Todos.update(todos, todos[0].id, {
        title: 'updated',
        content: todos[0].content,
      })
      expect(updated[0].title).toBe('updated')
      expect(updated[0].content).toBe('sample')
    })
  })
})