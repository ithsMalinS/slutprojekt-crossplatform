//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login(props) {

    const handlePress = () => {
        props.navigation.navigate('Home')
    }

  return (
    <View>
      <Text>Login!</Text>
      <Button
        title="Home"
        onPress={() => handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
});