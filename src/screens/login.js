//import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useContext} from 'react';
import { StyleSheet, Text, View, } from 'react-native'
import LoginForm from '../components/loginForm'
import { getValueFor } from '../storage/expoStorage';
import {MyContext} from '../storage/context'

export default function Login(props) {


  const {getMe } = useContext(MyContext)


  useEffect(() => {
    run()
   
  }, [])



  const run = async () => {
  
    const loggedIn = getValueFor('token')

    if(loggedIn){
      await getMe()
      props.navigation.navigate("Home")
    }
    
    
  }

  return (
    <View style={styles.container}>
      <LoginForm navigation={props.navigation} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#869f9f'
  },
  text: {
    marginTop: 40,
    fontSize: 20,
    color: 'white'
  }
});