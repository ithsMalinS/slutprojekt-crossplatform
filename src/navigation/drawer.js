import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/home'
import Menu from '../screens/menu';
import CreateTask from '../screens/newTask';
import TaskDetails from '../screens/taskDetails';
import Tasks from '../screens/tasks';
import Login from '../screens/login';



const Drawer = createDrawerNavigator()
const MainDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='LogIn'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="Create task" component={CreateTask} />
            <Drawer.Screen name="Task details" component={TaskDetails} />
            <Drawer.Screen name="Tasks" component={Tasks} />
            <Drawer.Screen name="LogIn" component={Login} />
            

           

        </Drawer.Navigator>
    )
}


export default MainDrawer
