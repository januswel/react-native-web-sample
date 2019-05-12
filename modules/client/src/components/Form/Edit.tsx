import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import useTextInput from '../../utils/use-text-input'
import Title from './Title'
import Detail from './Detail'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 300,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

interface Todo {
  title: string
  detail: string
}
export interface Actions {
  updateSync: (id: number, values: Todo) => Promise<any>
  setIsEditing: (newValue: boolean) => void
}
interface Props {
  id: number
  title: string
  detail: string
  actions: Actions
}

export default (props: Props) => {
  const title = useTextInput(props.title)
  const detail = useTextInput(props.detail)

  return (
    <View style={styles.container}>
      <Title {...title} />
      <Detail {...detail} />
      <View style={styles.buttons}>
        <Button
          label="modify"
          onPress={() => {
            props.actions.updateSync(props.id, { title: title.value, detail: detail.value })
            props.actions.setIsEditing(false)
          }}
        />
        <Button
          label="cancel"
          onPress={() => {
            props.actions.setIsEditing(false)
          }}
        />
      </View>
    </View>
  )
}
