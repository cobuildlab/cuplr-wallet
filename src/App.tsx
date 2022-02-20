/* eslint-disable @typescript-eslint/quotes */
import React, { ReactElement } from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Providers } from './providers/Providers';

import { AppNavigator } from './shared/navigation/AppNavigator';

const ignoredLogs = [
  "The provided value 'moz",
  "The provided value 'ms-stream",
];

LogBox.ignoreLogs(ignoredLogs);

export const App = (): ReactElement => {
  return (
    <SafeAreaProvider>
      <Providers>
        <AppNavigator />
      </Providers>
    </SafeAreaProvider>
  );
};
