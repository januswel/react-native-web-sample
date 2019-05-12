import { useState } from 'react'

export default (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  function handleChange(newValue: string) {
    setValue(newValue)
  }

  return {
    value,
    onChangeText: handleChange,
  }
}
