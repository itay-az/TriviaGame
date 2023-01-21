import React from 'react';
import { styles } from './style/style';
import MainStack from './src/navigation/index';
import {NavigationContainer} from '@react-navigation/native';

import Success from './src/screens/Success';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>

    // <Success />                          

  );
}

export default App;

