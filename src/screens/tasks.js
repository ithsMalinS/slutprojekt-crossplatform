
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/header'
import TaskItem from '../components/taskItem'
import TaskDetail from '../components/TaskDetail'
import {MyContext} from '../storage/context'

  
  export default function Tasks(props) {    
    const [activeTask, setActiveTask] = useState(null)

    const { user } = useContext(MyContext)
    const { task } = useContext(MyContext)
    const {getTask} = useContext(MyContext)

    const run = async () => {
     await getTask()
     }
  
    useEffect(() =>{ 
      run()      
    }, [user])

    
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {setActiveTask(item)}}>
      <TaskItem task={item}/>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <Text style={styles.heading}>Your tasks</Text> 
      { task && <FlatList
        keyExtractor={item => String(item.id)}
        data={task}
        renderItem={renderItem}
      /> }
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