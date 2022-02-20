import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useMoralis } from 'react-moralis';

import { WalletOverview } from './components/WalletOverview';
import { ActionButtons } from './components/ActionButtons';

import { GradientButton } from '../../shared/components/gradient-button/GradientButton';

import { useERC20Balance, useNavigator } from '../../hooks';
import { AssetsList } from '../assets/components/AssetsList';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    width: '100%',
    height: '100%',
    paddingBottom: 0,
  },
  centeredContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    marginBottom: 32,
  },
});

export const Dashboard = ({ navigation }): ReactElement => {
  const navigator = useNavigator(navigation);

  const { logout } = useMoralis();
  const { assets } = useERC20Balance();

  const disconnect = (): void => {
    logout();
    navigator.resetAndNavigateTo('Auth');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <WalletOverview />
        <ActionButtons
          onSend={() => navigator.navigate('Send')}
          onHistory={() => navigator.navigate('Transactions')}
        />
        <GradientButton
          title="Disconnect wallet"
          style={styles.button}
          onPress={() => disconnect()}
        />
        <ScrollView>
          <AssetsList assets={assets} onSelect={undefined} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
