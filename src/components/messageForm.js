//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../components/button'
import LogStyle from '../style/styling'
export default function MessageForm(props) {    

  return (
    <View style={styles.container}>
      <Text>Message form!</Text>
      <TextInput placeholder='Write your message here..' style={[LogStyle.inputField,styles.inputField]}/>
      <Button title='Send message' onPress=''/>

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
  inputField: {
    height: 130
  }
});