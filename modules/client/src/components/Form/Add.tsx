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
})

interface Todo {
  title: string
  detail: string
}
export interface Actions {
  addSync: (values: Todo) => void
}
interface Props {
  actions: Actions
}

export default (props: Props) => {
  const title = useTextInput('')
  const detail = useTextInput('')

  return (
    <View style={styles.container}>
      <Title {...title} testID="input-title" />
      <Detail {...detail} testID="input-detail" />
      <Button
        label="add"
        disabled={title.value.length === 0}
        onPress={() => {
          props.actions.addSync({ title: title.value, detail: detail.value })
          title.onChangeText('')
          detail.onChangeText('')
        }}
        testID="add-button"
      />
    </View>
  )
}
