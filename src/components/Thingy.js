import React from 'react';
import { StyleSheet, View, SafeAreaView, Animated } from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler'

const styles  = StyleSheet.create({
  box:{
    width: 300,
    height: 300,
    margin: 15
  }
})



const Thingy = props => {

  const translateX = new Animated.Value(0)
  const translateY = new Animated.Value(0)
  
  const onGestureEvent = new Animated.Event([
    {nativeEvent:{
      translationX: translateX,
      translationY: translateY
    }}
  ], {useNativeDriver: true})


  const handleStateChange = event => {
    if(event.nativeEvent.oldState == State.ACTIVE){

      if(event.nativeEvent.velocityY > 1000){
        Animated.timing(translateY, {toValue: 2000, duration: 300, useNativeDriver: true})
        .start(() => props.done())
      }else{
        Animated.spring(translateX, {toValue:0, duration: 300, useNativeDriver:true}).start()
        Animated.spring(translateY, {toValue:0, duration: 300, useNativeDriver:true}).start()
      }
    }}

return(
  <PanGestureHandler
    onGestureEvent = {onGestureEvent}
    onHandlerStateChange={ handleStateChange}
  >
    <Animated.View style={[
      styles.box,
      {transform:[{translateX: translateX}, {translateY}]},
       {backgroundColor:props.color}]}>

    </Animated.View>
  </PanGestureHandler>
)

}

export default Thingy