import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

import NetworkIndicator from './NetworkIndicator'
import ErrorIndicator, { Actions as ErrorActions } from './ErrorIndicator'
import Todos, { Props as TodosProps } from './Todos'
import Input, { Actions as InputActions } from './Input'

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

export type Actions =
  | ErrorActions
  | InputActions
  | {
      getSync: () => void
    }
export interface Props {
  error: Error | null
  isCommunicating: boolean
  todos: TodosProps
  actions: Actions
}
export default (props: Props) => {
  console.log(props)
  React.useEffect(() => {
    props.actions.getSync()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ErrorIndicator {...props} />
      {props.isCommunicating ? <NetworkIndicator /> : null}
      <Text style={styles.title}>Todo App</Text>
      <Input actions={props.actions} />
      <Todos todos={props.todos} />
    </SafeAreaView>
  )
}
