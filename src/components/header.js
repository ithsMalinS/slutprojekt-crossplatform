import React, {useContext} from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import {MyContext} from '../storage/context'

export default function Header(props) {    
  const {theme, switchTheme} = useContext(MyContext)

  const changeTheme = () => theme == 'dark' ? switchTheme('light') : switchTheme('dark')
  
  return (
    <View style={styles.container}>
      <Button
        title = "Toggle" onPress={() => props.navigation.toggleDrawer()}   
      />
      
      <Button
        title = "Toggle2" onPress={changeTheme}   
      />
      
      <Text style={styles[theme]}>Dragon Force!</Text>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {  
    width: '100%',
    paddingTop: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    flexDirection:'row'
  },
  dark: {
    
    color: 'blue',
    backgroundColor: 'black',
  },
  light: {
   
    color: 'red',
    backgroundColor: 'white',
  }
});