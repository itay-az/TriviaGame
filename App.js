import React from 'react';
import { styles } from './style/style';
import MainStack from './src/navigation/index';
import {NavigationContainer} from '@react-navigation/native';

import Questions from './src/screens/Questions';



const App = () => {
  return (
    // <NavigationContainer>
    //   <MainStack />
    // </NavigationContainer>

    <Questions />

  );
}

export default App;

