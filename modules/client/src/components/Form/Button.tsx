import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#2e6da4',
    backgroundColor: '#337ab7',
  },
  label: {
    textAlign: 'center',
    color: 'white',
  },
  negative: {
    borderColor: '#adadad',
    backgroundColor: 'gray',
  },
})

export interface Props {
  label: string
  negative?: boolean
  onPress: () => void
}

export default (props: Props) => {
  const containerStyle = props.negative ? [styles.container, styles.negative] : styles.container
  return (
    <TouchableOpacity style={containerStyle} onPress={props.onPress}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  )
}
