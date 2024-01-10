import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/Stack/Navigation';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppContainer;
