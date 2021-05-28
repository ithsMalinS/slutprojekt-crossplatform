//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';


export default function LoginForm(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  const signIn = () => {
    Keyboard.dismiss()
    console.log(username)
    console.log(password)
    setUsername('')
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
        style={styles.inputField}
        value={username}
        onChangeText={newText => setUsername(newText)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="password"
        style={styles.inputField}
        value={password}
        onChangeText={newText => setPassword(newText)}
      />
      <Pressable
        style={styles.button}
        onPress={signIn}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
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
    backgroundColor: 'floralwhite',
    color: 'black',
    padding: 10,
    paddingHorizontal: 20,
    width: 300,
    fontSize: 20,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    backgroundColor: '#4e9ac7',
    color: 'white',
    padding: 5,
    paddingHorizontal: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});