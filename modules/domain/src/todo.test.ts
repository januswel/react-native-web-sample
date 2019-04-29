import * as Todo from './todo'

describe('Todo', () => {
  describe('factory', () => {
    it('returns Todo instances', () => {
      const todo = Todo.factory('try RNW', 'implement app with react-native-web')
      expect(todo.id).toBe(1)
      expect(todo.title).toBe('try RNW')
      expect(todo.content).toBe('implement app with react-native-web')
    })
  })
  describe('change', () => {
    it('returns Todo instances that values are changed to specified', () => {
      const todo = Todo.factory('abcde', '')
      expect(todo.title).toBe('abcde')
      const changed = Todo.change(todo, {
        title: 'changed',
        content: 'changed',
      })
      expect(changed.title).toBe('changed')
      expect(changed.content).toBe('changed')
    })
  })
  describe('changeTitle', () => {
    it('returns Todo instances that title is changed to specified', () => {
      const todo = Todo.factory('abcde', '')
      expect(todo.title).toBe('abcde')
      const changed = Todo.changeTitle(todo, 'AbCdE')
      expect(changed.title).toBe('AbCdE')
    })
  })
  describe('changeContent', () => {
    it('returns Todo instances that content is changed to specified', () => {
      const todo = Todo.factory('', 'this is sample')
      expect(todo.content).toBe('this is sample')
      const changed = Todo.changeContent(todo, 'changed')
      expect(changed.content).toBe('changed')
    })
  })
})
