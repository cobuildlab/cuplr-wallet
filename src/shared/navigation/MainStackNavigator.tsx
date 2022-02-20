import React, { ReactElement, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTab } from './BottomTabNavigator';
import { Auth } from '../../modules/auth/Auth';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { Assets } from '../../modules/assets/Assets';

const Stack = createNativeStackNavigator();

export const MainStack = (): ReactElement => {
  const connector = useWalletConnect();

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (connector.connected) {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        options={{ headerShown: false }}
        component={Auth}
      />
      <Stack.Screen
        name="Root"
        options={{ headerShown: false }}
        component={BottomTab}
      />
      <Stack.Screen
        name="Assets"
        options={{ headerShown: false }}
        component={Assets}
      />
    </Stack.Navigator>
  );
};
