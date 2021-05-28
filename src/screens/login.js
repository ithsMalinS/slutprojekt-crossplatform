//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import LoginForm from '../components/loginForm'

export default function Login(props) {

  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login!</Text>
      <LoginForm/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#869f9f'
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    color: 'white'
  }
});