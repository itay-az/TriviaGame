import React from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style/style';
import mainStack from './src/navigation/index'
import Dashboard from './src/screens/Dashboard';

const App = () => {
  return (
    <View style={styles.container}>
      <Dashboard />

    </View>
  );
}

export default App;

