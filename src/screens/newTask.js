import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskForm from '../components/taskForm'
import Header from '../components/header'

export default function NewTask(props) {    

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
     
      <TaskForm />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#869f9f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});