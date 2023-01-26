import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { styles } from '../../style/style';

const MultipleQ = (props) => {




    return (
        <View style={styles.optionsView}>
            <TouchableOpacity onPress={() => {props.handler(1)}} style={styles.answerBtn}> 
                <Text style={styles.btnTxt}>{props.possibleAnswers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.handler(0)}} style={styles.answerBtn}>
                <Text style={styles.btnTxt}>{props.possibleAnswers[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.handler(0)}} style={styles.answerBtn}>
                <Text style={styles.btnTxt}>{props.possibleAnswers[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.handler(0)}} style={styles.answerBtn}>
                <Text style={styles.btnTxt}>{props.possibleAnswers[3]}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MultipleQ;