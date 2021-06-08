
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TaskInfo(props) {    

  return (
    <View style={styles.container}>
      <Text>{props.task.id}</Text>
      <Text>{props.task.description}</Text>
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