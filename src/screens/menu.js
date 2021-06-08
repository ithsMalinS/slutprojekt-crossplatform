//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import Swipe from '../gestures/swipe'

export default function Menu(props) {
    const [colorFlag, setColorFlag] = useState('tomato')

    const action = () => {
      
        setColorFlag('blue')
        console.log('Hej');
    }

    const actionTwo = () => {
      
        setColorFlag('pink')
        console.log('YES');
    }

    const actionThree = () => {
        setColorFlag('yellow')
        console.log('UP');

    }

    const actionFour = () => {
        setColorFlag('purple')
        console.log('Down');

    }



    return (

        <SafeAreaView style={styles.container}>
            <Swipe
                swipeRight ={action}
                swipeLeft ={actionTwo}
                swipeUp ={actionThree}
                swipeDown ={actionFour}
            >

                <View style={[styles.box, {backgroundColor:colorFlag}]} >

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

    box: {
        // backgroundColor: 'tomato',
        width: 200,
        height: 200,
    },
});