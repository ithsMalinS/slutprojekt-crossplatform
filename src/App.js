import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
// import MainStack from './navigation/StackNavigator'
import Drawer from './navigation/drawer'
import {MyContextProvider} from '../src/storage/context'


export default function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </MyContextProvider>
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
