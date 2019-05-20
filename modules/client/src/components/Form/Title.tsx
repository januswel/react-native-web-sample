import * as React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import Item from './Item'

const styles = StyleSheet.create({
  input: {
    width: 240,
    height: 26,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 2,
  },
})

interface Props {
  value: string
  onChangeText: (newValue: string) => void
  testID?: string
}

export default (props: Props) => (
  <Item label="title">
    <TextInput style={styles.input} {...props} />
  </Item>
)
