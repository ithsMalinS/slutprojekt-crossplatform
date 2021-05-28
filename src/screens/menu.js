//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Menu(props) {    

    const handlePress = (page) => {
        props.navigation.navigate(page)
    }


  return (
    <View style={styles.container}>
      <Text>Menu!</Text>
      <Text
        onPress={handlePress('Home')}
      >Home</Text>
      <Text
        onPress={handlePress('Tasks')}
      >My tasks</Text>
      <Text
        onPress={handlePress('Create task')}
      >Create new task</Text>
      <Button>Sign out</Button>
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