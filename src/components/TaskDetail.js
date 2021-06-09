import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TaskDetail(props) {    

   

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={props.closeTask}>
            <Text style={styles.closeText} >X</Text>
        </TouchableOpacity>
        
      <Text>Task details!</Text>
      <Text>{props.task.id}</Text>
      <Text>{props.task.description}</Text>

    </View>
  );
}


const styles = StyleSheet.create({
  close:{
    position: 'absolute',
    right: 10,
    top: 40,
  },
  closeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'white',
    padding: 60
  }
});