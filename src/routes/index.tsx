import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


// App Pages

import Login from '../pages/Login/index'
import Home from '../pages/Home/index'
import Profile from '../pages/Profile/index'
import Rank from '../pages/Rank/index'
import Details from '../pages/Details/index'
import Discount from '../pages/Discount/index'
import Roullete from '../pages/Roullete/index'
import CheckIn from '../pages/CheckIn/index'
import CheckInSuccess from '../pages/CheckInSuccess/index'
import CheckOut from '../pages/CheckOut/index'

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen  name="Login" component={Login}  options={{ title: 'Perfil' }}/>
                <Stack.Screen  name="Home" component={Home}  options={{ title: 'Perfil' }}/>
                <Stack.Screen  name="Rank" component={Rank} options={{ title: 'Classificação' }} />
                <Stack.Screen  name="CheckIn" component={CheckIn} options={{ title: 'Check-In' }} />
                <Stack.Screen  name="Profile" component={Profile}  options={{ title: 'Perfil' }}/>
                <Stack.Screen  name="Details" component={Details}  options={{ title: 'Perfil' }}/>
                <Stack.Screen  name="Discount" component={Discount}  options={{ title: 'Perfil' }}/>
                <Stack.Screen  name="Roullete" component={Roullete}  options={{ title: 'Perfil' }}/>
                <Stack.Screen  name="CheckInSuccess" component={CheckInSuccess}  options={{ title: 'Perfil' }}/>
                <Stack.Screen  name="CheckOut" component={CheckOut}  options={{ title: 'Perfil' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}