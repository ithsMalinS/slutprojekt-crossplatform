//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(props) {

const handlePress = () => {
    props.navigation.navigate('Login')
}    

  return (
    <View style={styles.container}>
      <Text>Homepage!</Text>
      <Button
        title="Login"
        onPress={() => handlePress}
        />
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