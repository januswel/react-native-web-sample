import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 4,
    width: 320,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    width: 24,
  },
  properties: {
    width: 296,
    height: 96,
    justifyContent: 'space-between',
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

export interface Actions {
  removeSync: (id: number) => void
}
export interface Props {
  id: number
  title: string
  detail: string
  updatedAt: string
  actions: Actions
}

export default (props: Props) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.removeButton}
      onPress={() => {
        props.actions.removeSync(props.id)
      }}
    >
      <Text>❌</Text>
    </TouchableOpacity>
    <View style={styles.properties}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.detail}>{props.detail}</Text>
      <Text style={styles.updatedAt}>{props.updatedAt}</Text>
    </View>
  </View>
)
