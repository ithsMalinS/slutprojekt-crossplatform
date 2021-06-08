//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Animated } from 'react-native';
import Thingy from '../components/Thingy'


export default function Menu(props) {

    const [show, setShow] = React.useState(false)

    const handlePress = (page) => {
        props.navigation.navigate(page)
    }


    return (
        <SafeAreaView style={styles.container}>
        { show 
        ? 
          <Thingy color="blue" done={() => setShow(!show)}/> 
        : 
          <Thingy color="red" done={() => setShow(!show)}/> 
      }

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    });