import * as React from 'react'
import { ActivityIndicator, ViewStyle } from 'react-native'

interface Props {
  style: ViewStyle
}

export default (props: Props) => <ActivityIndicator style={props.style} size="large" testID="network-indicator" />
