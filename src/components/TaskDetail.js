import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Messages from './messages'


export default function TaskDetail(props) {    

   

  return (
    <View style={styles.container}>
        <View style={styles.taskContainer}>
          <TouchableOpacity style={styles.close} onPress={props.closeTask}>
              <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          
          <Text style={styles.heading}>Task details</Text>
          <Text>Task ID: {props.task.id}</Text>
          <Text>Description: {props.task.description}</Text>
          <Messages task={props.task.id}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  close:{
      top: -30,
      right: -10,
      alignSelf: 'flex-end'
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
    // backgroundColor: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 60
  },
  taskContainer:{
    backgroundColor: 'white',
    flex: 1,
    padding: 40,


  },
  heading:{
fontSize: 30,
  }
});