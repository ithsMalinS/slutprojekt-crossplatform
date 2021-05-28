//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from '../components/taskItem'

export default function Tasks(props) {    



  return (
    <View style={styles.container}>
      <Text>All the tasks!</Text>
      <TaskItem navigation={props.navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});