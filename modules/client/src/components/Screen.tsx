import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

import NetworkIndicator from './NetworkIndicator'
import ErrorIndicator, { Actions as ErrorActions } from './ErrorIndicator'
import Todos, { Actions as TodoActions, State as TodosState } from './Todos'
import AddForm, { Actions as AddFormActions } from './Form/Add'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  networkIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
})

export type Actions = ErrorActions &
  AddFormActions &
  TodoActions & {
    getSync: () => void
    updateSync: (id: number, todo: { title: string; detail: string }) => void
  }
export interface Props {
  error: Error | null
  isCommunicating: boolean
  todos: TodosState
  actions: Actions
}
export default (props: Props) => {
  React.useEffect(() => {
    props.actions.getSync()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ErrorIndicator {...props} />
      <Text style={styles.title}>Todo App</Text>
      <AddForm actions={props.actions} />
      <Todos todos={props.todos} actions={props.actions} />
      {props.isCommunicating ? <NetworkIndicator style={styles.networkIndicator} /> : null}
    </SafeAreaView>
  )
}
