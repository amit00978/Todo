import React from "react"
import Props from "prop-types"
import { Image as ImageObject } from "react-native"

const Image = props => {
  const { style, source, resizeMode } = props
  return <ImageObject resizeMode={resizeMode} source={source} style={style} />
}
Image.propTypes = {
  style: Props.object,
  resizeMode: Props.string,
}

export { Image }
