import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { MyContext } from '../storage/context'

export default function MessageForm(props) {    

  const [message, setMessage] = useState('')
  const { postMessage } = useContext(MyContext)

  const sendMessage = async () => {
    const newMesssage = await postMessage(props.task, message).then(setMessage(''))
  }

  return (
    <View style={styles.container}>
      <Text>Message form!</Text>
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)} 
        placeholder='Write your message here..' 
        style={styles.inputField}/>
      <Pressable 
        style={styles.button} 
        onPress={sendMessage} >
          <Text style={styles.buttonText}> send </Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
 inputField: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    width: 80,
    borderRadius: 50
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20
  }
});