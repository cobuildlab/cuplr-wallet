import React, { ReactElement } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { MainStack } from './MainStackNavigator';

export const AppNavigator = (): ReactElement => {
  const theme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <MainStack />
    </NavigationContainer>
  );
};
