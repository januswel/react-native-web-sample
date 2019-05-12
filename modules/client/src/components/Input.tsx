import * as React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import InputItem from './InputItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default () => {
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
    </View>
  )
}
