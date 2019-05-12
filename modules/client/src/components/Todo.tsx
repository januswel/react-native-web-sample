import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import EditForm, { Actions as EditFormActions } from './Form/Edit'

const styles = StyleSheet.create({
  container: {
    margin: 4,
    width: 320,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    width: 24,
    flex: 1,
  },
  properties: {
    width: 296,
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

type Actions = EditFormActions & {
  removeSync: (id: number) => void
}
export interface Props {
  id: number
  title: string
  detail: string
  updatedAt: string
  actions: Actions
}

export default (props: Props) => {
  const [isEditing, setIsEditing] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            setIsEditing(true)
          }}
        >
          <Text>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.actions.removeSync(props.id)
          }}
        >
          <Text>❌</Text>
        </TouchableOpacity>
      </View>
      {isEditing ? (
        <EditForm {...props} actions={{ ...props.actions, setIsEditing }} />
      ) : (
        <View style={styles.properties}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.detail}>{props.detail}</Text>
          <Text style={styles.updatedAt}>{props.updatedAt}</Text>
        </View>
      )}
    </View>
  )
}
