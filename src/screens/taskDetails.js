//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';

import Messages from '../components/messages'
import TaskInfo from '../components/taskInfo'
import TaskDone from '../components/checkbox'
import TaskImage from '../components/taskImage'



export default function TaskDetail(props) {    

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView styles={{height: 600}}>
     
      {/* <Text>Task Detail!</Text>
      <TaskDone/>
      <TaskImage/>
      <TaskInfo/> */}
      <Messages/>
      </ScrollView>
    </SafeAreaView>
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