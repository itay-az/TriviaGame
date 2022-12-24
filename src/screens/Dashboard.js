import React from 'react';
import {SafeAreaView,Text,TouchableOpacity,Image} from 'react-native';
import { styles } from '../../style/style';
import Questions from './Questions';

const Dashboard = props => {

    const handleClick = () => {
        props.navigation.navigate(Questions)
    }


    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/splash_logo.png')} style={styles.mainLogo}/>

            <TouchableOpacity style={styles.DashboardBtn} onPress={handleClick}>
                <Text style={styles.btnTxt}>Let's Play</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export const screenOptins = () => {
    return {
        headerShown:false
    }
}

export default Dashboard;