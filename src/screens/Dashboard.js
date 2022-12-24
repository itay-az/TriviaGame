import React from 'react';
import {SafeAreaView,Text,TouchableOpacity,Image} from 'react-native';
import { styles } from '../../style/style';

const Dashboard = () => {

    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/splash_logo.png')} style={styles.mainLogo}/>

            <TouchableOpacity style={styles.DashboardBtn}>
                <Text style={styles.btnTxt}>Let's Play</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Dashboard;