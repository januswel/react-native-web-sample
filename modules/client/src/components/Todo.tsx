import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface Props {
  id: number
  title: string
  detail: string
  updatedAt: string
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detail: {
    marginLeft: 24,
  },
  updatedAt: {
    textAlign: 'right',
    fontSize: 12,
  },
})

export default (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.detail}>{props.detail}</Text>
    <Text style={styles.updatedAt}>{props.updatedAt}</Text>
  </View>
)
