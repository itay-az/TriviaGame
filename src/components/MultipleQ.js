import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { styles } from '../../style/style';

const MultipleQ = (props) => {




    return (
        <View style={styles.optionsView}>
            <TouchableOpacity onPress={() => {props.handler(1)}} style={styles.answerBtn}> 
                <Text style={styles.btnTxt}>{props.questions.correct_answer}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.handler(0)}} style={styles.answerBtn}>
                <Text style={styles.btnTxt}>{props.questions.incorrect_answers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.handler(0)}} style={styles.answerBtn}>
                <Text style={styles.btnTxt}>{props.questions.incorrect_answers[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.handler(0)}} style={styles.answerBtn}>
                <Text style={styles.btnTxt}>{props.questions.incorrect_answers[2]}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MultipleQ;