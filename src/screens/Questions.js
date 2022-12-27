import React, {useEffect} from 'react';
import {View,Text} from 'react-native';
import { styles } from '../../style/style';

const Questions = () => {

    const getData = async() => {
        const response = await fetch('https://opentdb.com/api.php?amount=20&category=18',{method:'get'});
        const data = await response.json();
        
    };

    useEffect(() => {
        getData();
    },[])

    return(
        <View style={styles.container}>
            <Text>Questions</Text>
        </View>
    )
}
export const screenOptins = () => {
    return {
        headerShown:true,
        
    }
}

export default Questions;