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

export type Actions = EditFormActions & {
  removeSync: (id: number) => void
}
export interface State {
  id: number
  title: string
  detail: string
  updatedAt: string
}
interface Props {
  todo: State
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
            props.actions.removeSync(props.todo.id)
          }}
        >
          <Text>❌</Text>
        </TouchableOpacity>
      </View>
      {isEditing ? (
        <EditForm {...props} setIsEditing={setIsEditing} />
      ) : (
        <View style={styles.properties}>
          <Text style={styles.title}>{props.todo.title}</Text>
          <Text style={styles.detail}>{props.todo.detail}</Text>
          <Text style={styles.updatedAt}>{props.todo.updatedAt}</Text>
        </View>
      )}
    </View>
  )
}
