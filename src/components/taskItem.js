//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TaskItem(props) {   

  return (
    <View style={styles.container}>
      <Text style={styles.taskId}>Task ID: {props.id}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
    color: 'white',
    marginTop: 30,
    padding: 10,
    paddingHorizontal: 90,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskId: {
    fontSize: 15,
    color: 'white'
  },
  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  }
});