import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { styles } from '../../style/style';


import Dashboard, {screenOptins as DashboardScreenOption} from '../screens/Dashboard';
import Questions from '../screens/Questions';
import Failed from '../screens/Failed';
import Success from '../screens/Success';




const Stack = createStackNavigator();

const MainStack = () => {
return (
    <Stack.Navigator>
        <Stack.Screen name={"Dashboard"} component={Dashboard} options={DashboardScreenOption}/>
        <Stack.Screen name={"Questions"} component={Questions} />
        <Stack.Screen name={"Failed"} component={Failed} />
        <Stack.Screen name={"Success"} component={Success} />
    </Stack.Navigator>
)
};

export default MainStack;