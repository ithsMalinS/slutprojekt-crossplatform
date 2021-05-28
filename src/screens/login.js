//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginForm from '../components/loginForm'

export default function Login(props) {

  

  return (
    <View>
      <Text>Login!</Text>
      <LoginForm/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  
});