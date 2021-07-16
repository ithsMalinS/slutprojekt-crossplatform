import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { MyContext } from '../storage/context'

import Logo from '../assets/right-arrow.png'


export default function MessageForm(props) {    

  const [message, setMessage] = useState('')
  const { postMessage } = useContext(MyContext)

  const sendMessage = async () => {
    await postMessage(props.task, message).then(setMessage(''))
    await props.getMessages()
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
     <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.avoidingView}
     >
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)} 
        placeholder='Write your message here..' 
        style={styles.inputField}/>
      <Pressable 
        onPress={sendMessage} >
          <Image
          style={styles.sendLogo} 
          source={Logo} />
      </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
 inputField: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#4c9ac7',
    paddingHorizontal: 20,
    marginRight: 5,
    height: 40,
    width: 250
  },
  avoidingView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendLogo: {
    width: 30,
    height: 30,
  }
});