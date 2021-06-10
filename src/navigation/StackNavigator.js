import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Login from '../screens/login'
import Home from '../screens/home'
import CreateTask from '../screens/newTask';
import Tasks from '../screens/tasks';



const Stack = createStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create task" component={CreateTask} />
            <Stack.Screen name="Tasks" component={Tasks} />
            

           

        </Stack.Navigator>
    )
}


export default MainStack