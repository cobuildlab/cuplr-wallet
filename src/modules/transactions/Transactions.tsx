import React, { ReactElement, useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

import { Transaction } from '../../constants/types';
import { getWalletTransactions } from '../../utils/api';
import { TransactionsOverview } from './components/TransactionsOverview';

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
    marginBottom: 32,
  },
});
export const Transactions = (): ReactElement => {
  const connector = useWalletConnect();
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = async (): Promise<void> => {
    const walletTransactions = await getWalletTransactions(
      connector.accounts[0],
    );
    setTransactions(walletTransactions);
    setIsLoading(false);
  };

  useEffect(() => {
    if (connector.connected) {
      loadTransactions();
    }
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TransactionsOverview transactions={transactions} />
      </View>
    </SafeAreaView>
  );
};
