//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/button'
import LogStyle from '../style/styling'

export default function TaskForm(props) {    

  return (
    <View style={styles.container}>

      <TextInput placeholder='Please write your task here...' style={[LogStyle.inputField,styles.inputField]}/>

      <TextInput placeholder='CustomerID' style={LogStyle.inputField}/>
      
      <Button title='Create new task' onPress=''/>
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