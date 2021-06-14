import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import Messages from './messages'


export default function TaskDetail(props) {    


  return (
    <View style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.taskContainer}>
          <TouchableOpacity style={styles.close} onPress={props.closeTask}>
              <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          
          <Text style={styles.heading}>Task ID: {props.task.id}</Text>
          {/* <Text>Task ID: {props.task.id}</Text> */}
          <Text style={styles.description}>Description: {props.task.description}</Text>
          <Messages task={props.task.id}/>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  close:{
      top: -30,
      right: -30,
      alignSelf: 'flex-end',
      borderRadius: 50,
      backgroundColor: 'gray',
      padding: 7,
      paddingHorizontal: 15
  },
  closeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
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
    padding: 50,
  },
  taskContainer:{
    backgroundColor: 'white',
    padding: 40,
    position: 'absolute',
    height: '105%',
    left: 30,
    right: 30,
    top: 30,
    bottom: 30,
    borderRadius: 30,
    overflow: 'scroll',
    flex: 1,
  },
  heading:{
    fontSize: 30,
  },
  description: {
    marginBottom: 20,
  },
});