import * as React from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 2,
    color: 'white',
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 24,
  },
})

type ErrorActions = {
  clearError: () => void
}
export type Actions = ErrorActions
export interface Props {
  error: Error | null
  actions: Actions
}
export default (props: Props) =>
  props.error != null ? (
    <Text
      style={styles.container}
      onPress={() => {
        props.actions.clearError()
      }}
    >
      {props.error.message}
    </Text>
  ) : null
