import * as React from 'react'
import { FlatList } from 'react-native'

import Todo, { Actions as TodoActions, Props as TodoProps } from './Todo'

export type Actions = TodoActions
export interface Props {
  todos: Array<TodoProps>
  actions: Actions
}

const DIGIT = 10

export default (props: Props) => (
  <FlatList
    data={props.todos}
    renderItem={({ item }) => <Todo {...item} actions={props.actions} />}
    keyExtractor={item => item.id.toString(DIGIT)}
  />
)
