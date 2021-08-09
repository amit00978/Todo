import React from "react"
import { View, ViewStyle } from "react-native"

const CONTAINER: ViewStyle = {
  flexDirection: "column",
}

const VerticalLayout = props => {
  const { children, style } = props
  return <View style={{ ...CONTAINER, ...style }} {...props}>{children}</View>
}

export { VerticalLayout }
