import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
})

interface Props {
  label: string
  children: React.ReactChild
}

export default (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{props.label}</Text>
    {props.children}
  </View>
)
