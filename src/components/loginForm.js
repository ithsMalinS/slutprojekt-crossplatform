//import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';

import { MyContext } from '../storage/context'


import LogStyle from '../style/styling'
import Button from '../components/button'


export default function LoginForm(props) {

  const [username, setUsername] = useState('arbetarn')
  const [password, setPassword] = useState('makrill')
  const [errorMessage, setErrorMessage] = useState(null)

  const {logIn } = useContext(MyContext)

  const setError = () => {
    setErrorMessage('Invalid username or password')
    setTimeout(() => {
      setErrorMessage(null)
    }, 3000);
  }

  const signIn = async () => {
    Keyboard.dismiss()
    const auth = await logIn(username, password)
    if(auth){
      props.navigation.navigate('Home')
    }else{
      setError()
    }
  }

  return (
    <View style={styles.container}>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        placeholder="username"
        style={LogStyle.inputField}
        value={username}
        onChangeText={newText => setUsername(newText)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        style={LogStyle.inputField}
        value={password}
        onChangeText={newText => setPassword(newText)}
      />
      <Button onPress={signIn} title='Login' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: '#b20000',
    marginBottom: 20,
    fontSize: 20
  }
});