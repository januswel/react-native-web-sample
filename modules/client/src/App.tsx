import * as React from 'react'
import { Text, View } from 'react-native'
import { Todo } from '@januswel/domain'

const todo = Todo.factory('use RNW', 'setup react-native-web')

export default () => (
  <View>
    <Text>{todo.title}</Text>
    <Text>{todo.detail}</Text>
  </View>
)
