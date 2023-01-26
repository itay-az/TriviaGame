import React, {useCallback, useEffect,useState} from 'react';
import {View,Text,ActivityIndicator,SafeAreaView,ScrollView} from 'react-native';
import BooleanQ from '../components/BooleanQ';
import MultipleQ from '../components/MultipleQ';
import { styles } from '../../style/style';
import * as Math from 'mathjs';

const Questions = (props) => {

    const [q,setQ] = useState();
    const [cnt,setCnt] = useState(0)
    const [isLoading,setIsLoading] = useState(true);
    const [correct,setCorrect] = useState(0);
    const [incorrect,setInCorrect] = useState(0);
    const [answers,setAnswers] = useState([]);
    const [time, setTime] = useState(60);
    
    const buildAnswers = async() => {
        let rnd = Math.floor(Math.random(4));
        let results = [];
        results[rnd] =  await q.correct_answer;
        let j = 0;
        if(q.type == "multiple") {
            for(let i = 0; i < 4; i++) {
                if(i != rnd) {
                    results[i] = q.incorrect_answers[j];
                    j++;
                }
            }
        }
        else{
            rnd = Math.floor(Math.random(2));
            results[rnd] = q.correct_answer;
            if(rnd == 0) {
                results[1] = q.incorrect_answers[0];
            }
            else{
                results[0] = q.incorrect_answers[0];
            }
        }
        setAnswers(results);

    }

    const Timer = ()=>{
        useEffect(()=>{
          const interval = setInterval(()=> {
            setTime((time)=> time -1);
            if (cnt < 20 && time <= 0){
                setInCorrect(incorrect+1)
                handleClick(0);
                setTime(60);
            }
          },1000);
          return ()=> clearInterval(interval);
        },[time]);
      }
      Timer();

    const whenLoading = () => {
        setIsLoading(true);
        setQ(props.route.params.questions.results[cnt]);
        setIsLoading(false);
    }



    useEffect(() => {
        if(isLoading){
        whenLoading();
        }
        if(!isLoading){
        buildAnswers();
    }
    },[q])

    

    const handleClick = async(isCorrect) => {
        isCorrect == 1 ? setCorrect(correct+1) : setInCorrect(incorrect+1);
        setCnt(cnt+1);
        setQ(props.route.params.questions.results[cnt]);

        if(incorrect >= 10) {
            props.navigation.navigate("Failed")
        }
        if(cnt+1 >= 20){
            if(incorrect> 10) {
                props.navigation.navigate("Failed")
            }
            else{
                props.navigation.navigate("Success")
            }
        }
        setTime(60)
    }



    return(
        <SafeAreaView style={styles.questionContainer}>
            <View style={styles.qHeader}>
                <Text style={styles.qText}>
                    Question {cnt+1}/20 
                </Text>
                <Text style={styles.qText}>
                    Time Left = {time}
                </Text>
            </View>
            <ScrollView style={styles.questionsContainer}>
            {isLoading ? 
                    <ActivityIndicator size='large' /> : 
                    <View style={styles.questionsContainer}>
                            <View style={styles.qPageTop}>
                                <Text>Level:</Text>
                                <Text style={styles.levelDif}> {q.difficulty}</Text>
                            </View>
                            <View style={styles.questionView}>
                                <Text style={styles.qeustionText}>{q.question}</Text>
                            </View>
                            {q.type == "boolean" ? 
                                <BooleanQ questions={q} handler={handleClick} possibleAnswers={answers} />
                                :
                                <MultipleQ questions={q} handler={handleClick} possibleAnswers={answers}/>
                            }
                    </View>
            }
        </ScrollView>
        </SafeAreaView>
    )
}

export const screenOptins = () => {
    return {
        headerShown:false,
    }
}

export default Questions;