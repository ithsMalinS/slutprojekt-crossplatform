//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Messages from '../components/messages'
import TaskInfo from '../components/taskInfo'
import TaskDone from '../components/checkbox'
import TaskImage from '../components/taskImage'



export default function TaskDetail(props) {    

  return (
    <View style={styles.container}>
     
      <Text>Task Detail!</Text>
      <TaskDone/>
      <TaskImage/>
      <TaskInfo/>
      <Messages/>
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