import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView,Text,View, Image,TouchableOpacity} from 'react-native';
import { styles } from '../../style/style';

const Failed = (props) => {

    return(
        <SafeAreaView style={styles.FailedContainer}>

            <View stylele={styles.FailedBody}>

                <View style={styles.FailedHeaderContainer}>
                    <Text style={styles.FailedHeaderTextBig}>
                        Failed
                    </Text>
                
                    <Text style={styles.FailedHeaderText}>
                        You need to answer 10 correct answers
                    </Text>
                </View>

                <Image source={require('../../assets/failed_character.png')} style={styles.mainLogo}/>
            </View>
            <View style={styles.restart}>
                <TouchableOpacity style={styles.answerBtn} onPress={() => {props.navigation.navigate("Dashboard")}}>
                    <Text style={styles.btnTxt}>
                        Try again
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export const screenOptins = () => {
    return {
        headerShown:false,
    }
}

export default Failed;