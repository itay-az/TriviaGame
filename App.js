import React from 'react';
import { styles } from './style/style';
import MainStack from './src/navigation/index';
import {NavigationContainer} from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>

  );
}

export default App;

