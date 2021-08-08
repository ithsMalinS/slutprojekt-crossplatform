
import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import Button from '../components/button'
import LogStyle from '../style/styling'
import { MyContext } from '../storage/context'


export default function TaskForm(props) {
  
  const [errorMessage, setErrorMessage] = useState(null)
  const [clientMessage, setClientMessage] = useState(null)
  const [message, setMessage] = useState(null)
  const [clientId, setClientId] = useState(null)
  const { createNewTask } = useContext(MyContext)


  const taskAdded = () => {
    setClientMessage('New task has been added')
    setTimeout(() => {
      setClientMessage(null)
    }, 3000);
  }

  const checkValid = async() => {
    Keyboard.dismiss()
    if (message == null || clientId == null){
      setErrorMessage('Please enter both fields')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    } else {
      addTask()
    }
  }

  const addTask = async () => {
      await createNewTask(clientId, message)
      setMessage(null)
      setClientId(null) 
      taskAdded()
  }

  return (
    <View style={styles.container}>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      {clientMessage && <Text style={styles.success}>{clientMessage}</Text>}
      <TextInput 
        placeholder='Please write your task here...' 
        style={[LogStyle.inputField,styles.inputField]}
        value={message}
        onChangeText={string => setMessage(string)}
        required={true}  
      />

      <TextInput 
        placeholder='CustomerID' 
        style={LogStyle.inputField}
        value={clientId}
        onChangeText={string => setClientId(string)}  
      />
      
      <Button title='Create new task' onPress={checkValid}/>
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
  },
  success : {
    marginVertical: 30,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: '#4c4c4c'
  },
  error: {
    marginVertical: 30,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: 'red'
  }
});