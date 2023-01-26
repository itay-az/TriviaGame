import React,{useCallback, useEffect,useState} from 'react';
import {SafeAreaView,Text,TouchableOpacity,Image} from 'react-native';
import { styles } from '../../style/style';

const Dashboard = (props) => {

    const [questions,setQuestions] = useState();

    const getData = async() => {
        const response = await fetch('https://opentdb.com/api.php?amount=20&category=18',{method:'get'});
        const data = await response.json();
        setQuestions(data);
    };

    useEffect(() => {
        getData();
    },[questions])

    useCallback
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/splash_logo.png')} style={styles.mainLogo}/>

            <TouchableOpacity style={styles.DashboardBtn} onPress={() => {props.navigation.navigate('Questions', {questions:questions})}}>
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