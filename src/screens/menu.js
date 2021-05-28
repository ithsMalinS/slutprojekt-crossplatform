//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';

export default function Menu(props) {

    const image = require('../assets/bg_menu.jpg')

    const handlePress = (page) => {
        props.navigation.navigate(page)
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.list}>
                <Text
                    style={styles.links}
                    onPress={() => handlePress('Home')}
                >Home</Text>
                <Text
                    style={styles.links}
                    onPress={() => handlePress('Tasks')}
                >My tasks</Text>
                <Text
                    style={styles.links}
                    onPress={() => handlePress('Create task')}
                >Create new task</Text>
                </View>
                <Pressable 
                    style={styles.button}
                    onPress={() => handlePress('Login')}
                > 
                <Text style={styles.buttonText}>Sign Out</Text> 
                </Pressable>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: '100%',
        alignItems: "center",
        opacity: 0.7
    },
    list: {
        marginTop: -200
    },
    links: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: '#3B3B3B',
        color: 'white',
        marginBottom: 30,
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#4e9ac7',
        color: 'white',
        padding: 5,
        paddingHorizontal: 25,
        borderRadius: 20
    }
});