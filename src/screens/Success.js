import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { styles } from '../../style/style';

const Success = (props) => {

    return(
        <View style={styles.successContainer}>
            <View style={styles.SuccessHeader}>
                <Text style={styles.HeaderText}>
                    Great Job!
                </Text>
            </View>
            <View style={styles.SuccessHeader}>
                <Text style={styles.BodyText}>
                    You answered all the questions correctly
                </Text>
            </View>
            <Image source={require('../../assets/success_character.png')} style={styles.mainLogo}/>
                <TouchableOpacity style={styles.answerBtn} onPress={() => {props.navigation.navigate("Dashboard")}}>
                    <Text style={styles.btnTxt}>
                        Try again
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export const screenOptins = () => {
    return {
        headerShown:false,
    }
}

export default Success;