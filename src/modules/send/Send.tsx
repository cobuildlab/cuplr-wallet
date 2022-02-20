import React, { ReactElement } from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigator } from '../../hooks';

export const Send = ({ navigation }): ReactElement => {
  const navigator = useNavigator(navigation);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text>Hello, world!</Text>
    </SafeAreaView>
  );
};
