import { Todos } from 'rnws-domain'

const todos = Todos.factory([
  {
    title: 'use RNW',
    content: 'setup react-native-web',
  },
  {
    title: 'build Todo app',
    content: 'implement client',
  },
])

console.log(todos)
