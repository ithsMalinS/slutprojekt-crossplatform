import React from "react"
import { PanResponder, View } from "react-native"

const swipeable = props => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onPanResponderRelease: (event, gestureState) => {
      const {dx,dy} = gestureState
      console.log(gestureState);
        if( dx > 150 && dy < 80 ){
      props.swipeRight()
    }else if( dx < -150 && dy < 80){
      props.swipeLeft()
    }
    else if( dy < -200 && dx < 80){
      props.swipeUp()
    } else if( dy < 200 && dx < 80){
      props.swipeDown()
    }
    },
  })

  return (
     <View {...panResponder.panHandlers}>
       {props.children}
       </View>  
  )
}

export default swipeable
