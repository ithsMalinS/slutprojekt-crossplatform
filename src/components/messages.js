//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageItem from '../components/messageItem'
import MessageForm from '../components/messageForm'

export default function Messages(props) {    

  return (
    <View style={styles.container}>
      <Text>All messages!</Text>
      <MessageForm/>
      <MessageItem/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});