//import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TaskItem from '../components/taskItem'
import Button from '../components/button'
import {MyContext} from '../storage/context'

// const DATA = [
//     {
//       id: 1,
//       description: 'Bygg en veranda',
//       imageFile: ''
//     },
//     {
//       id: 2,
//       description: 'Fixa taket',
//       imageFile: ''
//     },
//     {
//       id: 3,
//       description: 'Riv en vägg',
//       imageFile: ''
//     },
//   ]
  
  export default function Tasks(props) {    
    
    const [task, setTask] = useState([])
    const { getTask,setCurrentTask } = useContext(MyContext)


    const run = async () => {
      const task = await getTask()
      //console.log(user.data.user);
      setTask(task.data.tasks)  
     }
  
    useEffect(() =>{ 
      run()
      // getMe().then((user)=> setUser(user))
      //getMe().then(setUser)
      
    },[])


     const handlePress = () => {
        props.navigation.navigate('Create task')
     }

    const sendId = (task) => {
      setCurrentTask(task)
    }
    
  const renderItem = ({ item }) => (
    <TaskItem navigation={props.navigation} id={item.id} description={item.description}/>
  )

  return (
    <View style={styles.container}>
      <Button title='Create Task' onPress={handlePress} />
      <Text style={styles.heading}>Your tasks</Text> 
      <FlatList
        keyExtractor={item => String(item.id)}
        data={task}
        renderItem={renderItem}
        onPress={sendId(task.id)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  }
});