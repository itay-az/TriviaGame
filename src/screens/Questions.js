import React, {useEffect,useState} from 'react';
import {View,Text,ActivityIndicator,SafeAreaView,ScrollView} from 'react-native';
import BooleanQ from '../components/BooleanQ';
import MultipleQ from '../components/MultipleQ';
import { styles } from '../../style/style';

const Questions = (props) => {

    const [q,setQ] = useState();
    const [cnt,setCnt] = useState(0)
    const [isLoading,setIsLoading] = useState(true);
    const [correct,setCorrect] = useState(0);
    const [incorrect,setInCorrect] = useState(0);

    const whenLoading = () => {
        setIsLoading(true);
        setQ(props.route.params.questions.results[cnt]);
        setIsLoading(false);
    }

    useEffect(() => {
        whenLoading();        
        },[])

    const handleClick = async(isCorrect) => {
        isCorrect == 1 ? setCorrect(correct+1) : setInCorrect(incorrect+1);
        setCnt(cnt+1);
        setQ(props.route.params.questions.results[cnt]);
        if(incorrect >= 1) {
            props.navigation.navigate("Failed")
        }
        if(cnt+1 >= 20){
            if(incorrect> 1) {
                props.navigation.navigate("Failed")
            }
            else{
                props.navigation.navigate("Success")
            }
        }
    }



    return(
        <SafeAreaView style={styles.questionContainer}>
            <View style={styles.qHeader}>
                <Text style={styles.qText}>
                    Question {cnt+1}/20 
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
                                <BooleanQ questions={q} handler={handleClick} />
                                :
                                <MultipleQ questions={q} handler={handleClick} />
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