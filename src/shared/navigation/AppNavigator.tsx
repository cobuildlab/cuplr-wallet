import React, { ReactElement } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { MainStack } from './MainStackNavigator';
import { theme } from '../../constants/theme';

export const AppNavigator = (): ReactElement => {
  const navigationTheme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      background: theme.white,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <MainStack />
    </NavigationContainer>
  );
};
