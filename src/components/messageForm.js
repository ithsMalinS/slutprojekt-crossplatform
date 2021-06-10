import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
/* import Button from '../components/button' */
import LogStyle from '../style/styling'
export default function MessageForm(props) {    

  return (
    <View style={styles.container}>
      <Text>Message form!</Text>
      <TextInput placeholder='Write your message here..' style={styles.inputField}/>
      {/* <Button title='Send message'/> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4e9ac7',
  },
 inputField: {
    backgroundColor: 'white',
  }
});