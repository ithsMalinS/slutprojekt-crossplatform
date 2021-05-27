import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/login'
import Home from '../screens/home'


const Stack = createStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}


export default MainStack