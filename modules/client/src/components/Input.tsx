import * as React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import InputItem from './InputItem'
import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 300,
  },
  input: {
    width: 240,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 2,
  },
  inputTitle: {
    height: 26,
  },
  inputDetail: {
    height: 58,
  },
})

const useTextInput = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue)

  function handleChange(newValue: string) {
    setValue(newValue)
  }

  return {
    value,
    onChangeText: handleChange,
  }
}

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
      <InputItem label="title">
        <TextInput style={[styles.input, styles.inputTitle]} {...title} />
      </InputItem>
      <InputItem label="detail">
        <TextInput style={[styles.input, styles.inputDetail]} multiline {...detail} />
      </InputItem>
      <Button
        label="add"
        onPress={() => {
          props.actions.addSync({ title: title.value, detail: detail.value })
        }}
      />
    </View>
  )
}
