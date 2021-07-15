//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './navigation/drawer'
import {StateProvider} from '../src/storage/context'



export default function App() {
  return (
   
    <StateProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </StateProvider>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
