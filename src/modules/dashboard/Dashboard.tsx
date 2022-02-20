import React, { ReactElement } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useMoralis } from 'react-moralis';

import { WalletOverview } from './components/WalletOverview';
import { ActionButtons } from './components/ActionButtons';

import { GradientButton } from '../../shared/components/gradient-button/GradientButton';
import { IconHeader } from '../../shared/components/icon-header/IconHeader';

import { useNavigator } from '../../hooks';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    width: '100%',
    height: '100%',
  },
  centeredContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export const Dashboard = ({ navigation }): ReactElement => {
  const navigator = useNavigator(navigation);

  const { logout } = useMoralis();

  const disconnect = (): void => {
    logout();
    navigator.resetAndNavigateTo('Auth');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <IconHeader />
      <View style={styles.container}>
        <WalletOverview />
        <ActionButtons
          onSend={() => navigator.navigate('Send')}
          onHistory={() => navigator.navigate('Transactions')}
        />
        <GradientButton
          title="Disconnect wallet"
          onPress={() => disconnect()}
        />
      </View>
    </SafeAreaView>
  );
};
