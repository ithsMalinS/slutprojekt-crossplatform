//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import Swipe from '../gestures/swipe'

export default function Menu(props) {

    



    return (

        <SafeAreaView style={styles.container}>
            <Swipe>

<View style={styles.box}>

           
            
            </View>
        
        </Swipe>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    box:{

        backgroundColor='tomato',
        width: 200,
        height: 200,
    },
});