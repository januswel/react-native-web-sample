import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 16,
    backgroundColor: 'gray',
  },
  label: {
    textAlign: 'center',
    color: 'white',
  },
})

export interface Props {
  label: string
  onPress: () => void
}

export default (props: Props) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.label}>{props.label}</Text>
  </TouchableOpacity>
)
