import React from 'react';
import {View,Text,ActivityIndicator,TouchableOpacity,} from 'react-native';
import { styles } from '../../style/style';

const BooleanQ = (props) => {

    return (
        <View style={styles.optionsView}>
            <TouchableOpacity style={styles.answerBtn} onPress={() => {props.handler(1)}}>
                <Text style={styles.btnTxt}>{props.possibleAnswers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answerBtn} onPress={() => {props.handler(0)}}>
                <Text style={styles.btnTxt}>{props.possibleAnswers[1]}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default BooleanQ;