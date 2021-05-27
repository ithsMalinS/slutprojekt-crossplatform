import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Login from '../screens/login'
import Home from '../screens/home'


const Stack = createStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}


export default MainStack