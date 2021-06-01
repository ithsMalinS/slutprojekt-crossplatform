import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Header from '../components/header'

export default function Home(props) {

 

  return (
    <View style={styles.container}>
    <Header navigation={props.navigation}/>
      <Text>Homepage!</Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peachpuff',
    alignItems: 'center',
    
    
  },
});