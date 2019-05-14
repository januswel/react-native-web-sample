import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
  disabled?: boolean
  onPress: () => void
}

export default (props: Props) =>
  props.disabled ? (
    <View style={[styles.container, styles.negative]}>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  ) : (
    <TouchableOpacity
      style={props.negative ? [styles.container, styles.negative] : styles.container}
      onPress={props.onPress}
    >
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  )
