import { Todos } from '@januswel/domain'

const todos = Todos.factory([
  {
    title: 'use RNW',
    detail: 'setup react-native-web',
  },
  {
    title: 'build Todo app',
    detail: 'implement client',
  },
])

// temporary
// eslint-disable-next-line no-console
console.log(todos)
