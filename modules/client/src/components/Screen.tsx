import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import NetworkIndicator from './NetworkIndicator'
import ErrorIndicator, { Actions as ErrorActions } from './ErrorIndicator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export type Actions = ErrorActions
export interface Props {
  error: Error | null
  isCommunicating: boolean
  actions: Actions
}
export default (props: Props) => (
  <SafeAreaView style={styles.container}>
    {props.isCommunicating ? <NetworkIndicator /> : null}
    <ErrorIndicator {...props} />
  </SafeAreaView>
)
