import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

import NetworkIndicator from './NetworkIndicator'
import ErrorIndicator, { Actions as ErrorActions } from './ErrorIndicator'
import Todos, { Props as TodosProps } from './Todos'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})

export type Actions = ErrorActions
export interface Props {
  error: Error | null
  isCommunicating: boolean
  todos: TodosProps
  actions: Actions
}
export default (props: Props) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Todo App</Text>
    {props.isCommunicating ? <NetworkIndicator /> : null}
    <ErrorIndicator {...props} />
    <Todos todos={props.todos} />
  </SafeAreaView>
)
