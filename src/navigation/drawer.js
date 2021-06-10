import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/home'
import CreateTask from '../screens/newTask';
import Tasks from '../screens/tasks';
import Login from '../screens/login';




const Drawer = createDrawerNavigator()
const MainDrawer = () => {
    return (

        <Drawer.Navigator initialRouteName='Login'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Create task" component={CreateTask} />
            <Drawer.Screen name="Tasks" component={Tasks} />

            <Drawer.Screen name="Login" component={Login} />

           

           

        </Drawer.Navigator>
    )
}


export default MainDrawer
