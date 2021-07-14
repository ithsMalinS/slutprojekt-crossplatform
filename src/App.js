import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
// import MainStack from './navigation/StackNavigator'
import Drawer from './navigation/drawer'
import {StateProvider} from '../src/storage/context'



export default function App() {
  return (
   // <ScrollView styles={{height: 600, width: "100%", margin: horizontal}}>
    <StateProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </StateProvider>
  //  </ScrollView>
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
