import * as React from 'react'
import { FlatList } from 'react-native'

import Todo, { Actions as TodoActions, State as TodoState } from './Todo'

export type Actions = TodoActions
export type State = Array<TodoState>
interface Props {
  todos: State
  actions: Actions
}

const DIGIT = 10

export default (props: Props) => (
  <FlatList
    data={props.todos}
    renderItem={({ item }) => <Todo todo={item} actions={props.actions} />}
    keyExtractor={item => item.id.toString(DIGIT)}
  />
)
