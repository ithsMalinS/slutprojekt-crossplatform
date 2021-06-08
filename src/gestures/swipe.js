import React from "react"
import { PanResponder, View } from "react-native"

const swipeable = (props) => {
  const panResponder = PanResponder.create({
    onStartShouldSetResponder: (event, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
      console.log(gestureState)
    },
  })

  return <View {...panResponder.panHandlers}>{props.children}</View>
}

export default swipeable
