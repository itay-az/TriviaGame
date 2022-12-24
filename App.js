import React from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style/style';
import mainStack from './src/navigation/index'
import Dashboard from './src/screens/Dashboard';
import Questions from './src/screens/Questions';
import Failed from './src/screens/Failed';
import Success from './src/screens/Success';


const App = () => {
  return (
    <View style={styles.container}>
      <Success />

    </View>
  );
}

export default App;

