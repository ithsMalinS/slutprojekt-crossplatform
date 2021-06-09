//import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/header'
import TaskItem from '../components/taskItem'
import TaskDetail from '../components/TaskDetail'
import Button from '../components/button'
import {MyContext} from '../storage/context'
  
  export default function Tasks(props) {    
    const [task, setTask] = useState([])
    const [activeTask, setActiveTask] = useState(null)
    const {getTask} = useContext(MyContext)

    const run = async () => {
      const task = await getTask()
      setTask(task.data.tasks)  
     }
  
    useEffect(() =>{ 
      run()      
    },[])


     /* const handlePress = () => {
        props.navigation.navigate('Create task')
     } */

    
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {setActiveTask(item)}}>
      <TaskItem id={item.id} description={item.description}/>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      {/* <Button title='Create Task' onPress={handlePress} /> */}
      <Text style={styles.heading}>Your tasks</Text> 
      <FlatList
        keyExtractor={item => String(item.id)}
        data={task}
        renderItem={renderItem}
      />
      { activeTask && <TaskDetail task={activeTask} closeTask={() => setActiveTask(null)} /> }
      
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
  heading: {
    color: 'white',
    marginTop: 20,
    fontSize: 30,
    backgroundColor: 'orange',
    padding: 6,
    paddingHorizontal: 130,
    borderRadius: 5
  },
});