//import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {MyContext} from '../storage/context'
import Messages from '../components/messages'
import TaskInfo from '../components/taskInfo'
import TaskDone from '../components/checkbox'
import TaskImage from '../components/taskImage'



export default function TaskDetail(props) {   
  
  const [task, setTask] = useState([])
  const { getTaskById, currentTask } = useContext(MyContext)

  const run = async () => {
    // const task = await getTaskById()
    //console.log(user.data.user);
    setTask(currentTask)  
   }

  useEffect(() =>{ 
    run()
    // getMe().then((user)=> setUser(user))
    //getMe().then(setUser)
    
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <TaskInfo task={task} />
      <Messages/>
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