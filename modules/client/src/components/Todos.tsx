import * as React from 'react'
import { FlatList } from 'react-native'

import Todo, { Props as TodoProps } from './Todo'

export interface Props {
  todos: Array<TodoProps>
}

const DIGIT = 10

export default (props: Props) => (
  <FlatList
    data={props.todos}
    renderItem={({ item }) => <Todo {...item} />}
    keyExtractor={item => item.id.toString(DIGIT)}
  />
)
