//import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/button'
import LogStyle from '../style/styling'
import { MyContext } from '../storage/context'

export default function TaskForm(props) {
  
  const [message, setMessage] = useState('')
  const [clientId, setClientId] = useState('')
  const { createNewTask } = useContext(MyContext)

  const addTask = async () => {
    await createNewTask(clientId, message)
    setMessage('')
    setClientId('')
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Please write your task here...' 
        style={[LogStyle.inputField,styles.inputField]}
        value={message}
        onChangeText={string => setMessage(string)}  
      />

      <TextInput 
        placeholder='CustomerID' 
        style={LogStyle.inputField}
        value={clientId}
        onChangeText={string => setClientId(string)}  
      />
      
      <Button title='Create new task' onPress={addTask}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    height: 202
  }
});