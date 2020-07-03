import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


// App Pages

import Login from './pages/Login/index'
import Home from './pages/Home/index'
import Profile from './pages/Profile/index'
import Rank from './pages/Rank/index'
import Details from './pages/Details/index'
import Discount from './pages/Discount/index'
import Roullete from './pages/Roullete/index'
import CheckIn from './pages/CheckIn/index'
import CheckInSuccess from './pages/CheckInSuccess/index'
import CheckOut from './pages/CheckOut/index'

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" >
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                <Stack.Screen name="Rank" component={Rank} options={{ title: 'Rank' }} />
                <Stack.Screen name="CheckIn" component={CheckIn} options={{ title: 'CheckIn' }} />
                <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
                <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
                <Stack.Screen name="Discount" component={Discount} options={{ title: 'Discount' }} />
                <Stack.Screen name="Roullete" component={Roullete} options={{ title: 'Roullete' }} />
                <Stack.Screen name="CheckInSuccess" component={CheckInSuccess} options={{ title: 'CheckInSuccess' }} />
                <Stack.Screen name="CheckOut" component={CheckOut} options={{ title: 'CheckOut' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}