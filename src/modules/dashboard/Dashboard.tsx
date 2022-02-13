import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import { WalletOverview } from './components/WalletOverview';

import { Wallet } from '../../constants/types';
import { shortenAddress } from '../../utils/helpers';
import { getWalletBalance } from '../../utils/api';
import { GradientButton } from '../../shared/components/gradient-button/GradientButton';
import { ActionButtons } from './components/ActionButtons';
import { IconHeader } from '../../shared/components/icon-header/IconHeader';

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
  const connector = useWalletConnect();
  const [isLoading, setIsLoading] = useState(true);
  const [wallet, setWallet] = useState<Wallet>({} as Wallet);

  const loadWallet = useCallback(async () => {
    const accountWallet: Wallet = {
      address: shortenAddress(connector.accounts[0]),
      tokens: await getWalletBalance(connector.accounts[0]),
    };

    setWallet(accountWallet);
    setIsLoading(false);
  }, [wallet]);

  useEffect(() => {
    if (connector.connected) {
      loadWallet();
    } else {
      const action = CommonActions.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      });

      navigation.dispatch(action);
    }
  }, [connector.connected]);

  if (isLoading) {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <IconHeader />
        <View style={styles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <IconHeader />
      <View style={styles.container}>
        <WalletOverview wallet={wallet} />
        <ActionButtons onHistory={() => navigation.navigate('Transactions')} />
        <GradientButton
          onPress={() => connector.killSession()}
          title="Disconnect wallet"
        />
      </View>
    </SafeAreaView>
  );
};
