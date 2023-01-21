import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { styles } from '../../style/style';


import Dashboard, {screenOptins as DashboardScreenOption} from '../screens/Dashboard';
import Questions,{screenOptins as QuestionsScreenOpton} from '../screens/Questions';
import Failed,{screenOptins as FailedScreenOptions} from '../screens/Failed';
import Success,{screenOptins as SuccessScreenOptions} from '../screens/Success';




const Stack = createStackNavigator();

const MainStack = () => {
return (
    <Stack.Navigator>
        <Stack.Screen name={"Dashboard"} component={Dashboard} options={DashboardScreenOption}/>
        <Stack.Screen name={"Questions"} component={Questions} options={QuestionsScreenOpton} />
        <Stack.Screen name={"Failed"} component={Failed} options={FailedScreenOptions} />
        <Stack.Screen name={"Success"} component={Success} options={SuccessScreenOptions} />
    </Stack.Navigator>
)
};

export default MainStack;