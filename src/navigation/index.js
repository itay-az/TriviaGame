import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';

const MainStackNavigator = createStackNavigator();
export const mainStack = () => {
return (
    <MainStackNavigator.Navigator>
        <MainStackNavigator.Screen name={"main"} component={Dashboard} />
        <MainStackNavigator.Screen />
        <MainStackNavigator.Screen />
        <MainStackNavigator.Screen />
    </MainStackNavigator.Navigator>
)
}