//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TaskItem(props) {   
  
  const handlePress = () => {
    
    props.navigation.navigate('Task details')
}

  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Task item!</Text>
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