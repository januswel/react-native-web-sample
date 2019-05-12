/* eslint no-magic-numbers: off */

import * as Todo from './todo'

describe('Todo', () => {
  describe('factory', () => {
    it('returns Todo instances', () => {
      const todo = Todo.factory({
        id: 1,
        title: 'foo',
        detail: 'bar',
        createdAt: '2019-05-12T23:19:00.000Z',
        updatedAt: '2019-05-12T23:19:00.000Z',
      })
      expect(todo.id).toBe(1)
      expect(todo.title).toBe('foo')
      expect(todo.detail).toBe('bar')
      expect(todo.createdAt).toBe('2019-05-12T23:19:00.000Z')
      expect(todo.updatedAt).toBe('2019-05-12T23:19:00.000Z')
    })
  })
  describe('create', () => {
    it('returns Todo instances', () => {
      const timeExpected = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/u

      const todo = Todo.create({ title: 'try RNW', detail: 'implement app with react-native-web' })

      expect(todo.id).toBe(1)
      expect(todo.title).toBe('try RNW')
      expect(todo.detail).toBe('implement app with react-native-web')
      expect(todo.createdAt).toEqual(expect.stringMatching(timeExpected))
      expect(() => new Date(todo.createdAt)).not.toThrow()
      expect(todo.updatedAt).toEqual(expect.stringMatching(timeExpected))
      expect(() => new Date(todo.updatedAt)).not.toThrow()
    })
  })

  describe('change', () => {
    it('returns Todo instances that values are changed to specified', async () => {
      const todo = Todo.create({ title: 'abcde', detail: '' })
      expect(todo.title).toBe('abcde')

      await setTimeout(() => {
        const changed = Todo.change(todo, {
          title: 'changed',
          detail: 'changed',
        })
        expect(changed.title).toBe('changed')
        expect(changed.detail).toBe('changed')
        expect(changed.createdAt).toBe(todo.createdAt)
        expect(changed.updatedAt).not.toBe(todo.updatedAt)
      }, 0)
    })
  })

  describe('changeTitle', () => {
    it('returns Todo instances that title is changed to specified', async () => {
      const todo = Todo.create({ title: 'abcde', detail: '' })
      expect(todo.title).toBe('abcde')

      await setTimeout(() => {
        const changed = Todo.changeTitle(todo, 'AbCdE')
        expect(changed.title).toBe('AbCdE')
        expect(changed.detail).toBe('')
        expect(changed.createdAt).toBe(todo.createdAt)
        expect(changed.updatedAt).not.toBe(todo.updatedAt)
      }, 0)
    })
  })

  describe('changeContent', () => {
    it('returns Todo instances that detail is changed to specified', async () => {
      const todo = Todo.create({ title: '', detail: 'this is sample' })
      expect(todo.detail).toBe('this is sample')

      await setTimeout(() => {
        const changed = Todo.changeContent(todo, 'changed')
        expect(changed.title).toBe('')
        expect(changed.detail).toBe('changed')
        expect(changed.createdAt).toBe(todo.createdAt)
        expect(changed.updatedAt).not.toBe(todo.updatedAt)
      }, 0)
    })
  })
})
